"use client";

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="footer-container">
        {/* Tier 1: Logo Lockup on Left + Back to Top on Right */}
        <div className="footer-header-row">
          <a
            href="#hero"
            className="footer-brand"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/samit-gugle-logo.png"
              alt="Samit Gugle Logo"
              className="footer-logo-img"
            />
            <span className="footer-brand-name">
              SAMIT GUGLE<span className="nav-dot">.</span>
            </span>
          </a>

          <a
            href="#hero"
            className="footer-back-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span>Back to top</span>
            <span className="back-top-arrow">↑</span>
          </a>
        </div>

        {/* Tier 2: Horizontal Social Channels Ribbon */}
        <nav className="footer-social-row" aria-label="Social media">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            Instagram ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            X (Twitter) ↗
          </a>
        </nav>

        {/* Tier 3: Legal Links + Copyright */}
        <div className="footer-colophon-row">
          <div className="footer-legal-links">
            <a
              href="#privacy"
              className="footer-legal-item"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Privacy Policy\n\nSamit Gugle PR Agency operates with complete confidentiality and strict adherence to client data privacy guidelines and NDA agreements."
                );
              }}
            >
              Privacy Policy
            </a>
            <span className="footer-bullet">·</span>
            <a
              href="#tnc"
              className="footer-legal-item"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Terms & Conditions\n\nAll content, narrative directions, and creative frameworks are proprietary to Samit Gugle PR Agency and respected brand partners."
                );
              }}
            >
              Terms &amp; Conditions
            </a>
          </div>

          <span className="footer-copyright">
            © 2026 Samit Gugle PR Agency. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
