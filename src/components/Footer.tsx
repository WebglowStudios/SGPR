"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="fl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/samit-gugle-logo.png"
          alt="Samit Gugle PR Agency"
          className="f-logo-img"
        />
        <div className="fl-text">
          <span className="f-brand">Samit Gugle PR Agency</span>
          <p className="f-sub">Mumbai · India · © 2026</p>
        </div>
      </div>
      <div className="fc">
        <button onClick={scrollToTop} className="f-back-top">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
