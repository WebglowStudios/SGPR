"use client";

import { useState } from "react";
import { SERVICES_LIST } from "@/data/agencyData";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleServiceClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section id="services">
      <div className="srv-layout">
        {/* Left: Accordion list */}
        <div className="srv-list-col">
          <span className="eyebrow reveal">What We Do</span>
          <h2
            className="srv-main-heading reveal"
            style={{ "--d": ".1s" } as React.CSSProperties}
          >
            Capabilities <em>&amp; Direction</em>
          </h2>

          {SERVICES_LIST.map((service, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={service.num}
                className={`srv-acc-card ${isOpen ? "open" : ""}`}
                onClick={() => handleServiceClick(index)}
              >
                <div className="srv-acc-hd">
                  <div className="srv-acc-title-wrap">
                    <span className="srv-n">{service.num}</span>
                    <span className="srv-nm">{service.name}</span>
                  </div>
                  <span className="srv-plus">+</span>
                </div>
                <div className="srv-acc-body">
                  <div className="srv-acc-inner">
                    <p className="srv-acc-desc">{service.desc}</p>
                    {/* INLINE IMAGE REVEAL ON MOBILE */}
                    <div className="srv-mobile-img">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.img}
                        alt={service.name}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Sticky image preview panel (Desktop) */}
        <div className="srv-sticky-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="desktopSrvImg"
            src={activeIndex >= 0 ? SERVICES_LIST[activeIndex].img : SERVICES_LIST[0].img}
            alt={activeIndex >= 0 ? SERVICES_LIST[activeIndex].name : SERVICES_LIST[0].name}
          />
        </div>
      </div>
    </section>
  );
}
