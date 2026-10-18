"use client";

import { useEffect } from "react";
import { LightboxItem } from "@/types";

interface LightboxModalProps {
  item: LightboxItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: number) => void;
}

export default function LightboxModal({
  item,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate(-1);
      } else if (e.key === "ArrowRight") {
        onNavigate(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !item) return null;

  return (
    <div
      className={`lightbox-modal ${isOpen ? "active" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Project Preview"
      onClick={onClose}
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close modal"
      >
        &times;
      </button>

      <button
        className="lightbox-nav prev"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Previous project"
      >
        &#8592;
      </button>

      <button
        className="lightbox-nav next"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Next project"
      >
        &#8594;
      </button>

      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-img"
            src={item.src}
            alt={item.title}
          />
        </div>
        <div className="lightbox-meta">
          <h3 className="lightbox-title">{item.title}</h3>
          <p className="lightbox-caption">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}
