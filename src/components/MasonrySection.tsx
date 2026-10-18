"use client";

import { MASONRY_COLUMNS } from "@/data/agencyData";
import { LightboxItem } from "@/types";

interface MasonrySectionProps {
  activeFilter: string;
  onOpenLightbox: (item: LightboxItem) => void;
}

export default function MasonrySection({
  activeFilter,
  onOpenLightbox,
}: MasonrySectionProps) {
  const isVisible =
    activeFilter === "all" ||
    "pr brand editorial spatial".includes(activeFilter);

  return (
    <section
      className="masonry-section transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0.35 }}
      data-category="pr brand editorial spatial"
    >
      <div className="masonry-grid">
        {MASONRY_COLUMNS.map((column, colIdx) => (
          <div key={colIdx} className="masonry-column">
            {column.map((card, cardIdx) => (
              <div
                key={cardIdx}
                className="masonry-card"
                onClick={() =>
                  onOpenLightbox({
                    src: card.src,
                    title: card.italicWord
                      ? `${card.title} ${card.italicWord}`
                      : card.title,
                    caption: card.caption,
                  })
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.src} alt={card.title} loading="lazy" />
                <div className="card-overlay">
                  <span className="card-tag">{card.tag}</span>
                  <div className="card-title">
                    <span>
                      {card.title}{" "}
                      {card.italicWord && <em>{card.italicWord}</em>}
                    </span>
                    <span className="card-arrow">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
