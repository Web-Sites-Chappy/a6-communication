import { readdir, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";

const originalDirectory = process.argv[2];
if (!originalDirectory) throw new Error("Usage: node scripts/prepare-hq-photos.mjs <original photos directory>");
const directory = path.resolve("public/photos");
const originals = new Set(await readdir(originalDirectory));
const mapping = JSON.parse(await readFile("lib/hq-photos.json", "utf8"));
await mkdir(path.join(directory, "hq"), { recursive: true });
for (const name of await readdir(directory)) {
  const match = /^(DSC_\d+)-v2\.(webp|jpg)$/.exec(name);
  if (!match || !originals.has(`${match[1]}.jpg`)) continue;
  const buffer = await sharp(path.join(originalDirectory, `${match[1]}.jpg`))
    .rotate().resize({ width: 3200, withoutEnlargement: true })
    .webp({ quality: 92, effort: 6 }).toBuffer();
  const hash = createHash("sha256").update(buffer).digest("hex").slice(0, 12);
  const output = `${match[1]}-${hash}.webp`;
  await writeFile(path.join(directory, "hq", output), buffer);
  mapping[`/photos/${name}`] = `/photos/hq/${output}`;
  console.log(`${name} -> ${output} (${Math.round(buffer.length / 1024)} KB)`);
}
await writeFile("lib/hq-photos.json", JSON.stringify(mapping, null, 2) + "\n");
