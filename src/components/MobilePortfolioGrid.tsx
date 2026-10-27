"use client";

import { LightboxItem } from "@/types";

interface MobilePortfolioGridProps {
  activeFilter: string;
  onOpenLightbox: (item: LightboxItem) => void;
}

export default function MobilePortfolioGrid({
  activeFilter,
  onOpenLightbox,
}: MobilePortfolioGridProps) {
  const matchesFilter = (category: string) => {
    return activeFilter === "all" || category.includes(activeFilter);
  };

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-grid" id="portfolioGrid">
        {/* 1. FLAGSHIP HERO CARD: ESPN US Open */}
        <article
          className="project-card col-span-8"
          style={{
            display: matchesFilter("pr commercial editorial") ? "block" : "none",
          }}
          data-category="pr commercial editorial"
          onClick={() =>
            onOpenLightbox({
              src: "/assets/jessie-work/01-espn.jpg",
              title: "ESPN — US Open 50th Anniversary",
              caption: "Court Artwork & Cultural Commercial Direction",
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/jessie-work/01-espn.jpg"
            alt="ESPN Artwork"
            loading="lazy"
          />
          <div className="card-overlay">
            <span className="card-badge">Direction</span>
            <div className="card-title">
              <span>
                ESPN <em>US Open</em>
              </span>
              <span className="card-arrow">↗</span>
            </div>
            <p className="card-desc">
              US Open 50th Anniversary — Court Artwork &amp; Cultural Direction
            </p>
          </div>
        </article>

        {/* 2. CARD: Grubhub Mandala Installation */}
        <article
          className="project-card col-span-4"
          style={{
            display: matchesFilter("spatial brand") ? "block" : "none",
          }}
          data-category="spatial brand"
          onClick={() =>
            onOpenLightbox({
              src: "/assets/jessie-work/02-grubhub.jpg",
              title: "GRUBHUB Mandala",
              caption: "Surreal Silverware Mandala Art Installation",
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/jessie-work/02-grubhub.jpg"
            alt="Grubhub Mandala"
            loading="lazy"
          />
          <div className="card-overlay">
            <span className="card-badge">Installation</span>
            <div className="card-title">
              <span>GRUBHUB</span>
              <span className="card-arrow">↗</span>
            </div>
            <p className="card-desc">Surreal Silverware Mandala Art Installation</p>
          </div>
        </article>

        {/* 3 & 4. ASYMMETRIC BENTO DUO: MTV & Specialized */}
        <div
          className="bento-duo-row"
          style={{
            gridColumn: "span 12",
            display:
              matchesFilter("editorial brand") || matchesFilter("commercial editorial")
                ? "grid"
                : "none",
          }}
        >
          <article
            className="project-card"
            style={{
              display: matchesFilter("editorial brand") ? "block" : "none",
            }}
            data-category="editorial brand"
            onClick={() =>
              onOpenLightbox({
                src: "/assets/jessie-work/03-mtv.jpg",
                title: "MTV — Miley Cyrus Portrait",
                caption: "Mixed Media Ephemera & Guitar Strings",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/jessie-work/03-mtv.jpg"
              alt="MTV Portrait"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-badge">Portrait</span>
              <div className="card-title">
                <span>
                  MTV <em>Miley Cyrus</em>
                </span>
                <span className="card-arrow">↗</span>
              </div>
              <p className="card-desc">Mixed Media Sculpted Portrait</p>
            </div>
          </article>

          <article
            className="project-card"
            style={{
              display: matchesFilter("commercial editorial") ? "block" : "none",
            }}
            data-category="commercial editorial"
            onClick={() =>
              onOpenLightbox({
                src: "/assets/jessie-work/04-specialized.jpg",
                title: "SPECIALIZED",
                caption: "Mountain Valley Large-Scale Canvas Portrait",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/jessie-work/04-specialized.jpg"
              alt="Specialized Canvas"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-badge">Large Scale</span>
              <div className="card-title">
                <span>SPECIALIZED</span>
                <span className="card-arrow">↗</span>
              </div>
              <p className="card-desc">Large-Scale Mountain Valley Portrait</p>
            </div>
          </article>
        </div>

        {/* 5. OOH TAKE-OVERS SWIPER WITH PEEK AFFORDANCE */}
        <div
          className="swiper-row-section"
          style={{
            display:
              matchesFilter("spatial brand") || matchesFilter("pr commercial")
                ? "block"
                : "none",
          }}
          data-category="spatial pr"
        >
          <div className="swiper-head">
            <span className="swiper-heading">Sculptural &amp; Experimental Releases</span>
            <span className="swiper-hint">Swipe →</span>
          </div>
          <div className="swiper-track">
            <div
              className="swiper-card"
              data-category="spatial brand"
              onClick={() =>
                onOpenLightbox({
                  src: "/assets/jessie-work/07-butter-sneaker.jpg",
                  title: "AIR FORCE 1 Butter Sneaker",
                  caption: "Sculpted Pure Butter Sneaker for Bleacher Report",
                })
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/jessie-work/07-butter-sneaker.jpg"
                alt="Butter Sneaker"
                loading="lazy"
              />
              <div className="card-overlay">
                <span className="card-badge">Sculptural</span>
                <div className="card-title">
                  AIR FORCE 1 <em>Butter</em>
                </div>
              </div>
            </div>

            <div
              className="swiper-card"
              data-category="spatial brand"
              onClick={() =>
                onOpenLightbox({
                  src: "/assets/jessie-work/08-making-it.jpg",
                  title: "NBC Making It",
                  caption: "Architectural Translucent Spatial Installation",
                })
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/jessie-work/08-making-it.jpg"
                alt="Making It"
                loading="lazy"
              />
              <div className="card-overlay">
                <span className="card-badge">Spatial</span>
                <div className="card-title">NBC Making It</div>
              </div>
            </div>

            <div
              className="swiper-card"
              data-category="pr commercial"
              onClick={() =>
                onOpenLightbox({
                  src: "/assets/jessie-work/09-american-express.jpg",
                  title: "American Express Platinum",
                  caption: "Commercial Art & VIP Direction",
                })
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/jessie-work/09-american-express.jpg"
                alt="American Express"
                loading="lazy"
              />
              <div className="card-overlay">
                <span className="card-badge">VIP Direction</span>
                <div className="card-title">American Express</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. KINETIC TICKER RIBBON */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <span className="marquee-item">
              VOGUE &amp; GQ PRESS <span className="marquee-arrow">✦</span>
            </span>
            <span className="marquee-item">
              EXECUTIVE <em>Positioning</em> <span className="marquee-arrow">✦</span>
            </span>
            <span className="marquee-item">
              STRATEGIC <em>Brand Worlds</em> <span className="marquee-arrow">✦</span>
            </span>
            <span className="marquee-item">
              MUMBAI &amp; <em>Worldwide</em> <span className="marquee-arrow">✦</span>
            </span>
            <span className="marquee-item">
              VOGUE &amp; GQ PRESS <span className="marquee-arrow">✦</span>
            </span>
            <span className="marquee-item">
              EXECUTIVE <em>Positioning</em> <span className="marquee-arrow">✦</span>
            </span>
            <span className="marquee-item">
              STRATEGIC <em>Brand Worlds</em> <span className="marquee-arrow">✦</span>
            </span>
            <span className="marquee-item">
              MUMBAI &amp; <em>Worldwide</em> <span className="marquee-arrow">✦</span>
            </span>
          </div>
        </div>

        {/* 7. FLAGSHIP CARD: Walmart Curated Object Installation */}
        <article
          className="project-card col-span-8"
          style={{
            display: matchesFilter("spatial brand") ? "block" : "none",
          }}
          data-category="spatial brand"
          onClick={() =>
            onOpenLightbox({
              src: "/assets/jessie-work/05-walmart.jpg",
              title: "WALMART — Experiential Object Wall",
              caption: "Chromatically Curated Object Wall Art Installation",
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/jessie-work/05-walmart.jpg"
            alt="Walmart Installation"
            loading="lazy"
          />
          <div className="card-overlay">
            <span className="card-badge">Experiential</span>
            <div className="card-title">
              <span>
                WALMART <em>Chromatic Wall</em>
              </span>
              <span className="card-arrow">↗</span>
            </div>
            <p className="card-desc">
              Chromatically Curated Object Wall Art Installation
            </p>
          </div>
        </article>

        {/* 8. CARD: Marvel x M&M */}
        <article
          className="project-card col-span-4"
          style={{
            display: matchesFilter("brand commercial") ? "block" : "none",
          }}
          data-category="brand commercial"
          onClick={() =>
            onOpenLightbox({
              src: "/assets/jessie-work/06-marvel.jpg",
              title: "MARVEL x M&M",
              caption: "Guardians of the Galaxy Edible Art Mosaic",
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/jessie-work/06-marvel.jpg"
            alt="Marvel Artwork"
            loading="lazy"
          />
          <div className="card-overlay">
            <span className="card-badge">Edible Art</span>
            <div className="card-title">
              <span>
                MARVEL <em>x M&amp;M</em>
              </span>
              <span className="card-arrow">↗</span>
            </div>
            <p className="card-desc">Guardians of the Galaxy Edible Art Mosaic</p>
          </div>
        </article>

        {/* 9 & 10. BENTO DUO: Joe Fresh & GAP */}
        <div
          className="bento-duo-row"
          style={{
            gridColumn: "span 12",
            display:
              matchesFilter("editorial brand") || matchesFilter("brand commercial")
                ? "grid"
                : "none",
          }}
        >
          <article
            className="project-card"
            style={{
              display: matchesFilter("editorial brand") ? "block" : "none",
            }}
            data-category="editorial brand"
            onClick={() =>
              onOpenLightbox({
                src: "/assets/jessie-work/10-joe-fresh.jpg",
                title: "JOE FRESH",
                caption: "Fashion Campaign Direction & Creative Strategy",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/jessie-work/10-joe-fresh.jpg"
              alt="Joe Fresh"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-badge">Editorial</span>
              <div className="card-title">
                <span>JOE FRESH</span>
                <span className="card-arrow">↗</span>
              </div>
              <p className="card-desc">Fashion Campaign Direction</p>
            </div>
          </article>

          <article
            className="project-card"
            style={{
              display: matchesFilter("brand commercial") ? "block" : "none",
            }}
            data-category="brand commercial"
            onClick={() =>
              onOpenLightbox({
                src: "/assets/jessie-work/11-gap.jpg",
                title: "GAP Heritage",
                caption: "Heritage Apparel & Global Campaign Direction",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/jessie-work/11-gap.jpg"
              alt="GAP"
              loading="lazy"
            />
            <div className="card-overlay">
              <span className="card-badge">Apparel</span>
              <div className="card-title">
                <span>
                  GAP <em>Heritage</em>
                </span>
                <span className="card-arrow">↗</span>
              </div>
              <p className="card-desc">Heritage Apparel &amp; Cultural Rollout</p>
            </div>
          </article>
        </div>

        {/* 11. FINAL FLAGSHIP: Dramamine Commercial Food Art */}
        <article
          className="project-card col-span-12"
          style={{
            display: matchesFilter("brand commercial") ? "block" : "none",
          }}
          data-category="brand commercial"
          onClick={() =>
            onOpenLightbox({
              src: "/assets/jessie-work/12-dramamine.jpg",
              title: "DRAMAMINE",
              caption: "Commercial Food Art Campaign & Brand Retrospect",
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/jessie-work/12-dramamine.jpg"
            alt="Dramamine"
            loading="lazy"
          />
          <div className="card-overlay">
            <span className="card-badge">Food Art</span>
            <div className="card-title">
              <span>
                DRAMAMINE <em>Campaign</em>
              </span>
              <span className="card-arrow">↗</span>
            </div>
            <p className="card-desc">
              Commercial Food Art Campaign &amp; Cultural Direction
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
