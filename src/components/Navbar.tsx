"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const nextState = !menuOpen;
    setMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = "";
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── NAV ── */}
      <header id="nav" className={scrolled ? "scrolled" : ""}>
        <a
          className="nav-logo"
          href="#"
          aria-label="Samit Gugle PR Agency"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/samit-gugle-logo.png"
            alt="Samit Gugle Logo"
            className="nav-logo-img"
          />
          <span className="nav-logo-name">
            Samit Gugle<span className="nav-dot">.</span>
          </span>
        </a>
        <button
          id="burger"
          className={menuOpen ? "open" : ""}
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <div className="bun top" />
          <div className="bun bot" />
        </button>
      </header>

      {/* ── FULLSCREEN MENU ── */}
      <div id="overlay" className={menuOpen ? "open" : ""}>
        <div className="ov-left">
          <a
            href="#works"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#works")}
          >
            <span>Our Work</span>
          </a>
          <a
            href="#services"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#services")}
          >
            <span>Services</span>
          </a>
          <a
            href="#about"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#about")}
          >
            <span>About</span>
          </a>
          <a
            href="#clients"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#clients")}
          >
            <span>Clientele</span>
          </a>
          <a
            href="#contact"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            <span>Contact</span>
          </a>
        </div>
        <div className="ov-right">
          <video autoPlay loop muted playsInline className="ov-vid">
            <source
              src="https://res.cloudinary.com/demo/video/upload/walking.mp4"
              type="video/mp4"
            />
          </video>
          <div className="ov-info">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/samit-gugle-logo.png"
              alt="Samit Gugle Logo"
              className="ov-logo-img"
            />
            <p>Samit Gugle PR Agency</p>
            <p>Mumbai · India · Est. 2020</p>
          </div>
        </div>
      </div>
    </>
  );
}
