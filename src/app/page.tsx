"use client";

import { useState, useMemo } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkHeader from "@/components/WorkHeader";
import CarouselRow from "@/components/CarouselRow";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import FeatureGrid from "@/components/FeatureGrid";
import MasonrySection from "@/components/MasonrySection";
import Services from "@/components/Services";
import AboutManifesto from "@/components/AboutManifesto";
import Clientele from "@/components/Clientele";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LightboxModal from "@/components/LightboxModal";

import {
  CAROUSEL_ROWS,
  MARQUEE_ITEMS_1,
  MARQUEE_ITEMS_2,
  FEATURE_GRID_ITEMS,
  MASONRY_COLUMNS,
  CLIENT_LOGOS,
} from "@/data/agencyData";
import { LightboxItem } from "@/types";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  // Compile all interactive project items into a single master collection for seamless arrow navigation
  const allLightboxItems = useMemo<LightboxItem[]>(() => {
    const items: LightboxItem[] = [];

    // Carousel rows
    CAROUSEL_ROWS.forEach((row) => {
      row.slides.forEach((s) => {
        items.push({ src: s.src, title: s.title, caption: s.caption });
      });
    });

    // Feature grid
    const { left, middle, stackedTop, stackedBottom } = FEATURE_GRID_ITEMS;
    items.push({
      src: left.src,
      title: `${left.title} Vogue`,
      caption: left.caption,
    });
    items.push({
      src: middle.src,
      title: middle.title,
      caption: middle.caption,
    });
    items.push({
      src: stackedTop.src,
      title: stackedTop.title,
      caption: stackedTop.caption,
    });
    items.push({
      src: stackedBottom.src,
      title: stackedBottom.title,
      caption: stackedBottom.caption,
    });

    // Masonry items
    MASONRY_COLUMNS.forEach((col) => {
      col.forEach((m) => {
        items.push({
          src: m.src,
          title: m.italicWord ? `${m.title} ${m.italicWord}` : m.title,
          caption: m.caption,
        });
      });
    });

    // Client logos
    CLIENT_LOGOS.forEach((c) => {
      items.push({ src: c.src, title: c.name, caption: c.caption });
    });

    return items;
  }, []);

  const handleOpenLightbox = (item: LightboxItem) => {
    const foundIndex = allLightboxItems.findIndex(
      (i) => i.src === item.src && i.title === item.title
    );
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

  return (
    <>
      {/* ── CUSTOM EDITORIAL CURSOR ── */}
      <CustomCursor />

      {/* ── PERSISTENT GLASS NAV ── */}
      <Navbar />

      {/* ── HERO CINEMATIC ── */}
      <Hero />

      {/* ── OUR WORK SHOWCASE ── */}
      <main id="works" className="work-showcase-wrapper">
        <div id="work" />

        {/* WORK HEADER & FILTER TABS */}
        <WorkHeader
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* ── ROWS 1 TO 6 BESPOKE CAROUSELS ── */}
        <CarouselRow
          data={CAROUSEL_ROWS[0]}
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />
        <CarouselRow
          data={CAROUSEL_ROWS[1]}
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />
        <CarouselRow
          data={CAROUSEL_ROWS[2]}
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />
        <CarouselRow
          data={CAROUSEL_ROWS[3]}
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />
        <CarouselRow
          data={CAROUSEL_ROWS[4]}
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />
        <CarouselRow
          data={CAROUSEL_ROWS[5]}
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* ── MARQUEE RIBBON 1 ── */}
        <MarqueeRibbon id="marquee-1" items={MARQUEE_ITEMS_1} />

        {/* ── FEATURE 3-COLUMN SHOWCASE ── */}
        <FeatureGrid
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* ── MARQUEE RIBBON 2 (Reverse) ── */}
        <MarqueeRibbon id="marquee-2" items={MARQUEE_ITEMS_2} reverse />

        {/* ── CURATED MASONRY 3-COLUMN SHOWCASE ── */}
        <MasonrySection
          activeFilter={activeFilter}
          onOpenLightbox={handleOpenLightbox}
        />
      </main>

      {/* ── SERVICES ACCORDION ── */}
      <Services />

      {/* ── ABOUT / MANIFESTO ── */}
      <AboutManifesto />

      {/* ── CLIENTELE MARQUEE ── */}
      <Clientele onOpenLightbox={handleOpenLightbox} />

      {/* ── CONTACT BRIEF ── */}
      <Contact />

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── LIGHTBOX MODAL ── */}
      <LightboxModal
        item={allLightboxItems[currentLightboxIndex] || null}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigateLightbox}
      />
    </>
  );
}
