"use client";
import React from "react";
import Image from "next/image";

const industries = [
  {
    name: "Corporate Company Profile",
    image: "/assets/images/industries-we-specialize-in/1.png",
  },
  {
    name: "Construction Company Profile",
    image: "/assets/images/industries-we-specialize-in/2.png",
  },
  {
    name: "Civil Contractor Profile",
    image: "/assets/images/industries-we-specialize-in/3.png",
  },
  {
    name: "Manufacturing Company Profile",
    image: "/assets/images/industries-we-specialize-in/4.png",
  },
  {
    name: "IT Company Profile",
    image: "/assets/images/industries-we-specialize-in/5.png",
  },
  {
    name: "Real Estate Company Profile",
    image: "/assets/images/industries-we-specialize-in/6.png",
  },
  {
    name: "Logistics Company Profile",
    image: "/assets/images/industries-we-specialize-in/7.png",
  },
  {
    name: "Healthcare Company Profile",
    image: "/assets/images/industries-we-specialize-in/8.png",
  },
];

const LandingIndustries = () => {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        {/* Section Header - Exact Original Text */}
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2 className="industries-title">Industries We Specialize In</h2>
            <p className="industries-desc">
              We create customized Company Profile Design solutions for
              businesses across diverse industries, ensuring every profile
              reflects your brand identity, highlights your strengths, and
              supports your business goals.
            </p>
          </div>
        </div>

        {/* Clean Minimalist 4-Column Grid */}
        <div className="row justify-content-center g-3 g-lg-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-md-4 col-lg-3"
            >
              <div className="industry-card">
                <div className="image-stage">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={320}
                    height={220}
                    className="industry-img"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="industry-name">{industry.name}</h3>
              </div>
            </div>
          ))}

          {/* Bottom Note - Exact Original Text */}
          <div className="col-12 text-center">
            <p className="industries-footer-note">
              ...and many more industries, tailored to your specific business
              requirements
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .industries-section {
          background-color: #ffffff;
          padding: 85px 0 90px 0;
          position: relative;
        }

        /* Clean Typography */
        .industries-title {
          font-size: 34px;
          font-weight: 700;
          color: #0b2238;
          font-family: var(--heading-font);
          margin-bottom: 14px;
          letter-spacing: -0.4px;
        }

        .industries-desc {
          font-size: 15.5px;
          color: #555555;
          max-width: 840px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Minimalist Card Design */
        .industry-card {
          background: #ffffff;
          border: 1px solid #edf2f7;
          border-radius: 16px;
          padding: 26px 18px 22px 18px;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.3s ease;
          cursor: pointer;
        }

        .industry-card:hover {
          transform: translateY(-5px);
          border-color: #dbe4ee;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
        }

        /* Image Display Stage */
        .image-stage {
          width: 100%;
          height: 135px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        :global(.industry-img) {
          width: auto !important;
          height: auto !important;
          max-width: 100% !important;
          max-height: 125px !important;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .industry-card:hover :global(.industry-img) {
          transform: scale(1.05);
        }

        /* Title */
        .industry-name {
          font-size: 14.5px;
          font-weight: 600;
          color: #0b2238;
          line-height: 1.4;
          margin: 0;
          font-family: var(--heading-font);
          transition: color 0.25s ease;
        }

        .industry-card:hover .industry-name {
          color: #003061;
        }

        .industries-footer-note {
          font-size: 14.5px;
          color: #64748b;
          margin-top: 35px;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .industries-section {
            padding: 55px 0;
          }
          .industries-title {
            font-size: 26px;
          }
          .industry-card {
            padding: 18px 12px 16px 12px;
            border-radius: 12px;
          }
          .image-stage {
            height: 100px;
            margin-bottom: 10px;
          }
          :global(.industry-img) {
            max-height: 95px !important;
          }
          .industry-name {
            font-size: 12.5px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingIndustries;
