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

  // Handle ESC key to close overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Clean up body overflow when unmounting
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
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
    targetPathOrHash: string
  ) => {
    setMenuOpen(false);
    document.body.style.overflow = "";

    // In-page hash target (e.g. "#works", "#about", "#clients", "#contact")
    if (targetPathOrHash.startsWith("#")) {
      const target = document.querySelector(targetPathOrHash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        // Element not on this page (e.g. user is on /services) -> navigate to /#hash
        e.preventDefault();
        window.location.href = `/${targetPathOrHash}`;
      }
      return;
    }

    // Page route (e.g. "/services", "/")
    if (targetPathOrHash.startsWith("/")) {
      if (typeof window !== "undefined" && window.location.pathname === targetPathOrHash) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ── NAV ── */}
      <header id="nav" className={scrolled ? "scrolled" : ""}>
        <a
          className="nav-logo"
          href="/"
          aria-label="Samit Gugle PR Agency"
          onClick={(e) => {
            if (typeof window !== "undefined" && window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
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
        <div className="nav-right-actions">
          <a
            href="/#contact"
            className="nav-cta"
            onClick={(e) => {
              const contactEl = document.getElementById("contact");
              if (contactEl) {
                e.preventDefault();
                contactEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Start a Project ↗
          </a>
          <button
            id="burger"
            className={menuOpen ? "open" : ""}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <div className="bun top" />
            <div className="bun bot" />
          </button>
        </div>
      </header>

      {/* ── FULLSCREEN MENU ── */}
      <div id="overlay" className={menuOpen ? "open" : ""}>
        <div className="ov-left">
          <a
            href="/#works"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#works")}
          >
            <span>Our Work</span>
            <span className="arrow">↗</span>
          </a>
          <a
            href="/services"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "/services")}
          >
            <span>Services</span>
            <span className="arrow">↗</span>
          </a>
          <a
            href="/#about"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#about")}
          >
            <span>About</span>
            <span className="arrow">↗</span>
          </a>
          <a
            href="/#clients"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#clients")}
          >
            <span>Clientele</span>
            <span className="arrow">↗</span>
          </a>
          <a
            href="/#contact"
            className="ov-link"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            <span>Contact</span>
            <span className="arrow">↗</span>
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
            <p>Direction · Digital · Worldwide</p>
          </div>
        </div>
      </div>
    </>
  );
}
