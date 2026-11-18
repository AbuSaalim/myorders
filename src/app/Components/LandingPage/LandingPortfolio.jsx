"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const portfolioImages = [
  {
    id: 1,
    src: "/assets/images/portfolio/1.webp",
    insideSrc: "/assets/images/portfolio-inside/1.webp",
    alt: "Technology & AI Corporate Profile Design",
    title: "Technology & AI Corporate Profile",
  },
  {
    id: 2,
    src: "/assets/images/portfolio/2.webp",
    insideSrc: "/assets/images/portfolio-inside/2.webp",
    alt: "Architecture & Infrastructure Engineering Profile",
    title: "Infrastructure & Civil Engineering",
  },
  {
    id: 3,
    src: "/assets/images/portfolio/3.webp",
    insideSrc: "/assets/images/portfolio-inside/3.webp",
    alt: "Financial Advisory & Corporate Governance Profile",
    title: "Financial Advisory & Consulting",
  },
  {
    id: 4,
    src: "/assets/images/portfolio/4.webp",
    insideSrc: "/assets/images/portfolio-inside/4.webp",
    alt: "MedTech & Healthcare Innovations Profile",
    title: "MedTech & Healthcare Profile",
  },
  {
    id: 5,
    src: "/assets/images/portfolio/5.webp",
    insideSrc: "/assets/images/portfolio-inside/5.webp",
    alt: "CleanTech & Renewable Energy Sustainability Profile",
    title: "CleanTech & Renewable Energy",
  },
  {
    id: 6,
    src: "/assets/images/portfolio/6.webp",
    insideSrc: "/assets/images/portfolio-inside/6.webp",
    alt: "Luxury Real Estate & Penthouse Development Profile",
    title: "Luxury Real Estate & Penthouse",
  },
  {
    id: 7,
    src: "/assets/images/portfolio/7.webp",
    insideSrc: "/assets/images/portfolio-inside/7.webp",
    alt: "Global Logistics & Freight Supply Chain Profile",
    title: "Global Logistics & Supply Chain",
  },
  {
    id: 8,
    src: "/assets/images/portfolio/8.webp",
    insideSrc: "/assets/images/portfolio-inside/8.webp",
    alt: "Creative Agency & Brand Identity Profile",
    title: "Creative Agency & Brand Identity",
  },
];

const LandingPortfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsAnimating(false);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    setIsAnimating(true);
    setSelectedIndex((prev) =>
      prev === null ? null : prev === portfolioImages.length - 1 ? 0 : prev + 1,
    );
    setTimeout(() => setIsAnimating(false), 220);
  }, []);

  const handlePrev = useCallback(() => {
    setIsAnimating(true);
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? portfolioImages.length - 1 : prev - 1,
    );
    setTimeout(() => setIsAnimating(false), 220);
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, handleNext, handlePrev, closeLightbox]);

  // Touch Swipe for mobile/tablet sliding
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  return (
    <section id="our-portfolio" className="landing-portfolio-section">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2 className="portfolio-title">
              Explore Our Company Profile Design Portfolio
            </h2>
            <p className="portfolio-desc">
              Explore our collection of professionally crafted Company Profile
              Design projects that have helped businesses build credibility,
              strengthen their brand image, and create lasting impressions
              across industries.
            </p>
          </div>
        </div>

        {/* 3-Card Grid (col-lg-4 col-md-6 col-12) */}
        <div className="row g-4 justify-content-center">
          {portfolioImages.map((item, index) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12">
              <div
                className="portfolio-card"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View full preview of ${item.title}`}
              >
                <div className="portfolio-img-wrapper">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1100}
                    height={1430}
                    className="portfolio-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 991px) 50vw, 33vw"
                    priority={item.id <= 3}
                  />
                  <div className="portfolio-hover-overlay">
                    <span className="view-btn">
                      <Maximize2 size={18} />
                      <span>View Full Preview</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Slider Box */}
      {selectedIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Control Bar (Floating HUD) */}
          <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-info">
              <span className="lightbox-counter">
                {selectedIndex + 1} / {portfolioImages.length}
              </span>
              <span className="lightbox-title">
                {portfolioImages[selectedIndex].title}
              </span>
            </div>

            <button
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close fullscreen view"
            >
              <X size={24} />
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Project"
          >
            <ChevronLeft size={38} />
          </button>

          {/* Right Arrow Button */}
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Project"
          >
            <ChevronRight size={38} />
          </button>

          {/* Center Fullscreen Image View Area - Maximized */}
          <div
            className="lightbox-content-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`lightbox-image-container ${isAnimating ? "fade-in" : ""}`}
            >
              <Image
                src={portfolioImages[selectedIndex].insideSrc}
                alt={portfolioImages[selectedIndex].alt}
                width={1920}
                height={1081}
                priority
                className="lightbox-fullscreen-img"
                draggable={false}
              />
            </div>
          </div>

          {/* Bottom Indicators / Thumb Dots (Floating HUD) */}
          <div className="lightbox-footer" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-dots">
              {portfolioImages.map((dot, idx) => (
                <button
                  key={dot.id}
                  className={`lightbox-dot ${idx === selectedIndex ? "active" : ""}`}
                  onClick={() => setSelectedIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .landing-portfolio-section {
          background-image: url("/assets/images/resource/portfolio-watermark-bg.webp");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center top;
          padding: 85px 0 95px 0;
          position: relative;
          border-top: 1px solid rgba(0, 48, 97, 0.07);
        }
        .portfolio-title {
          color: #0b2238;
          font-size: 34px;
          font-weight: 700;
          font-family: var(--heading-font);
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .portfolio-desc {
          color: #555555;
          font-size: 15.5px;
          line-height: 1.75;
          max-width: 860px;
          margin: 0 auto;
        }

        /* 3-Column Card Box (Cover Mockups: 1100x1430 ~ 11/14) */
        .portfolio-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.08),
            0 2px 6px rgba(0, 0, 0, 0.04);
          transition:
            transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1),
            box-shadow 0.35s cubic-bezier(0.165, 0.84, 0.44, 1),
            border-color 0.35s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.06);
          cursor: pointer;
          user-select: none;
        }
        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 20px 45px rgba(0, 48, 97, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.06);
          border-color: rgba(245, 104, 61, 0.4);
        }
        .portfolio-img-wrapper {
          overflow: hidden;
          background: #eaf1f8;
          position: relative;
          aspect-ratio: 11 / 14;
          width: 100%;
          box-shadow: inset 0 -6px 16px rgba(0, 0, 0, 0.04);
        }
        .portfolio-img {
          width: 100%;
          height: 100%;
          aspect-ratio: 11 / 14;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }

        /* Hover Overlay on Card */
        .portfolio-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11, 40, 70, 0.65);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .portfolio-card:hover .portfolio-hover-overlay {
          opacity: 1;
        }
        .view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fe5e15;
          color: #ffffff;
          padding: 11px 22px;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 600;
          box-shadow: 0 4px 18px rgba(254, 94, 21, 0.5);
          transform: translateY(8px);
          transition: transform 0.3s ease;
        }
        .portfolio-card:hover .view-btn {
          transform: translateY(0);
        }

        /* Fullscreen Lightbox Overlay */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(3, 8, 16, 0.96);
          backdrop-filter: blur(14px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          animation: lightboxFade 0.22s ease-out;
        }

        @keyframes lightboxFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Floating Top Bar HUD */
        .lightbox-header {
          position: absolute;
          top: 18px;
          left: 24px;
          right: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 50;
          pointer-events: none;
        }
        .lightbox-info {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          background: rgba(6, 15, 28, 0.8);
          backdrop-filter: blur(12px);
          padding: 7px 18px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
          pointer-events: auto;
        }
        .lightbox-counter {
          background: #fe5e15;
          color: #ffffff;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .lightbox-title {
          font-size: 14.5px;
          font-weight: 600;
          color: #f1f5f9;
        }
        .lightbox-close-btn {
          background: rgba(6, 15, 28, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
          pointer-events: auto;
        }
        .lightbox-close-btn:hover {
          background: #fe5e15;
          border-color: #fe5e15;
          transform: rotate(90deg) scale(1.08);
          box-shadow: 0 0 18px rgba(254, 94, 21, 0.7);
        }

        /* Floating Navigation Arrows */
        .lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(6, 15, 28, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 50;
          transition: all 0.25s ease;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
        }
        .lightbox-arrow:hover {
          background: #fe5e15;
          border-color: #fe5e15;
          transform: translateY(-50%) scale(1.12);
          box-shadow: 0 0 25px rgba(254, 94, 21, 0.75);
        }
        .lightbox-arrow-left {
          left: 20px;
        }
        .lightbox-arrow-right {
          right: 20px;
        }

        /* Maximized Center Image Area */
        .lightbox-content-wrapper {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          box-sizing: border-box;
          user-select: none;
          pointer-events: none;
        }
        .lightbox-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          pointer-events: auto;
          transition: opacity 0.22s ease;
        }
        .lightbox-image-container.fade-in {
          opacity: 0.55;
        }

        /* Maximized Fullscreen Image */
        :global(.lightbox-fullscreen-img) {
          width: min(96vw, calc(92vh * 1.7761)) !important;
          height: min(92vh, calc(96vw / 1.7761)) !important;
          max-width: 96vw !important;
          max-height: 92vh !important;
          object-fit: contain !important;
          border-radius: 10px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.16);
          animation: zoomIn 0.28s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: block;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.97);
            opacity: 0.6;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Floating Bottom Dots HUD */
        .lightbox-footer {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
        }
        .lightbox-dots {
          display: flex;
          gap: 10px;
          align-items: center;
          background: rgba(6, 15, 28, 0.8);
          padding: 7px 18px;
          border-radius: 30px;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
        }
        .lightbox-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .lightbox-dot:hover {
          background: rgba(255, 255, 255, 0.85);
          transform: scale(1.2);
        }
        .lightbox-dot.active {
          background: #fe5e15;
          width: 24px;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(254, 94, 21, 0.7);
        }

        @media (max-width: 991px) {
          .landing-portfolio-section {
            padding: 70px 0;
          }
          .lightbox-arrow {
            width: 48px;
            height: 48px;
          }
          .lightbox-arrow-left {
            left: 12px;
          }
          .lightbox-arrow-right {
            right: 12px;
          }
          :global(.lightbox-fullscreen-img) {
            width: min(96vw, calc(90vh * 1.7761)) !important;
            height: min(90vh, calc(96vw / 1.7761)) !important;
            max-width: 97vw !important;
            max-height: 90vh !important;
          }
        }

        @media (max-width: 768px) {
          .landing-portfolio-section {
            padding: 55px 0;
          }
          .portfolio-title {
            font-size: 26px;
          }
          .lightbox-header {
            top: 12px;
            left: 12px;
            right: 12px;
          }
          .lightbox-title {
            display: none;
          }
          .lightbox-arrow {
            width: 40px;
            height: 40px;
          }
          .lightbox-arrow-left {
            left: 6px;
          }
          .lightbox-arrow-right {
            right: 6px;
          }
          .lightbox-footer {
            bottom: 12px;
          }
          :global(.lightbox-fullscreen-img) {
            width: min(98vw, calc(88vh * 1.7761)) !important;
            height: min(88vh, calc(98vw / 1.7761)) !important;
            max-width: 98vw !important;
            max-height: 89vh !important;
            border-radius: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingPortfolio;
