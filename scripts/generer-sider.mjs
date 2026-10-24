import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sider = JSON.parse(await readFile(resolve(root, "src/content/sider.json"), "utf8"));
const redirects = JSON.parse(await readFile(resolve(root, "src/content/videresendinger.json"), "utf8"));
const template = (await readFile(resolve(root, "dist/index.html"), "utf8"))
  .replace(/\s*<link rel="canonical"[^>]*>/g, "")
  .replace(/\s*<meta name="robots"[^>]*>/g, "");
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

for (const side of sider) {
  const canonical = `https://bragesteen.no${side.path}`;
  let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(side.title)}</title>`);
  const values = {
    description: side.description, "og:title": side.title, "og:description": side.description,
    "og:url": canonical, "og:image": `https://bragesteen.no${side.image}`,
    "twitter:title": side.title, "twitter:description": side.description,
    "twitter:image": `https://bragesteen.no${side.image}`,
  };
  for (const [name, value] of Object.entries(values)) {
    const attribute = name.startsWith("og:") ? "property" : "name";
    html = html.replace(new RegExp(`<meta ${attribute}="${name}" content="[^"]*"\\s*\\/?>`),
      `<meta ${attribute}="${name}" content="${escape(value)}" />`);
  }
  html = html.replace("</head>", `    <link rel="canonical" href="${canonical}" />\n    <meta name="robots" content="${side.noindex ? "noindex, follow" : "index, follow"}" />\n  </head>`);
  const file = resolve(root, "dist", side.path === "/" ? "index.html" : `${side.path.slice(1)}.html`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

await writeFile(resolve(root, "dist/_redirects"), Object.entries(redirects)
  .flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`]).join("\n") + "\n");
await writeFile(resolve(root, "dist/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sider.filter((side) => !side.noindex).map((side) => `<url><loc>https://bragesteen.no${side.path}</loc></url>`).join("")}</urlset>\n`);
console.log(`Genererte ${sider.length} HTML-sider, sitemap og ${Object.keys(redirects).length * 2} videresendinger.`);
