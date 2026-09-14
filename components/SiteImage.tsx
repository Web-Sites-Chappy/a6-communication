import Image, { type ImageProps } from "next/image";
import photoSources from "@/lib/hq-photos.json";

const photos: Record<string, string> = photoSources;

/** Use original-derived sources while retaining Next's responsive image sizing. */
export default function SiteImage({ src, alt, quality = 90, ...props }: ImageProps) {
  const source = typeof src === "string" ? photos[src] || src : src;
  return <Image {...props} src={source} alt={alt} quality={quality} />;
}
