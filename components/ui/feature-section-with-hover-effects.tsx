import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export interface FeatureItem {
  title: string;
  description: string;
  image?: string;
  href?: string;
  icon?: ReactNode;
}

export function FeaturesSectionWithHoverEffects({ features }: { features: FeatureItem[] }) {
  return (
    <div className="expertise-index">
      <div className="expertise-index-caption" aria-hidden="true">
        <span>Les expertises A6</span><span>Explorer / 0{features.length}</span>
      </div>
      <ol className="expertise-list">
        {features.map((feature, index) => (
          <li key={feature.title}>
            <ExpertiseSurface href={feature.href}>
              <span className="expertise-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="expertise-title">{feature.title}</h3>
              {feature.image && <span className="expertise-photo" aria-hidden="true">
                <Image src={feature.image} alt="" fill sizes="(max-width: 700px) 120px, 220px" />
              </span>}
              <span className="expertise-details">
                <span className="expertise-description">{feature.description}</span>
                {feature.href && <span className="expertise-discover">Explorer cette expertise</span>}
              </span>
              {feature.href && <span className="expertise-arrow" aria-hidden="true">↗</span>}
            </ExpertiseSurface>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ExpertiseSurface({ href, children }: { href?: string; children: ReactNode }) {
  return href
    ? <Link href={href} className="expertise-row">{children}</Link>
    : <div className="expertise-row expertise-row-static">{children}</div>;
}
