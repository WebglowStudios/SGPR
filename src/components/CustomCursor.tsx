"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trailWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    const trailWrap = trailWrapRef.current;
    if (!outer || !inner || !trailWrap) return;

    let mx = -100;
    let my = -100;
    let ox = -100;
    let oy = -100;
    let first = true;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (first) {
        ox = mx;
        oy = my;
        first = false;
        outer.style.left = `${ox}px`;
        outer.style.top = `${oy}px`;
      }

      inner.style.left = `${mx}px`;
      inner.style.top = `${my}px`;

      // Spawn trail dot
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      trailWrap.appendChild(dot);
      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    const animOuter = () => {
      ox += (mx - ox) * 0.12;
      oy += (my - oy) * 0.12;
      outer.style.left = `${ox}px`;
      outer.style.top = `${oy}px`;
      animId = requestAnimationFrame(animOuter);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(animOuter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="cur-outer" ref={outerRef} />
      <div id="cur-inner" ref={innerRef} />
      <div id="cur-trail-wrap" ref={trailWrapRef} />
    </>
  );
}
