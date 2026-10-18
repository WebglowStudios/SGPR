"use client";

import { useRef, useState, useEffect } from "react";
import { CarouselRowData, LightboxItem } from "@/types";

interface CarouselRowProps {
  data: CarouselRowData;
  activeFilter: string;
  onOpenLightbox: (item: LightboxItem) => void;
}

export default function CarouselRow({
  data,
  activeFilter,
  onOpenLightbox,
}: CarouselRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const isVisible =
    activeFilter === "all" || data.category.includes(activeFilter);

  const slide = (direction: number) => {
    if (!containerRef.current || !trackRef.current) return;
    const container = containerRef.current;
    const track = trackRef.current;

    const step = container.clientWidth * 0.72;
    const maxScroll = Math.max(0, track.scrollWidth - container.clientWidth);

    let newOffset = offset + direction * step;
    if (newOffset < 0) newOffset = 0;
    if (newOffset > maxScroll) newOffset = maxScroll;

    setOffset(newOffset);
    track.style.transform = `translateX(-${newOffset}px)`;
  };

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !trackRef.current) return;
      const maxScroll = Math.max(
        0,
        trackRef.current.scrollWidth - containerRef.current.clientWidth
      );
      if (offset > maxScroll) {
        setOffset(maxScroll);
        trackRef.current.style.transform = `translateX(-${maxScroll}px)`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [offset]);

  // Touch swipe support
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 40) {
      slide(diff > 0 ? 1 : -1);
    }
  };

  return (
    <section
      className={`carousel-section row-${data.id} transition-opacity duration-500`}
      style={{
        opacity: isVisible ? 1 : 0.35,
        display: isVisible ? "block" : "block",
      }}
      data-category={data.category}
    >
      <div
        className="carousel-container"
        id={`carousel-${data.id}`}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="carousel-btn prev"
          onClick={() => slide(-1)}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className="carousel-btn next"
          onClick={() => slide(1)}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="carousel-track" id={`track-${data.id}`} ref={trackRef}>
          {data.slides.map((slideItem, index) => (
            <div
              key={index}
              className={`carousel-slide slide-${index}`}
              onClick={() =>
                onOpenLightbox({
                  src: slideItem.src,
                  title: slideItem.title,
                  caption: slideItem.caption,
                })
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slideItem.src}
                alt={slideItem.title}
                loading="lazy"
              />
              <div className="card-overlay">
                <span className="card-tag">{slideItem.tag}</span>
                <div className="card-title">
                  <span>{slideItem.title}</span>
                  <span className="card-arrow">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
