"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-cinematic">
      {/* Looping Showreel Backdrop */}
      <div className="hero-video-wrap">
        <video
          id="heroBannerVideo"
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_1600,h_900,q_85,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png"
        >
          <source
            src="https://res.cloudinary.com/demo/video/upload/c_scale,w_1920/walking.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-video-scrim" />
        <div className="hero-noise" />
      </div>

      {/* Main Editorial Content */}
      <div className="hero-content">
        <div className="hero-meta">
          <span className="hero-pill">Direction &amp; Brand Architecture</span>
          <span className="hero-pill-sep">·</span>
          <span className="hero-location">Mumbai · Global</span>
        </div>

        <div className="hero-headline-wrap">
          <h1 className="hero-name">SAMIT GUGLE</h1>
          <p className="hero-lead">
            Strategic Public Relations <span className="lead-amp">&amp;</span>{" "}
            Narrative Direction for brands that shape culture.
          </p>
        </div>

        <div className="hero-foot-row">
          <button
            onClick={() => scrollTo("works")}
            className="hero-cta-btn mag-btn cursor-pointer"
          >
            Selected Works <span className="arrow">↓</span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hero-cta-link mag-btn cursor-pointer"
          >
            Start a Project <span className="arrow">↗</span>
          </button>
        </div>
      </div>

      {/* Editorial Bottom Coordinates Strip */}
      <div className="hero-strip">
        <span className="hs-label">Scroll to Explore ↓</span>
        <p className="hs-desc">
          Narrative-led brand elevation for brands that demand more.
        </p>
        <span className="hs-year">© 2026</span>
      </div>
    </section>
  );
}
