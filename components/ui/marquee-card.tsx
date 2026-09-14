import Image from "@/components/SiteImage";
import { coverImageWidth } from "@/lib/imageSizing";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface MarqueeCardData {
  id: string | number;
  title: string;
  description?: string;
  image: string;
  href: string;
  accentColor?: string;
}

interface MarqueeCardProps {
  item: MarqueeCardData;
  className?: string;
  duplicate?: boolean;
}

export function MarqueeCard({ item, className, duplicate = false }: MarqueeCardProps) {
  return (
    <li aria-hidden={duplicate || undefined} className={cn("shrink-0 list-none", duplicate && "services-gallery-clone", className)}>
      <Link
        href={item.href}
        tabIndex={duplicate ? -1 : undefined}
        className={cn(
          "marquee-depth-card group relative block overflow-hidden rounded-2xl",
          "h-[280px] w-[180px] sm:h-[310px] sm:w-[210px] lg:h-[330px] lg:w-[230px]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-rouge)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--c-fond)]",
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          draggable={false}
          sizes={`(max-width: 767px) ${coverImageWidth(item.image, 240, 310)}px, (max-width: 1023px) ${coverImageWidth(item.image, 210, 310)}px, ${coverImageWidth(item.image, 230, 330)}px`}
        />

        <span
          className="absolute inset-x-0 top-0 h-1 opacity-90"
          style={{ backgroundColor: item.accentColor ?? "var(--c-rouge)" }}
          aria-hidden="true"
        />

        <div
          className={cn(
            "service-card-copy absolute inset-0 flex flex-col items-start justify-end gap-1 p-5",
            "bg-gradient-to-t from-[var(--c-navy)]/95 via-[var(--c-navy)]/15 to-transparent opacity-0",
            "transition-opacity duration-[350ms] ease-out",
            "group-hover:opacity-100 group-focus-visible:opacity-100",
          )}
        >
          <span
            className={cn(
              "text-base font-semibold leading-tight text-white",
              "translate-y-2 opacity-0 transition-all duration-[350ms] ease-out",
              "group-hover:translate-y-0 group-hover:opacity-100",
              "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
            )}
          >
            {item.title}
          </span>
          {item.description ? (
            <span
              className={cn(
                "text-xs text-white/80",
                "translate-y-2 opacity-0 transition-all duration-[350ms] ease-out delay-75",
                "group-hover:translate-y-0 group-hover:opacity-100",
                "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
              )}
            >
              {item.description}
            </span>
          ) : null}
        </div>
      </Link>
    </li>
  );
}
