// Gjør originalbilder klare for nettsiden (se AGENTS.md):
// roter etter EXIF, maks 2400 px, JPG (eller PNG for strektegninger), og fjern all metadata (inkl. GPS).
// Bruk: node scripts/prosesser-bilder.mjs <målmappe> <kilde>=<nytt-navn> ...
//   f.eks. node scripts/prosesser-bilder.mjs src/content/prosjekter/headset/bilder Header.png=eksplodert.jpg
// Endelsen på nytt navn styrer formatet (.jpg eller .png).
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const [maal, ...par] = process.argv.slice(2);
if (!maal || par.length === 0) {
  console.error("Bruk: node scripts/prosesser-bilder.mjs <målmappe> <kilde>=<nytt-navn> ...");
  process.exit(1);
}
fs.mkdirSync(maal, { recursive: true });

for (const p of par) {
  const [kilde, navn] = p.split("=");
  const ut = path.join(maal, navn);
  // sharp fjerner metadata som standard når withMetadata() ikke brukes
  let bilde = sharp(kilde, { limitInputPixels: false })
    .rotate()
    .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true });
  bilde = navn.endsWith(".png")
    ? bilde.png({ compressionLevel: 9, palette: true, quality: 90 })
    : bilde.flatten({ background: "#ffffff" }).jpeg({ quality: 84, mozjpeg: true });
  const info = await bilde.toFile(ut);
  console.log(`${ut}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} kB`);
}
