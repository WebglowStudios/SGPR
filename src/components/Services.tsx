"use client";

import { useState } from "react";
import { SERVICES_LIST } from "@/data/agencyData";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [changing, setChanging] = useState(false);
  const [displayedImg, setDisplayedImg] = useState(SERVICES_LIST[0].img);

  const handleServiceClick = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setChanging(true);

    setTimeout(() => {
      setDisplayedImg(SERVICES_LIST[index].img);
      setChanging(false);
    }, 350);
  };

  return (
    <section id="services">
      <div className="srv-split">
        {/* Left: Accordion list */}
        <div className="srv-list-col">
          <span className="eyebrow reveal">What We Do</span>

          {SERVICES_LIST.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={service.num}
                className={`srv-acc-item ${isActive ? "active" : ""}`}
                data-img={service.img}
              >
                <button
                  className="srv-hd"
                  onClick={() => handleServiceClick(index)}
                  aria-expanded={isActive}
                >
                  <span className="srv-n">{service.num}</span>
                  <span className="srv-nm">{service.name}</span>
                  <span className="srv-plus">+</span>
                </button>
                <div
                  className="srv-body"
                  style={{
                    maxHeight: isActive ? "200px" : "0",
                  }}
                >
                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Sticky image preview panel */}
        <div className="srv-img-col">
          <div className="srv-img-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="srv-img"
              src={displayedImg}
              alt={SERVICES_LIST[activeIndex].name}
              className={changing ? "changing" : ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
