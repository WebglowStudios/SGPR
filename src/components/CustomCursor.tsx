"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trailWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run custom cursor on fine pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0;
    let my = 0;
    let ox = 0;
    let oy = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (innerRef.current) {
        innerRef.current.style.left = `${mx}px`;
        innerRef.current.style.top = `${my}px`;
      }

      // Spawn trail dot
      if (trailWrapRef.current) {
        const dot = document.createElement("div");
        dot.className = "trail-dot";
        dot.style.left = `${mx}px`;
        dot.style.top = `${my}px`;
        trailWrapRef.current.appendChild(dot);
        setTimeout(() => {
          dot.remove();
        }, 600);
      }
    };

    const animOuter = () => {
      ox += (mx - ox) * 0.12;
      oy += (my - oy) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.left = `${ox}px`;
        outerRef.current.style.top = `${oy}px`;
      }
      animId = requestAnimationFrame(animOuter);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(animOuter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="cur-outer" ref={outerRef} aria-hidden="true" />
      <div id="cur-inner" ref={innerRef} aria-hidden="true" />
      <div id="cur-trail-wrap" ref={trailWrapRef} aria-hidden="true" />
    </>
  );
}
