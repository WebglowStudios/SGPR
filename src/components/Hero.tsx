"use client";

export default function Hero() {
  return (
    <section id="hero" className="hero-cinematic">
      {/* Cinematic Looping Showreel Backdrop */}
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
        <div className="hero-meta reveal">
          <span className="hero-pill">Direction &amp; Brand Architecture</span>
        </div>

        <div className="hero-headline-wrap">
          <h1 className="hero-name reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
            SAMIT GUGLE
          </h1>
          <p className="hero-lead reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
            Strategic Public Relations <span className="lead-amp">&amp;</span> Narrative Direction for brands that shape culture.
          </p>
        </div>

        <div className="hero-foot-row reveal" style={{ "--d": ".3s" } as React.CSSProperties}>
          <a href="#works" className="hero-cta-btn">
            Selected Works <span className="arrow">↓</span>
          </a>
          <a href="#contact" className="hero-cta-link">
            Start a Project <span className="arrow">↗</span>
          </a>
        </div>
      </div>

      {/* Editorial Bottom Strip */}
      <div className="hero-strip">
        <span className="hs-label">Scroll to Explore ↓</span>
        <p className="hs-desc">Narrative-led brand elevation for brands that demand more.</p>
        <span className="hs-year">© 2026</span>
      </div>
    </section>
  );
}
