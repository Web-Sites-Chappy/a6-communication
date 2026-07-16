"use client";

import * as React from "react";

export interface RollingListItem {
  id: string;
  /** Big rolling headline (e.g. one of the 6A). */
  title: string;
  /** Full text revealed when the row is active. */
  description: string;
  /** Small right-aligned label (index / keyword). */
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface RollingListProps {
  items: RollingListItem[];
  /** Which item is open on first render. Defaults to the first. */
  defaultOpenId?: string;
}

/** True only on devices with a real hover pointer (desktop). */
function useHoverCapable() {
  const [canHover, setCanHover] = React.useState(true);
  React.useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return canHover;
}

const ROW_H = "clamp(50px, 8.5vw, 92px)";
const NAME_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  height: ROW_H,
  fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
  fontWeight: 200,
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  lineHeight: "0.9em",
  fontSize: "clamp(2.3rem, 7.5vw, 5rem)",
  whiteSpace: "nowrap",
};

/**
 * Interactive "rolling" list. Each row shows a headline that rolls from navy
 * to an italic accent state when active; activating a row expands a panel with
 * its full description (width-constrained so it never overflows) and an image.
 * Hover-driven on desktop, tap-to-toggle on touch.
 */
export function RollingList({ items, defaultOpenId }: RollingListProps) {
  const canHover = useHoverCapable();
  const [activeId, setActiveId] = React.useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null
  );

  const handleEnter = (id: string) => {
    if (canHover) setActiveId(id);
  };
  const handleClick = (id: string) => {
    if (!canHover) setActiveId((cur) => (cur === id ? null : id));
  };

  return (
    <div style={{ width: "100%", borderTop: "1px solid rgba(var(--c-navy-rgb), 0.16)" }}>
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <div
            key={item.id}
            style={{ borderBottom: "1px solid rgba(var(--c-navy-rgb), 0.16)" }}
          >
            <button
              type="button"
              onMouseEnter={() => handleEnter(item.id)}
              onFocus={() => handleEnter(item.id)}
              onClick={() => handleClick(item.id)}
              aria-expanded={active}
              style={{
                position: "relative",
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "20px 0",
                cursor: canHover ? "default" : "pointer",
                color: "inherit",
                font: "inherit",
              }}
            >
              {/* rolling headline (two stacked states) */}
              <div style={{ position: "relative", overflow: "hidden", height: ROW_H }}>
                <div
                  style={{
                    transform: active ? "translateY(-50%)" : "translateY(0)",
                    transition: "transform 600ms cubic-bezier(0.76, 0, 0.24, 1)",
                    willChange: "transform",
                  }}
                >
                  <span style={{ ...NAME_STYLE, color: "var(--c-navy)" }}>{item.title}</span>
                  <span
                    style={{ ...NAME_STYLE, color: "var(--c-rouge)", fontStyle: "italic" }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>

              {item.label ? (
                <span
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: 0,
                    fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.3em",
                    color: "rgba(var(--c-navy-rgb), 0.45)",
                    opacity: active ? 0 : 1,
                    transition: "opacity 0.3s var(--e-basic)",
                  }}
                >
                  {item.label}
                </span>
              ) : null}
            </button>

            {/* expanding panel — grid-rows trick keeps it height-agnostic */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: active ? "1fr" : "0fr",
                transition: "grid-template-rows 550ms cubic-bezier(0.035, 0.625, 0, 1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "34px",
                    alignItems: "center",
                    padding: "2px 0 30px",
                    opacity: active ? 1 : 0,
                    transition: "opacity 450ms ease",
                  }}
                >
                  <p
                    style={{
                      flex: 1,
                      maxWidth: "60ch",
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.98rem",
                      lineHeight: "1.7em",
                      color: "rgba(var(--c-navy-rgb), 0.8)",
                    }}
                  >
                    {item.description}
                  </p>

                  {canHover && item.imageSrc ? (
                    <div
                      style={{
                        flexShrink: 0,
                        width: "240px",
                        height: "160px",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "6px",
                        boxShadow: "0 18px 40px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        draggable={false}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(var(--c-navy-rgb), 0.18)",
                          mixBlendMode: "multiply",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
