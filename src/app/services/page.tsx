"use client";

import { useState, useMemo, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightboxModal from "@/components/LightboxModal";
import {
  GALLERY_PROJECTS,
  WORK_CATEGORIES,
  GalleryProjectItem,
} from "@/data/servicesPageData";
import { LightboxItem } from "@/types";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  // Filter projects according to category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return GALLERY_PROJECTS;
    }
    return GALLERY_PROJECTS.filter((item) =>
      item.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  // Master lightbox list for navigation
  const allLightboxItems = useMemo<LightboxItem[]>(() => {
    return filteredProjects.map((item) => ({
      src: item.src,
      title: item.title || item.hoverTitle || "Artwork Showcase",
      caption: item.caption,
    }));
  }, [filteredProjects]);

  const handleOpenLightbox = (item: GalleryProjectItem) => {
    const foundIndex = filteredProjects.findIndex((p) => p.id === item.id);
    setCurrentLightboxIndex(foundIndex >= 0 ? foundIndex : 0);
    setLightboxOpen(true);
  };

  const handleNavigateLightbox = (direction: number) => {
    setCurrentLightboxIndex((prev) => {
      let next = prev + direction;
      if (next < 0) next = allLightboxItems.length - 1;
      if (next >= allLightboxItems.length) next = 0;
      return next;
    });
  };

  useEffect(() => {
    // Scroll reveal observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [activeCategory]);

  return (
    <div className="jb-gallery-wrap">
      {/* ── Custom Cursor ── */}
      <CustomCursor />

      {/* ── Persistent Agency Header (Unmodified) ── */}
      <Navbar />

      <main>
        {/* ── HERO HEADER: Selected Work ── */}
        <section className="jb-header">
          <h1 className="jb-title">Selected Work</h1>

          {/* ── CATEGORY TABS ROW ── */}
          <nav
            className="jb-tabs-row"
            aria-label="Filter selected work by category"
          >
            {WORK_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  className={`jb-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => {
                    // Clicking active tab resets back to all
                    setActiveCategory(isActive ? "ALL" : cat);
                  }}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </nav>
        </section>

        {/* ── 3-COLUMN EDITORIAL ART GALLERY ── */}
        <section
          className="jb-grid"
          aria-label="Selected work portfolio grid"
        >
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="jb-card reveal in"
              onClick={() => handleOpenLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title || item.hoverTitle || "project"}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenLightbox(item);
                }
              }}
            >
              <div className="jb-card-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title || item.caption}
                  className="jb-card-img"
                  loading="lazy"
                />
              </div>

              {/* Bold All-Caps White Title in Center of Artwork */}
              <div className="jb-card-overlay">
                {item.displayTitle ? (
                  <h2 className="jb-card-title">{item.displayTitle}</h2>
                ) : (
                  item.hoverTitle && (
                    <span className="jb-card-hover-title">
                      {item.hoverTitle}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* ── Persistent Agency Footer ── */}
      <Footer />

      {/* ── Fullscreen Art Lightbox Modal ── */}
      <LightboxModal
        isOpen={lightboxOpen}
        item={allLightboxItems[currentLightboxIndex] || null}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
