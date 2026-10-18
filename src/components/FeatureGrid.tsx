"use client";

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
    activeFilter === "all" || "editorial brand".includes(activeFilter);

  return (
    <section
      className="feature-grid-section"
      style={{
        opacity: isVisible ? 1 : 0.35,
        display: isVisible ? "" : "block",
        transition: "opacity 0.4s ease",
      }}
      data-category="editorial brand"
    >
      <div className="feature-grid">
        <div
          className="feature-col"
          data-lightbox-src="https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png"
          data-lightbox-title="The Hooded Muse / Vogue Editorial"
          data-lightbox-caption="Vogue India Digital Cover &amp; Wardrobe Narrative"
          onClick={() =>
            onOpenLightbox({
              src: "https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png",
              title: "The Hooded Muse / Vogue Editorial",
              caption: "Vogue India Digital Cover & Wardrobe Narrative",
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png"
            alt="The Hooded Muse"
            loading="lazy"
          />
          <div className="card-overlay">
            <span className="card-tag">Cover Editorial</span>
            <div className="card-title">
              The Hooded Muse <em>Vogue</em> <span className="card-arrow">↗</span>
            </div>
          </div>
        </div>

        <div
          className="feature-col"
          data-lightbox-src="https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png"
          data-lightbox-title="Fuzzy Velvet &amp; Bespoke Ephemera"
          data-lightbox-caption="Sensory Brand Architecture &amp; Print Textures"
          onClick={() =>
            onOpenLightbox({
              src: "https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png",
              title: "Fuzzy Velvet & Bespoke Ephemera",
              caption: "Sensory Brand Architecture & Print Textures",
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png"
            alt="Fuzzy Velvet &amp; Ephemera"
            loading="lazy"
          />
          <div className="card-overlay">
            <span className="card-tag">Sensory Branding</span>
            <div className="card-title">
              Sensory Ephemera <span className="card-arrow">↗</span>
            </div>
          </div>
        </div>

        <div className="feature-col-stacked">
          <div
            className="feature-stack-item"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png"
            data-lightbox-title="Studio Pro Monolith In Situ"
            data-lightbox-caption="Apple Hardware Launch Strategy &amp; Editorial Placements"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png",
                title: "Studio Pro Monolith In Situ",
                caption: "Apple Hardware Launch Strategy & Editorial Placements",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png"
              alt="Studio Pro Monolith"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Hardware PR</span>
              <div className="card-title">
                Studio Monolith <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="feature-stack-item"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png"
            data-lightbox-title="Botanical Essence / Red Tulip"
            data-lightbox-caption="Organic Cosmetics Campaign &amp; Influencer Kit"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png",
                title: "Botanical Essence / Red Tulip",
                caption: "Organic Cosmetics Campaign & Influencer Kit",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png"
              alt="Botanical Essence Tulip"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Beauty PR</span>
              <div className="card-title">
                Botanical Essence <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
