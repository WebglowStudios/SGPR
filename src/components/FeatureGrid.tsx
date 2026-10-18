"use client";

import { FEATURE_GRID_ITEMS } from "@/data/agencyData";
import { LightboxItem } from "@/types";

interface FeatureGridProps {
  activeFilter: string;
  onOpenLightbox: (item: LightboxItem) => void;
}

export default function FeatureGrid({
  activeFilter,
  onOpenLightbox,
}: FeatureGridProps) {
  const isVisible =
    activeFilter === "all" ||
    "editorial brand".includes(activeFilter);

  const { left, middle, stackedTop, stackedBottom } = FEATURE_GRID_ITEMS;

  return (
    <section
      className="feature-grid-section transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0.35 }}
      data-category="editorial brand"
    >
      <div className="feature-grid">
        {/* Left Column */}
        <div
          className="feature-col"
          onClick={() =>
            onOpenLightbox({
              src: left.src,
              title: `${left.title} Vogue`,
              caption: left.caption,
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={left.src} alt={left.title} loading="lazy" />
          <div className="card-overlay">
            <span className="card-tag">{left.tag}</span>
            <div className="card-title">
              <span>
                {left.title} <em>{left.italicWord}</em>
              </span>
              <span className="card-arrow">↗</span>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div
          className="feature-col"
          onClick={() =>
            onOpenLightbox({
              src: middle.src,
              title: middle.title,
              caption: middle.caption,
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={middle.src} alt={middle.title} loading="lazy" />
          <div className="card-overlay">
            <span className="card-tag">{middle.tag}</span>
            <div className="card-title">
              <span>{middle.title}</span>
              <span className="card-arrow">↗</span>
            </div>
          </div>
        </div>

        {/* Right Stacked Column */}
        <div className="feature-col-stacked">
          <div
            className="feature-stack-item"
            onClick={() =>
              onOpenLightbox({
                src: stackedTop.src,
                title: stackedTop.title,
                caption: stackedTop.caption,
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={stackedTop.src} alt={stackedTop.title} loading="lazy" />
            <div className="card-overlay">
              <span className="card-tag">{stackedTop.tag}</span>
              <div className="card-title">
                <span>{stackedTop.title}</span>
                <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="feature-stack-item"
            onClick={() =>
              onOpenLightbox({
                src: stackedBottom.src,
                title: stackedBottom.title,
                caption: stackedBottom.caption,
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={stackedBottom.src} alt={stackedBottom.title} loading="lazy" />
            <div className="card-overlay">
              <span className="card-tag">{stackedBottom.tag}</span>
              <div className="card-title">
                <span>{stackedBottom.title}</span>
                <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
