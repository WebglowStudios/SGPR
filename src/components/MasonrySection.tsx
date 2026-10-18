"use client";

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
      className="masonry-section"
      style={{
        opacity: isVisible ? 1 : 0.35,
        display: isVisible ? "" : "block",
        transition: "opacity 0.4s ease",
      }}
      data-category="pr brand editorial spatial"
    >
      <div className="masonry-grid">
        {/* Column 1 */}
        <div className="masonry-column">
          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png"
            data-lightbox-title="Purple Cashmere Hood Editorial"
            data-lightbox-caption="Autumn/Winter Fashion Campaign &amp; Runway Retrospect"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png",
                title: "Purple Cashmere Hood Editorial",
                caption: "Autumn/Winter Fashion Campaign & Runway Retrospect",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png"
              alt="Purple Hood Editorial"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Editorial Run</span>
              <div className="card-title">
                Cashmere Hood <em>AW26</em> <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg/v1/fit/w_960,h_624,q_90,enc_avif,quality_auto/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg"
            data-lightbox-title="Midtown NYC Midnight Rollout"
            data-lightbox-caption="Global PR Announcement &amp; International Press Feed"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg/v1/fit/w_960,h_624,q_90,enc_avif,quality_auto/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg",
                title: "Midtown NYC Midnight Rollout",
                caption: "Global PR Announcement & International Press Feed",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg/v1/fit/w_960,h_624,q_90,enc_avif,quality_auto/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg"
              alt="Times Square Midnight"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">PR Announcement</span>
              <div className="card-title">
                Midtown NYC Takeover <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png/v1/fit/w_960,h_641,q_90,enc_avif,quality_auto/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png"
            data-lightbox-title="Cerulean Geometric Step Pattern"
            data-lightbox-caption="Mathematical Identity &amp; Generative Design System"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png/v1/fit/w_960,h_641,q_90,enc_avif,quality_auto/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png",
                title: "Cerulean Geometric Step Pattern",
                caption: "Mathematical Identity & Generative Design System",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png/v1/fit/w_960,h_641,q_90,enc_avif,quality_auto/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png"
              alt="Cerulean Geometric Step"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Generative Identity</span>
              <div className="card-title">
                Cerulean Geometric Steps <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="masonry-column">
          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png"
            data-lightbox-title="Tactile Velvet &amp; Business Collateral"
            data-lightbox-caption="VIP Invitation Suites &amp; Press Preview Kits"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png",
                title: "Tactile Velvet & Business Collateral",
                caption: "VIP Invitation Suites & Press Preview Kits",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png"
              alt="Tactile Velvet Ephemera"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">VIP Press Kit</span>
              <div className="card-title">
                Tactile Ephemera Suite <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif"
            data-lightbox-title="Reflective Daisy Meadow Hardware Preview"
            data-lightbox-caption="Creative Direction for Device Product Launch"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif",
                title: "Reflective Daisy Meadow Hardware Preview",
                caption: "Creative Direction for Device Product Launch",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif"
              alt="Reflective Meadow Device"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Product PR</span>
              <div className="card-title">
                Daisy Meadow Reflection <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif/v1/fit/w_600,h_600,q_90,enc_avif,quality_auto/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif"
            data-lightbox-title="Amber Glow Interactive Dock"
            data-lightbox-caption="Smart Hardware Prototype &amp; Tech Media Campaign"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif/v1/fit/w_600,h_600,q_90,enc_avif,quality_auto/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif",
                title: "Amber Glow Interactive Dock",
                caption: "Smart Hardware Prototype & Tech Media Campaign",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif/v1/fit/w_600,h_600,q_90,enc_avif,quality_auto/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif"
              alt="Amber Glow Dock"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Tech Hardware</span>
              <div className="card-title">
                Amber Interactive Dock <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg"
            data-lightbox-title="Underground Paste-Up Street Posters"
            data-lightbox-caption="Urban PR Street Takeover &amp; Subcultural Buzz"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg",
                title: "Underground Paste-Up Street Posters",
                caption: "Urban PR Street Takeover & Subcultural Buzz",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg"
              alt="Underground Posters"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Guerilla PR</span>
              <div className="card-title">
                Underground Paste-Up Wall <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="masonry-column">
          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png"
            data-lightbox-title="Obsidian Rock Studio Installation"
            data-lightbox-caption="Minimalist Hardware Retrospective"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png",
                title: "Obsidian Rock Studio Installation",
                caption: "Minimalist Hardware Retrospective",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png"
              alt="Obsidian Rock Studio"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Minimalist Luxury</span>
              <div className="card-title">
                Obsidian Display Monolith <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png"
            data-lightbox-title="Maison SENSE Luxury Flacons"
            data-lightbox-caption="Bespoke Glassware &amp; Perfumery PR"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png",
                title: "Maison SENSE Luxury Flacons",
                caption: "Bespoke Glassware & Perfumery PR",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png"
              alt="SENSE Luxury Flacons"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Perfumery PR</span>
              <div className="card-title">
                Maison SENSE Flacons <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif/v1/fit/w_600,h_338,q_90,enc_avif,quality_auto/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif"
            data-lightbox-title="Luminescent Neon Hourglass"
            data-lightbox-caption="Digital Artifact &amp; NFT Launch Strategy"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif/v1/fit/w_600,h_338,q_90,enc_avif,quality_auto/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif",
                title: "Luminescent Neon Hourglass",
                caption: "Digital Artifact & NFT Launch Strategy",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif/v1/fit/w_600,h_338,q_90,enc_avif,quality_auto/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif"
              alt="Neon Hourglass"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">Digital Artifact</span>
              <div className="card-title">
                Luminescent Hourglass <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

          <div
            className="masonry-card"
            data-lightbox-src="https://static.wixstatic.com/media/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif"
            data-lightbox-title="Blooming Pink Peony Blossom"
            data-lightbox-caption="High Jewelry Spring Rollout &amp; Haute Horlogerie"
            onClick={() =>
              onOpenLightbox({
                src: "https://static.wixstatic.com/media/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif",
                title: "Blooming Pink Peony Blossom",
                caption: "High Jewelry Spring Rollout & Haute Horlogerie",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif"
              alt="Blooming Peony Blossom"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-tag">High Jewelry PR</span>
              <div className="card-title">
                Pink Peony Spring Gala <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
