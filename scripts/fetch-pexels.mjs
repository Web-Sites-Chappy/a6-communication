// Usage: node --env-file=.env.local scripts/fetch-pexels.mjs "<recherche>" <nombre> <sous-dossier> [prefixe]
// Exemple: node --env-file=.env.local scripts/fetch-pexels.mjs "corporate meeting" 3 evenementiel reunion
// Requires PEXELS_API_KEY in .env.local (free key from https://www.pexels.com/api/).
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search";

function parseArgs() {
  const [query, countRaw, subdir, prefixArg] = process.argv.slice(2);
  if (!query || !countRaw || !subdir) {
    console.error(
      'Usage: node --env-file=.env.local scripts/fetch-pexels.mjs "<recherche>" <nombre> <sous-dossier> [prefixe]'
    );
    process.exit(1);
  }
  const count = Number.parseInt(countRaw, 10);
  if (!Number.isInteger(count) || count < 1 || count > 80) {
    console.error("Le nombre de photos doit être un entier entre 1 et 80.");
    process.exit(1);
  }
  const prefix = prefixArg ?? subdir;
  return { query, count, subdir, prefix };
}

async function searchPhotos(apiKey, query, count) {
  const url = new URL(PEXELS_SEARCH_URL);
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", String(count));

  const response = await fetch(url, { headers: { Authorization: apiKey } });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Pexels API a échoué (${response.status}): ${body}`);
  }
  const data = await response.json();
  return data.photos ?? [];
}

async function downloadAsWebp(photoUrl, destPath) {
  const response = await fetch(photoUrl);
  if (!response.ok) {
    throw new Error(`Téléchargement échoué (${response.status}): ${photoUrl}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  const webp = await sharp(buffer).webp({ quality: 82 }).toBuffer();
  await writeFile(destPath, webp);
}

async function main() {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.error("PEXELS_API_KEY manquante. Ajoute-la dans .env.local puis relance avec --env-file=.env.local.");
    process.exit(1);
  }

  const { query, count, subdir, prefix } = parseArgs();
  const outputDir = path.join(process.cwd(), "public", "photos", subdir);
  await mkdir(outputDir, { recursive: true });

  const photos = await searchPhotos(apiKey, query, count);
  if (photos.length === 0) {
    console.warn(`Aucun résultat Pexels pour "${query}".`);
    return;
  }

  for (const [index, photo] of photos.entries()) {
    const filename = `${prefix}-${index + 1}.webp`;
    const destPath = path.join(outputDir, filename);
    await downloadAsWebp(photo.src.large2x, destPath);
    console.log(`✓ ${path.join("public", "photos", subdir, filename)} — photo par ${photo.photographer} (${photo.url})`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
