import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dimensions = {};
for (const file of (await readdir("public/photos", { recursive: true })).sort()) {
  if (!/\.(webp|jpe?g|png)$/i.test(file) || file.includes("-WIN-")) continue;
  const { width, height } = await sharp(path.join("public/photos", file)).metadata();
  dimensions[`/photos/${file.split(path.sep).join("/")}`] = { width, height };
}
await writeFile("lib/photo-dimensions.json", JSON.stringify(dimensions, null, 2) + "\n");
console.log(`Updated dimensions for ${Object.keys(dimensions).length} photos.`);
