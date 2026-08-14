import Image from "next/image";
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
}

export function MarqueeCard({ item, className }: MarqueeCardProps) {
  return (
    <li className={cn("shrink-0 list-none", className)}>
      <Link
        href={item.href}
        className={cn(
          "group relative block overflow-hidden rounded-2xl",
          "h-[280px] w-[180px] sm:h-[310px] sm:w-[210px] lg:h-[330px] lg:w-[230px]",
          "shadow-sm transition-all duration-[350ms] ease-out will-change-transform",
          "hover:scale-[0.92] hover:shadow-2xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D2E6DC]",
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          draggable={false}
          sizes="230px"
        />

        <span
          className="absolute inset-x-0 top-0 h-1 opacity-90"
          style={{ backgroundColor: item.accentColor ?? "#003DDE" }}
          aria-hidden="true"
        />

        <div
          className={cn(
            "absolute inset-0 flex flex-col items-start justify-end gap-1 p-5",
            "bg-[#112250]/75 opacity-0 backdrop-blur-md",
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
