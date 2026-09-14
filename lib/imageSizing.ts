import dimensions from "@/lib/photo-dimensions.json";
import sources from "@/lib/hq-photos.json";

const photos: Record<string, { width: number; height: number }> = dimensions;
const originals: Record<string, string> = sources;

export function getPhotoDimensions(src: string) {
  return photos[originals[src] ?? src] ?? { width: 2400, height: 1600 };
}

export function getPhotoAspectRatio(src: string) {
  const photo = getPhotoDimensions(src);
  return photo.width / photo.height;
}

/** Cover scales a landscape photo to the box height before cropping its sides. */
export function coverImageWidth(src: string, width: number, height: number) {
  return Math.ceil(Math.max(width, height * getPhotoAspectRatio(src)));
}

export function heroImageSizes(src: string, half: boolean) {
  const ratio = getPhotoAspectRatio(src);
  const minimum = Math.ceil((half ? 480 : 640) * ratio);
  const viewportHeight = Number(((half ? 55 : 100) * ratio).toFixed(2));
  const desktop = `max(100vw, ${minimum}px, ${viewportHeight}svh)`;
  return half
    ? `(max-width: 767px) max(100vw, ${Math.ceil(600 * ratio)}px), ${desktop}`
    : desktop;
}
