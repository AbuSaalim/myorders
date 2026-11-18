"use client";
import React from "react";
import { Check } from "lucide-react";

const LandingPricing = () => {
  return (
    <section id="our-packages" className="pricing-section">
      <div className="container">
        {/* Section Header - Exact Original Text */}
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2 className="pricing-title">
              Company Profile Design Packages That Fit Every Business
            </h2>
            <p className="pricing-subtitle">
              First Impressions Matter. Make Yours Unforgettable.
            </p>
            <p className="pricing-description">
              Choose from our affordable Company Profile Design packages
              tailored for startups, corporates, contractors, and growing
              businesses. Get expert content, premium design, and fast delivery
              that helps your brand stand out and win more opportunities.
            </p>
          </div>
        </div>

        {/* 3 Pricing Cards Grid - All Clean Light Cards */}
        <div className="row align-items-center justify-content-center g-4">
          {/* Card 1: Basic Plan */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="pricing-card basic-card">
              <div className="card-top">
                <h3 className="card-plan-title">BASIC Company Profile</h3>
                <p className="card-plan-words">Fresh Content – 350 words</p>
                <div className="card-pages-wrap">
                  <span className="pages-num">08</span>
                  <span className="pages-label">Pages</span>
                </div>
              </div>

              <div className="card-divider"></div>

              <ul className="features-list">
                {[
                  "About Us, Mission, Vision, Values, Services / Products",
                  "Unique design for each page",
                  "Professional Graphic Designer",
                  "2 on-call discussions with coordinator",
                  "Ready To Print, PDF & Source Files",
                  "2 Brief revisions",
                  "Delivery: 24 hours",
                  "Project validity: 25 days",
                ].map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon-wrap">
                      <Check size={16} strokeWidth={2.8} />
                    </span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/917700091613?text=Hi%2C%20I%20am%20interested%20in%20the%20BASIC%20Company%20Profile%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-btn w-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="btn-icon"
                >
                  <path d="M12.012 2C6.485 2 2 6.48 2 12.01c0 1.91.53 3.78 1.56 5.42L2 22l4.76-1.24a9.98 9.98 0 0 0 5.25 1.48c5.53 0 10.01-4.49 10.01-10.02a9.96 9.96 0 0 0-10.01-10.22zm6.27 13.91c-.24.68-1.24 1.25-1.9 1.34-.54.07-1.24.09-3.52-.86-2.91-1.21-4.79-4.16-4.94-4.36-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.4.24-.26.63-.37.98-.37.11 0 .22 0 .31.01.27.01.41.03.59.45.23.56.78 1.91.85 2.05.07.14.12.31.02.51-.1.2-.21.32-.37.52-.16.19-.34.42-.49.56-.16.16-.34.34-.15.68.19.32.85 1.41 1.83 2.28 1.26 1.13 2.33 1.47 2.66 1.64.33.17.52.14.71-.07.19-.21.83-.97 1.05-1.3.23-.33.46-.28.78-.16.32.12 2.07 1.02 2.43 1.2.36.19.6.28.68.43.09.15.09.87-.15 1.55z" />
                </svg>
                <span>ORDER NOW</span>
              </a>
            </div>
          </div>

          {/* Card 2: Premium Plan (Center Most Popular Light Card) */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="pricing-card premium-card">
              {/* Floating Cyan/Teal Most Popular Ribbon Pill */}
              <div className="popular-badge-pill">
                <span>Most Popular</span>
              </div>

              <div className="card-top">
                <h3 className="card-plan-title">
                  PREMIUM COMPANY PROFILE
                </h3>
                <p className="card-plan-words">
                  Fresh Content – 750 words
                </p>
                <div className="card-pages-wrap">
                  <span className="pages-num highlight-num">16</span>
                  <span className="pages-label">Pages</span>
                </div>
              </div>

              <div className="card-divider"></div>

              <ul className="features-list">
                {[
                  "About Us, Mission, Vision, Values, Services / Products, Gallery, Clients, Project List, Certificates",
                  "Unique design for each page",
                  "Dedicated professional designer",
                  "Dedicated Project Coordinator",
                  "Ready To Print, PDF & Source Files",
                  "5 Brief revisions",
                  "Delivery: 4 days",
                  "Project validity: 45 days",
                  "Complimentary : Corporate Website",
                ].map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon-wrap">
                      <Check size={16} strokeWidth={2.8} />
                    </span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/917700091613?text=Hi%2C%20I%20am%20interested%20in%20the%20PREMIUM%20Company%20Profile%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-btn w-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="btn-icon"
                >
                  <path d="M12.012 2C6.485 2 2 6.48 2 12.01c0 1.91.53 3.78 1.56 5.42L2 22l4.76-1.24a9.98 9.98 0 0 0 5.25 1.48c5.53 0 10.01-4.49 10.01-10.02a9.96 9.96 0 0 0-10.01-10.22zm6.27 13.91c-.24.68-1.24 1.25-1.9 1.34-.54.07-1.24.09-3.52-.86-2.91-1.21-4.79-4.16-4.94-4.36-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.4.24-.26.63-.37.98-.37.11 0 .22 0 .31.01.27.01.41.03.59.45.23.56.78 1.91.85 2.05.07.14.12.31.02.51-.1.2-.21.32-.37.52-.16.19-.34.42-.49.56-.16.16-.34.34-.15.68.19.32.85 1.41 1.83 2.28 1.26 1.13 2.33 1.47 2.66 1.64.33.17.52.14.71-.07.19-.21.83-.97 1.05-1.3.23-.33.46-.28.78-.16.32.12 2.07 1.02 2.43 1.2.36.19.6.28.68.43.09.15.09.87-.15 1.55z" />
                </svg>
                <span>ORDER NOW</span>
              </a>
            </div>
          </div>

          {/* Card 3: Standard Plan */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="pricing-card standard-card">
              <div className="card-top">
                <h3 className="card-plan-title">STANDARD Company Profile</h3>
                <p className="card-plan-words">Fresh Content – 500 words</p>
                <div className="card-pages-wrap">
                  <span className="pages-num">12</span>
                  <span className="pages-label">Pages</span>
                </div>
              </div>

              <div className="card-divider"></div>

              <ul className="features-list">
                {[
                  "About Us, Mission, Vision, Values, Services / Products, Gallery, Clients",
                  "Unique design for each page",
                  "Sr. Graphic Designer",
                  "Dedicated Project Coordinator",
                  "Ready To Print, PDF & Source Files",
                  "3 Brief revisions",
                  "Delivery: 2 days",
                  "Project validity: 30 days",
                ].map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon-wrap">
                      <Check size={16} strokeWidth={2.8} />
                    </span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/917700091613?text=Hi%2C%20I%20am%20interested%20in%20the%20STANDARD%20Company%20Profile%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-btn w-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="btn-icon"
                >
                  <path d="M12.012 2C6.485 2 2 6.48 2 12.01c0 1.91.53 3.78 1.56 5.42L2 22l4.76-1.24a9.98 9.98 0 0 0 5.25 1.48c5.53 0 10.01-4.49 10.01-10.02a9.96 9.96 0 0 0-10.01-10.22zm6.27 13.91c-.24.68-1.24 1.25-1.9 1.34-.54.07-1.24.09-3.52-.86-2.91-1.21-4.79-4.16-4.94-4.36-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.4.24-.26.63-.37.98-.37.11 0 .22 0 .31.01.27.01.41.03.59.45.23.56.78 1.91.85 2.05.07.14.12.31.02.51-.1.2-.21.32-.37.52-.16.19-.34.42-.49.56-.16.16-.34.34-.15.68.19.32.85 1.41 1.83 2.28 1.26 1.13 2.33 1.47 2.66 1.64.33.17.52.14.71-.07.19-.21.83-.97 1.05-1.3.23-.33.46-.28.78-.16.32.12 2.07 1.02 2.43 1.2.36.19.6.28.68.43.09.15.09.87-.15 1.55z" />
                </svg>
                <span>ORDER NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: #ffffff;
          padding: 85px 0 95px 0;
          position: relative;
        }

        .pricing-title {
          font-size: 34px;
          font-weight: 700;
          color: #0b2238;
          font-family: var(--heading-font);
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: -0.3px;
        }

        .pricing-subtitle {
          font-size: 19px;
          color: #003061;
          font-weight: 600;
          font-family: var(--heading-font);
          margin-bottom: 12px;
        }

        .pricing-description {
          font-size: 14.5px;
          color: #555555;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* All 3 Cards: Clean Pure White */
        .pricing-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 32px;
          height: 100%;
          border: 1px solid #e5e9f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          position: relative;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
                      box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
                      border-color 0.4s ease;
        }

        /* Hover Effect for Side Cards (Basic & Standard) */
        .basic-card:hover,
        .standard-card:hover {
          transform: translateY(-8px);
          border-color: #0284c7;
          box-shadow: 0 18px 40px rgba(2, 132, 199, 0.1);
        }

        /* Center Card: Most Popular Highlighted Light Card */
        .premium-card {
          border: 2px solid #00b4d8;
          box-shadow: 0 12px 35px rgba(0, 180, 216, 0.15);
          position: relative;
        }
        .premium-card:hover {
          transform: translateY(-8px);
          border-color: #0096c7;
          box-shadow: 0 22px 50px rgba(0, 180, 216, 0.22);
        }

        /* Most Popular Floating Pill Badge */
        .popular-badge-pill {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: #00b4d8;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 18px;
          border-radius: 50px;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 180, 216, 0.35);
          white-space: nowrap;
        }

        /* Card Typography */
        .card-plan-title {
          font-size: 22px;
          font-weight: 700;
          color: #0b2238;
          margin-bottom: 5px;
          font-family: var(--heading-font);
        }
        .card-plan-words {
          font-size: 13.5px;
          color: #64748b;
          margin-bottom: 18px;
          font-weight: 500;
        }

        .card-pages-wrap {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 15px;
        }
        .pages-num {
          font-size: 46px;
          font-weight: 800;
          color: #0b2238;
          line-height: 1;
          font-family: var(--heading-font);
        }
        .highlight-num {
          color: #00b4d8;
        }
        .pages-label {
          font-size: 16px;
          color: #555555;
          font-weight: 600;
        }

        .card-divider {
          height: 1px;
          background: #eef2f6;
          margin: 15px 0 22px 0;
        }

        /* Features List */
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
          flex-grow: 1;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          font-size: 14.5px;
          line-height: 1.45;
          color: #334155;
        }
        .check-icon-wrap {
          color: #16a34a;
          margin-top: 2px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .pricing-card:hover .check-icon-wrap {
          transform: scale(1.15);
        }

        /* Buttons Styling & Hover Effects - Exact Hero Style */
        .pricing-btn {
          font-size: 15px;
          padding: 13px 24px;
          font-weight: 700;
          color: #ffffff !important;
          background: #003061;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 1;
          text-decoration: none;
          transition: all 0.4s ease;
          border: none;
          cursor: pointer;
          overflow: hidden;
          letter-spacing: 0.5px;
          margin-top: auto;
          box-shadow: 0 4px 12px rgba(0, 48, 97, 0.2);
        }

        .pricing-btn:before {
          position: absolute;
          content: "";
          z-index: -1;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 5px;
          background: #f5683d;
          transform: scale(0);
          transition: all 0.4s ease;
        }

        .pricing-btn:hover:before {
          transform: scale(1);
        }

        .pricing-btn:hover {
          color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(245, 104, 61, 0.35);
          transform: translateY(-2px);
        }

        :global(.pricing-btn .btn-icon) {
          color: #ffffff;
          flex-shrink: 0;
          transition: all 0.4s ease;
        }

        @media (max-width: 991px) {
          .pricing-section {
            padding: 60px 0;
          }
          .pricing-title {
            font-size: 28px;
          }
          .premium-card {
            margin: 20px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingPricing;
