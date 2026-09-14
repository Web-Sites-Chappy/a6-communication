import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Image from "@/components/SiteImage";
import { getPhotoDimensions } from "@/lib/imageSizing";

interface FramedHeroProps {
  imageSrc: string;
  title: ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "rouge" | "bleu";
}

/** Keep smaller originals at their native detail level instead of stretching them. */
export default function FramedHero({ imageSrc, title, subtitle, ctaLabel, ctaHref, ctaVariant }: FramedHeroProps) {
  const photo = getPhotoDimensions(imageSrc);
  const displayWidth = Math.floor(Math.min(560, photo.width / 2, 440 * photo.width / photo.height));
  return (
    <section className="site-hero framed-hero">
      <div className="framed-hero-inner">
        <div className="framed-hero-copy">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {ctaLabel && ctaHref && <Link href={ctaHref} className={ctaVariant === "bleu" ? "btn-bleu" : "btn-rouge"}>{ctaLabel}</Link>}
        </div>
        <div className="framed-hero-photo" style={{ "--photo-width": `${displayWidth}px` } as CSSProperties}>
          <Image src={imageSrc} alt="" width={photo.width} height={photo.height} priority
            sizes={`(max-width: 767px) min(88vw, ${displayWidth}px), ${displayWidth}px`}
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>
    </section>
  );
}
