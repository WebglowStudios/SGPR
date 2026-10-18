"use client";

import { CLIENT_LOGOS } from "@/data/agencyData";
import { LightboxItem } from "@/types";

interface ClienteleProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

export default function Clientele({ onOpenLightbox }: ClienteleProps) {
  // Duplicate for seamless infinite marquee loop
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  const handleElevateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="clients" className="clientele-section">
      <div className="clientele-header">
        <div className="clientele-title-block">
          <span className="eyebrow">Trusted Partnerships</span>
          <h2 className="clientele-title">
            SELECT <span className="cursive-the">the</span> <em>Clientele</em>
          </h2>
        </div>
        <p className="clientele-desc">
          Strategic partnerships across culture, luxury fashion, fine jewellery,
          beauty, and vanguard technology elevated through bespoke narrative
          direction.
        </p>
      </div>

      {/* Infinite Continuous Marquee Strip */}
      <div className="clientele-carousel">
        <div className="clientele-track">
          {duplicatedLogos.map((client, index) => (
            <div
              key={index}
              className="clientele-item"
              onClick={() =>
                onOpenLightbox({
                  src: client.src,
                  title: client.name,
                  caption: client.caption,
                })
              }
            >
              <div className="clientele-logo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={client.src} alt={client.name} loading="lazy" />
              </div>
              <div className="clientele-overlay">
                <span className="clientele-name">{client.name}</span>
                <span className="clientele-cat">{client.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Label & Brand Strip */}
      <div className="clientele-bottom-strip">
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          50+ Brands Elevated · India &amp; Worldwide
        </span>
        <a
          href="#contact"
          onClick={handleElevateClick}
          className="mag-btn cursor-pointer"
        >
          Elevate Your Brand ↗
        </a>
      </div>
    </section>
  );
}
