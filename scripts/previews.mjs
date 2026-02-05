#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const args = new Set(process.argv.slice(2));
const watchMode = args.has("--watch");
const printChanged = args.has("--print-changed");
const quiet = args.has("--quiet");
const maxDim = Number(process.env.PREVIEW_MAX || 2000);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const publicDir = path.join(rootDir, "public");
const imageExts = new Set([".png", ".jpg", ".jpeg", ".webp"]);

const log = (message) => {
  if (!quiet && !printChanged) {
    console.log(message);
  }
};

const hasSips = () => {
  const res = spawnSync("sips", ["-v"], { stdio: "ignore" });
  if (res.error && res.error.code === "ENOENT") {
    return false;
  }
  return true;
};

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const isImageFile = (filePath) => imageExts.has(path.extname(filePath).toLowerCase());

const isPreviewPath = (filePath) => {
  const parts = filePath.split(path.sep);
  return parts.includes("previews");
};

const previewPathFor = (filePath) => {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);
  return path.join(dir, "previews", base);
};

const needsUpdate = (src, dest) => {
  if (!fs.existsSync(dest)) return true;
  const srcStat = fs.statSync(src);
  const destStat = fs.statSync(dest);
  return srcStat.mtimeMs > destStat.mtimeMs;
};

const resizeWithSips = (src, dest) => {
  const res = spawnSync("sips", ["-Z", String(maxDim), src, "--out", dest], {
    stdio: "pipe",
  });
  if (res.status !== 0) {
    const stderr = res.stderr?.toString().trim();
    const stdout = res.stdout?.toString().trim();
    const details = stderr || stdout || "Unknown error";
    throw new Error(`sips failed for ${src}: ${details}`);
  }
};

const walkImages = (dir, images) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "previews") continue;
      walkImages(fullPath, images);
      continue;
    }
    if (entry.isFile() && isImageFile(fullPath) && !isPreviewPath(fullPath)) {
      images.push(fullPath);
    }
  }
};

const syncPreviews = () => {
  if (!fs.existsSync(publicDir)) {
    log(`No public/ folder found at ${publicDir}`);
    return [];
  }

  if (!hasSips()) {
    console.error("Error: 'sips' is required to generate previews (macOS only).");
    console.error("Run this on macOS or install a compatible image tool and update the script.");
    process.exit(1);
  }

  const images = [];
  walkImages(publicDir, images);

  const changed = [];
  for (const src of images) {
    const dest = previewPathFor(src);
    if (!needsUpdate(src, dest)) continue;
    ensureDir(path.dirname(dest));
    resizeWithSips(src, dest);
    changed.push(path.relative(rootDir, dest));
  }

  if (printChanged) {
    if (changed.length > 0) {
      console.log(changed.join("\n"));
    }
  } else {
    log(`Previews updated: ${changed.length}`);
  }

  return changed;
};

if (watchMode) {
  syncPreviews();
  log(`Watching ${publicDir} for image changes...`);

  let timer = null;
  const schedule = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      syncPreviews();
    }, 300);
  };

  fs.watch(publicDir, { recursive: true }, (eventType, filename) => {
    if (!filename) {
      schedule();
      return;
    }

    const normalized = filename.toString();
    if (normalized.includes(`${path.sep}previews${path.sep}`)) return;
    schedule();
  });
} else {
  syncPreviews();
}
