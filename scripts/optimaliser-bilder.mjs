import sharp from "sharp";
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, extname, basename } from "node:path";

const root = resolve(import.meta.dirname, "..");
const publicDir = resolve(root, "public");
const metadata = {};
const mapping = [];
const sourceText = (await Promise.all((await sourceFiles(resolve(root, "src"))).map((file) => readFile(file, "utf8")))).join("\n");
for (const project of await readdir(resolve(publicDir, "projects"), { withFileTypes: true })) {
  if (!project.isDirectory()) continue;
  const folder = resolve(publicDir, "projects", project.name);
  for (const file of await readdir(folder, { withFileTypes: true })) {
    if (!file.isFile() || !/\.(png|jpe?g)$/i.test(file.name) || file.name === "gigamap-stor.jpg") continue;
    try { await sharp(resolve(folder, file.name)).metadata(); }
    catch { console.warn(`Hoppet over en ubrukt fil som ikke er et bilde: ${project.name}/${file.name}`); continue; }
    const drawing = /technical|tegn|sketch/i.test(file.name);
    const slug = basename(file.name, extname(file.name)).toLowerCase().replace(/[_\s.]+/g, "-");
    const outputName = `${slug}.${drawing ? "png" : "jpg"}`;
    if (!sourceText.includes(file.name) && !sourceText.includes(outputName)) continue;
    const output = resolve(folder, "nett", outputName);
    await mkdir(resolve(folder, "nett"), { recursive: true });
    const resized = sharp(resolve(folder, file.name)).rotate().resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true });
    let buffer = drawing ? await resized.png({ compressionLevel: 9, palette: true, colours: 128 }).toBuffer()
      : await resized.jpeg({ quality: 84, mozjpeg: true }).toBuffer();
    if (!drawing && buffer.length > 500_000) buffer = await resized.jpeg({ quality: 72, mozjpeg: true }).toBuffer();
    await writeFile(output, buffer);
    const { width, height, exif } = await sharp(buffer).metadata();
    if (exif) throw new Error(`Metadata ble ikke fjernet: ${outputName}`);
    const oldPath = `/projects/${project.name}/${file.name}`;
    const newPath = `/projects/${project.name}/nett/${outputName}`;
    metadata[newPath] = { width, height };
    mapping.push({ folder: `/projects/${project.name}`, file: file.name, oldPath, newPath, outputName });
  }
}

async function sourceFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(path));
    else if (/\.(tsx|ts|json)$/.test(entry.name) && entry.name !== "bilder.json") files.push(path);
  }
  return files;
}
for (const file of await sourceFiles(resolve(root, "src"))) {
  const original = await readFile(file, "utf8");
  let source = original;
  for (const item of mapping) {
    source = source.replaceAll(item.oldPath, item.newPath);
    if (source.includes(`"${item.folder}"`) || (basename(file) === "SortingGuideProject.tsx" && item.folder === "/projects/sorting-guide")) {
      source = source.replaceAll("${basePath}/" + item.file, "${basePath}/nett/" + item.outputName);
      source = source.replaceAll(`"${item.file}"`, `"nett/${item.outputName}"`);
    }
  }
  if (source !== original) await writeFile(file, source);
}
for (const file of ["portrait.jpg", "og-image.jpg"]) {
  const path = resolve(publicDir, "images", file);
  let buffer = await readFile(path);
  const before = await sharp(buffer).metadata();
  if (before.exif || Math.max(before.width, before.height) > 2400 || buffer.length > 500_000) {
    buffer = await sharp(buffer).rotate().resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
    await writeFile(path, buffer);
  }
  const { width, height } = await sharp(buffer).metadata();
  metadata[`/images/${file}`] = { width, height };
}
await writeFile(resolve(root, "src/content/bilder.json"), JSON.stringify(metadata, null, 2) + "\n");
console.log(`Laget ${mapping.length} nettklare bilder med dimensjoner og uten EXIF. Originalfiler er bevart.`);
