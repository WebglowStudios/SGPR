"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT_STATS } from "@/data/agencyData";

export default function AboutManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const targets = [ABOUT_STATS[0].count, ABOUT_STATS[1].count, ABOUT_STATS[2].count];
            const duration = 1800;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setCounts(targets.map((target) => Math.floor(easeOut * target)));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts(targets);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Top Eyebrow Strip */}
        <div className="about-top-bar reveal">
          <span className="eyebrow">Studio Practice &amp; Manifesto</span>
          <span className="about-loc-tag">Mumbai · London · Worldwide</span>
        </div>

        {/* Monumental Editorial Statement */}
        <div className="about-manifesto-wrap reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
          <h2 className="about-manifesto-heading">
            <span className="manifesto-row">We are a</span>
            <span className="manifesto-row manifesto-serif">
              <em>PR &amp; digital studio</em>
            </span>
            <span className="manifesto-row">built for brands</span>
            <span className="manifesto-row">
              that refuse to be <span className="manifesto-accent">ordinary.</span>
            </span>
          </h2>
        </div>

        {/* Supporting Editorial Narrative */}
        <div className="about-narrative-wrap reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
          <p className="about-narrative">
            A creative practice directing <span className="cursive-and">&amp;</span>{" "}
            shaping brand worlds as they emerge, evolve, or transform. Combining
            razor-sharp cultural strategy with beautiful execution &mdash;
            elevating how the world perceives you, one story at a time.
          </p>
        </div>

        {/* Horizontal Editorial Metrics Strip */}
        <div className="about-metrics-strip reveal" style={{ "--d": ".3s" } as React.CSSProperties}>
          {/* Metric 1 */}
          <div className="about-metric">
            <div className="metric-val-wrap">
              <span className="stat-num" data-count="50">{counts[0]}</span>
              <span className="metric-plus">+</span>
            </div>
            <span className="metric-label">{ABOUT_STATS[0].label}</span>
            <span className="metric-detail">{ABOUT_STATS[0].detail}</span>
          </div>

          <div className="about-metric-divider" />

          {/* Metric 2 */}
          <div className="about-metric">
            <div className="metric-val-wrap">
              <span className="stat-num" data-count="6">{counts[1]}</span>
              <span className="metric-plus">+</span>
            </div>
            <span className="metric-label">{ABOUT_STATS[1].label}</span>
            <span className="metric-detail">{ABOUT_STATS[1].detail}</span>
          </div>

          <div className="about-metric-divider" />

          {/* Metric 3 */}
          <div className="about-metric">
            <div className="metric-val-wrap">
              <span className="stat-num" data-count="200">{counts[2]}</span>
              <span className="metric-plus">+</span>
            </div>
            <span className="metric-label">{ABOUT_STATS[2].label}</span>
            <span className="metric-detail">{ABOUT_STATS[2].detail}</span>
          </div>

          <div className="about-metric-divider" />

          {/* Metric 4 (Availability) */}
          <div className="about-metric">
            <div className="metric-val-wrap">
              <span className="metric-status">
                <span className="avail-dot" />
                Available
              </span>
            </div>
            <span className="metric-label">{ABOUT_STATS[3].label}</span>
            <span className="metric-detail">{ABOUT_STATS[3].detail}</span>
          </div>
        </div>

        {/* Editorial Footer Action */}
        <div className="about-cta-wrap reveal" style={{ "--d": ".35s" } as React.CSSProperties}>
          <a
            href="#contact"
            onClick={handleStartProject}
            className="about-manifesto-btn mag-btn cursor-pointer"
          >
            <span className="cursive-the">the</span> Studio &mdash; Start a Project{" "}
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
