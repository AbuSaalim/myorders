"use client";
import React from "react";
import Image from "next/image";

const services = [
  {
    num: "01",
    name: "Website Development",
    desc: "Custom responsive websites designed to drive business conversions and strengthen your digital presence.",
    image: "/assets/images/portfolio/corporate-tech-profile.jpg",
    offset: 0,
  },
  {
    num: "02",
    name: "ERP & CRM",
    desc: "Tailored enterprise workflows and smart operational software built to scale your business operations.",
    image: "/assets/images/portfolio/finance-consulting-profile.jpg",
    offset: 40,
  },
  {
    num: "03",
    name: "SEO & Digital Marketing",
    desc: "Data-driven SEO strategies and performance marketing campaigns that maximize traffic, leads, and ROI.",
    image: "/assets/images/portfolio/logistics-supply-chain-profile.jpg",
    offset: 80,
  },
  {
    num: "04",
    name: "Logo & Branding",
    desc: "Memorable corporate brand identity, style guides, and creative designs that establish industry authority.",
    image: "/assets/images/resource/logo-design.webp",
    offset: 120,
  },
];

const LandingOtherServices = () => {
  return (
    <section id="otherservices" className="other-services-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header - Antra/ThemeForest Split Layout */}
        <div className="row align-items-end mb-5 g-4">
          <div className="col-lg-7 col-md-12">
            <div className="section-tag-wrap mb-2">
              <span className="section-dot" />
              <span className="section-tag-text">OTHER SERVICES</span>
            </div>
            <h2 className="section-main-title">
              Complete Business Solutions{" "}
              <span className="highlight-text">Under One Roof.</span>
            </h2>
          </div>

          <div className="col-lg-5 col-md-12">
            <p className="section-desc-text">
              At Blue Diamond, we provide end-to-end business branding and
              marketing solutions under one roof. From company profile creation
              and website development to SEO, digital marketing, and branding,
              we help businesses grow with professional, cost-effective, and
              globally competitive services.
            </p>
          </div>
        </div>

        {/* Stepped / Cascading 4-Card Grid (Exact ThemeForest Antra 4-Column Layout) */}
        <div className="row g-4 cards-row position-relative">
          {services.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3"
            >
              <div
                className="stepped-service-card"
                style={{ "--desktop-offset": `${item.offset}px` }}
              >
                {/* Top Image Visual */}
                <div className="card-thumb-wrap">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={450}
                    height={300}
                    className="card-thumb-img"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Card Content */}
                <div className="card-content-wrap">
                  <h3 className="service-name">
                    <span className="service-num">{item.num}.</span> {item.name}
                  </h3>
                  <p className="service-desc">{item.desc}</p>
                </div>

                {/* Huge Watermark Number at Bottom Right (Exact Antra Style) */}
                <span className="watermark-number">{item.num}</span>
              </div>
            </div>
          ))}

          {/* Floating Circular Badge at Bottom Right (from reference) */}
          <div className="bottom-circle-badge">
            <div className="circle-inner">
              <span className="circle-percent">360°</span>
              <span className="circle-label">Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .other-services-section {
          background-color: #fcfdfd;
          background-image: 
            linear-gradient(rgba(0, 48, 97, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 48, 97, 0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          padding: 100px 0 170px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(0, 48, 97, 0.06);
        }

        /* Section Tag */
        .section-tag-wrap {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .section-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f5683d;
          display: inline-block;
        }
        .section-tag-text {
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }

        /* Section Title */
        .section-main-title {
          font-size: 44px;
          font-weight: 700;
          color: #0b2238;
          font-family: var(--heading-font);
          line-height: 1.22;
          margin: 0;
          letter-spacing: -0.6px;
        }
        .highlight-text {
          color: #f5683d;
        }

        .section-desc-text {
          font-size: 15px;
          color: #555555;
          line-height: 1.75;
          margin: 0;
        }

        /* Cards Row with Stepped Waterfall Spacing */
        .cards-row {
          padding-top: 25px;
        }

        /* Stepped / Cascading Service Card */
        .stepped-service-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #e9edf3;
          padding: 18px 16px 26px 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transform: translateY(var(--desktop-offset, 0px));
          transition:
            transform 0.45s cubic-bezier(0.165, 0.84, 0.44, 1),
            box-shadow 0.45s cubic-bezier(0.165, 0.84, 0.44, 1),
            border-color 0.45s ease;
          cursor: pointer;
        }

        .stepped-service-card:hover {
          transform: translateY(calc(var(--desktop-offset, 0px) - 10px));
          box-shadow:
            0 22px 50px rgba(0, 48, 97, 0.12),
            0 4px 12px rgba(245, 104, 61, 0.08);
          border-color: rgba(245, 104, 61, 0.35);
        }

        /* Card Thumbnail */
        .card-thumb-wrap {
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 14px;
          overflow: hidden;
          background: #eef2f6;
          margin-bottom: 20px;
          position: relative;
        }
        :global(.card-thumb-img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .stepped-service-card:hover :global(.card-thumb-img) {
          transform: scale(1.08);
        }

        /* Content Area */
        .card-content-wrap {
          padding: 0 4px 10px 4px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .service-name {
          font-size: 17px;
          font-weight: 700;
          color: #0b2238;
          font-family: var(--heading-font);
          margin-bottom: 10px;
          line-height: 1.35;
          letter-spacing: -0.2px;
          transition: color 0.3s ease;
        }
        .service-num {
          color: #f5683d;
          font-weight: 800;
          margin-right: 2px;
        }
        .stepped-service-card:hover .service-name {
          color: #003061;
        }

        .service-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Watermark Number in Card Corner (Exact Antra Style) */
        .watermark-number {
          position: absolute;
          right: 14px;
          bottom: 6px;
          font-size: 64px;
          font-weight: 900;
          font-family: var(--heading-font);
          color: #f0f4f9;
          line-height: 1;
          pointer-events: none;
          z-index: 1;
          user-select: none;
          transition: color 0.4s ease, transform 0.4s ease;
        }
        .stepped-service-card:hover .watermark-number {
          color: rgba(245, 104, 61, 0.12);
          transform: translateY(-4px);
        }

        /* Floating Circular Badge */
        .bottom-circle-badge {
          position: absolute;
          right: 15px;
          bottom: -40px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 2px dashed #f5683d;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
          z-index: 4;
        }
        .circle-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .circle-percent {
          font-size: 14px;
          font-weight: 800;
          color: #0b2238;
          font-family: var(--heading-font);
          line-height: 1;
        }
        .circle-label {
          font-size: 9px;
          font-weight: 700;
          color: #f5683d;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .section-main-title {
            font-size: 34px;
          }
          .stepped-service-card {
            --desktop-offset: 0px !important;
            transform: none !important;
          }
          .stepped-service-card:hover {
            transform: translateY(-8px) !important;
          }
          .other-services-section {
            padding: 80px 0;
          }
          .bottom-circle-badge {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .section-main-title {
            font-size: 28px;
          }
          .section-desc-text {
            font-size: 14.5px;
          }
          .other-services-section {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingOtherServices;
