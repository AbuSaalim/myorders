"use client";
import React from "react";
import Image from "next/image";

const clientLogos = [
  { id: 1, src: "/assets/images/client/1.jpg", alt: "Client Logo 1" },
  { id: 2, src: "/assets/images/client/2.jpg", alt: "Client Logo 2" },
  { id: 3, src: "/assets/images/client/3.jpg", alt: "Client Logo 3" },
  { id: 4, src: "/assets/images/client/4.jpg", alt: "Client Logo 4" },
  { id: 5, src: "/assets/images/client/5.jpg", alt: "Client Logo 5" },
  { id: 6, src: "/assets/images/client/6.jpg", alt: "Client Logo 6" },
  { id: 7, src: "/assets/images/client/7.jpg", alt: "Client Logo 7" },
  { id: 8, src: "/assets/images/client/8.jpg", alt: "Client Logo 8" },
  { id: 9, src: "/assets/images/client/9.jpg", alt: "Client Logo 9" },
  { id: 10, src: "/assets/images/client/10.jpg", alt: "Client Logo 10" },
  { id: 11, src: "/assets/images/client/11.jpg", alt: "Client Logo 11" },
  { id: 12, src: "/assets/images/client/12.jpg", alt: "Client Logo 12" },
];

const LandingClientLogos = () => {
  return (
    <section className="client-logos-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="clients-main-title">
            Our Happy <span className="highlight-color">Customers</span>
          </h2>
        </div>
      </div>

      {/* Infinite Smooth Sliding Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First loop of all 12 logos */}
          {clientLogos.map((client, idx) => (
            <div key={`logo-set1-${client.id}-${idx}`} className="logo-card">
              <Image
                src={client.src}
                alt={client.alt}
                width={260}
                height={120}
                className="logo-img"
              />
            </div>
          ))}

          {/* Second duplicate loop for seamless infinite sliding */}
          {clientLogos.map((client, idx) => (
            <div key={`logo-set2-${client.id}-${idx}`} className="logo-card">
              <Image
                src={client.src}
                alt={client.alt}
                width={260}
                height={120}
                className="logo-img"
              />
            </div>
          ))}

          {/* Third duplicate loop for wide monitors */}
          {clientLogos.map((client, idx) => (
            <div key={`logo-set3-${client.id}-${idx}`} className="logo-card">
              <Image
                src={client.src}
                alt={client.alt}
                width={260}
                height={120}
                className="logo-img"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .client-logos-section {
          background: linear-gradient(180deg, #fbfaf6 0%, #f6f5ef 100%);
          padding: 55px 0 60px 0;
          border-top: 1px solid rgba(16, 18, 16, 0.08);
          border-bottom: 1px solid rgba(16, 18, 16, 0.08);
          position: relative;
          overflow: hidden;
        }

        .clients-main-title {
          font-size: 34px;
          font-weight: 700;
          color: #0b2238;
          margin: 0;
          font-family: var(--heading-font);
        }
        .highlight-color {
          color: #f5683d;
        }

        /* Marquee Continuous Slider */
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 16px 0 24px 0;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 30px;
          width: max-content;
          animation: slideMarquee 42s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes slideMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-100% / 3), 0, 0);
          }
        }

        /* Logo Card Box - Prominently Large Size (280px × 145px) */
        .logo-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 18px 32px;
          min-width: 280px;
          height: 145px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
                      box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
                      border-color 0.4s ease;
        }

        /* Attractive Hover Effect 1: Glass Shimmer Light Beam Sweep */
        .logo-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            transparent
          );
          transform: skewX(-25deg);
          transition: left 0.75s ease;
          pointer-events: none;
        }
        .logo-card:hover::after {
          left: 170%;
        }

        /* Attractive Hover Effect 2: Expanding Brand Gradient Bottom Accent Bar */
        .logo-card::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f5683d 0%, #003061 100%);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .logo-card:hover::before {
          transform: scaleX(1);
        }

        /* Attractive Hover Effect 3: Card Elevation & Layered Colored Glow */
        .logo-card:hover {
          transform: translateY(-8px);
          border-color: rgba(245, 104, 61, 0.4);
          box-shadow: 0 18px 40px rgba(0, 48, 97, 0.14),
                      0 0 0 1.5px rgba(245, 104, 61, 0.25);
        }

        /* Prominently Large Logo Image */
        :global(.logo-img) {
          max-height: 105px;
          width: auto;
          max-width: 225px;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 991px) {
          .client-logos-section {
            padding: 42px 0 48px 0;
          }
          .clients-main-title {
            font-size: 28px;
          }
          .logo-card {
            min-width: 230px;
            height: 125px;
            padding: 14px 24px;
          }
          :global(.logo-img) {
            max-height: 85px;
            max-width: 185px;
          }
          .marquee-track {
            gap: 22px;
          }
        }

        @media (max-width: 576px) {
          .clients-main-title {
            font-size: 24px;
          }
          .logo-card {
            min-width: 195px;
            height: 105px;
            padding: 12px 18px;
          }
          :global(.logo-img) {
            max-height: 72px;
            max-width: 155px;
          }
          .marquee-track {
            gap: 16px;
            animation-duration: 32s;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingClientLogos;
