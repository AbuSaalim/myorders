"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
  MapPin,
  PhoneCall,
  Briefcase,
  FileText,
  Building,
} from "lucide-react";
import Image from "next/image";

const LandingFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({
      num1,
      num2,
      result: num1 + num2,
    });
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length > 10) return;
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter exactly a 10-digit phone number";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (parseInt(formData.captchaInput) !== captcha.result) {
      newErrors.captchaInput = "Incorrect captcha answer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            subject: `New Enquiry for ${formData.service}`,
            message: `Service Requested: ${formData.service}`,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              captchaInput: "",
            });
            setIsSubmitted(false);
            generateCaptcha();
          }, 5000);
        } else {
          setSubmitError(
            data.error || "Something went wrong. Please try again.",
          );
        }
      } catch (error) {
        setSubmitError("Failed to connect to the server. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <footer id="get-quote" className="landing-footer">
      {/* Decorative Star Doodle */}
      <div className="footer-star-right">
        <Image
          src="/assets/images/resource/shap-2.png"
          alt="star"
          width={38}
          height={38}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center align-items-center">
          {/* Left Contact Info - Clean Light Theme */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 pe-lg-5">
            <div className="footer-contact-header mb-4">
              <div className="footer-brand-logo mb-3">
                <Image
                  src="/assets/images/logo-myorders.png"
                  alt="Company Profile Design"
                  width={300}
                  height={72}
                  style={{ maxHeight: "65px", width: "auto", objectFit: "contain" }}
                  priority
                />
              </div>
              <h2 className="footer-main-title">Contact Us Directly</h2>
              <p className="footer-subtitle">
                Have questions or need assistance? Reach out to our team
                directly or submit an enquiry to get started.
              </p>
            </div>

            <div className="contact-info-list">
              {/* Address */}
              <div className="contact-item d-flex align-items-start mb-4">
                <div className="icon-bubble">
                  <MapPin size={22} />
                </div>
                <div className="item-details">
                  <span className="item-label">Address</span>
                  <p className="item-text mb-0">
                    B 403, Virani Business Center, Opposite Bharat Gears,
                    Mumbai-Pune Road, Thane, Mumbai – Maharashtra 400612.
                  </p>
                </div>
              </div>

              {/* Sales Phone */}
              <div className="contact-item d-flex align-items-center mb-4">
                <div className="icon-bubble">
                  <PhoneCall size={20} />
                </div>
                <div className="item-details">
                  <span className="item-label">Sales</span>
                  <a href="tel:+917700091613" className="item-link">
                    +91 7700091613
                  </a>
                </div>
              </div>

              {/* Projects Phone */}
              <div className="contact-item d-flex align-items-center mb-4">
                <div className="icon-bubble">
                  <Briefcase size={20} />
                </div>
                <div className="item-details">
                  <span className="item-label">Projects</span>
                  <a href="tel:+917700090159" className="item-link">
                    +91 7700090159
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item d-flex align-items-center mb-4">
                <div className="icon-bubble">
                  <Mail size={20} />
                </div>
                <div className="item-details">
                  <span className="item-label">Email</span>
                  <a href="mailto:bdm@thebdit.net" className="item-link">
                    bdm@thebdit.net
                  </a>
                </div>
              </div>

              {/* GSTIN & CIN in a clean 2-column sub-grid */}
              <div className="row g-3 pt-2">
                <div className="col-sm-6">
                  <div className="contact-mini-badge d-flex align-items-center">
                    <div className="mini-icon">
                      <FileText size={18} />
                    </div>
                    <div>
                      <span className="mini-label">GSTIN</span>
                      <span className="mini-value">27AAFCB0696M1Z9</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="contact-mini-badge d-flex align-items-center">
                    <div className="mini-icon">
                      <Building size={18} />
                    </div>
                    <div>
                      <span className="mini-label">CIN</span>
                      <span className="mini-value">U72300MH2012PTC232709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card - Matching Hero Clean Light Style */}
          <div className="col-lg-6 col-md-12">
            <div className="footer-form-card">
              <h3 className="form-card-title">Get Started Now</h3>

              {isSubmitted ? (
                <div
                  className="success-message-container"
                  style={{ padding: "40px 10px", textAlign: "center" }}
                >
                  <CheckCircle2
                    size={64}
                    className="success-icon"
                    style={{ color: "#28a745", marginBottom: "20px" }}
                  />
                  <h4
                    style={{
                      fontSize: "22px",
                      color: "#0b2238",
                      marginBottom: "10px",
                      fontFamily: "var(--heading-font)",
                    }}
                  >
                    Enquiry Submitted Successfully!
                  </h4>
                  <p style={{ color: "#555" }}>
                    Thank you! Our team will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form">
                  <div className="row">
                    {/* Full Name */}
                    <div className="col-md-6 form-group-custom mb-3">
                      <label className="form-label-custom">Full Name</label>
                      <div className="input-with-icon position-relative">
                        <User size={18} className="input-icon" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-control-custom ${errors.name ? "error" : ""}`}
                        />
                      </div>
                      {errors.name && (
                        <span className="error-text">{errors.name}</span>
                      )}
                    </div>

                    {/* Contact Number */}
                    <div className="col-md-6 form-group-custom mb-3">
                      <label className="form-label-custom">Contact Number</label>
                      <div className="input-with-icon position-relative">
                        <Phone size={18} className="input-icon" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter your contact number"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength="10"
                          pattern="[0-9]*"
                          className={`form-control-custom ${errors.phone ? "error" : ""}`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="error-text">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="form-group-custom mb-3">
                    <label className="form-label-custom">Email Address</label>
                    <div className="input-with-icon position-relative">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control-custom ${errors.email ? "error" : ""}`}
                      />
                    </div>
                    {errors.email && (
                      <span className="error-text">{errors.email}</span>
                    )}
                  </div>

                  {/* Service Needed */}
                  <div className="form-group-custom mb-3">
                    <label className="form-label-custom">Service Needed *</label>
                    <div className="position-relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`form-control-custom select-custom ${errors.service ? "error" : ""}`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Corporate Company Profile">
                          Corporate Company Profile
                        </option>
                        <option value="Construction Company Profile">
                          Construction Company Profile
                        </option>
                        <option value="IT Company Profile">
                          IT Company Profile
                        </option>
                        <option value="Interior Company Profile">
                          Interior Company Profile
                        </option>
                        <option value="Contractor Company Profile">
                          Contractor Company Profile
                        </option>
                        <option value="Housekeeping Company Profile">
                          Housekeeping Company Profile
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="select-arrow">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <span className="error-text">{errors.service}</span>
                    )}
                  </div>

                  {/* Security Verification */}
                  <div className="form-group-custom captcha-container-custom mb-4">
                    <label className="captcha-label">
                      <ShieldCheck size={16} className="me-1 text-muted" />
                      Security Verification (Solve the math problem):
                    </label>
                    <div className="captcha-row d-flex align-items-center gap-2">
                      <span className="captcha-math-box">
                        {captcha.num1} + {captcha.num2} =
                      </span>
                      <input
                        type="number"
                        name="captchaInput"
                        placeholder="?"
                        value={formData.captchaInput}
                        onChange={handleChange}
                        className={`captcha-input ${errors.captchaInput ? "error" : ""}`}
                      />
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="captcha-refresh-btn"
                        aria-label="Refresh captcha"
                      >
                        <RefreshCw size={16} />
                      </button>
                    </div>
                    {errors.captchaInput && (
                      <span className="error-text">{errors.captchaInput}</span>
                    )}
                  </div>

                  {submitError && (
                    <div className="error-text text-center mb-3">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button - Exact Hero Button Style */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="footer-submit-btn"
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Clean Copyright Bottom Bar */}
      <div className="footer-bottom-bar mt-5">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-12 text-center">
              <p className="copyright-text mb-0">
                © Copyright {new Date().getFullYear()} Blue Diamond Infotech
                Pvt. Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .landing-footer {
          background-image: url("/assets/images/resource/inner-bg.webp");
          background-repeat: no-repeat;
          background-position: center top;
          background-size: cover;
          background-color: #fbfcfe;
          padding-top: 85px;
          position: relative;
          border-top: 1px solid rgba(0, 48, 97, 0.08);
          overflow: hidden;
        }

        .footer-star-right {
          position: absolute;
          right: 50px;
          top: 70px;
          z-index: 1;
          pointer-events: none;
          animation: rotateme 22s infinite linear;
        }

        @keyframes rotateme {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .footer-main-title {
          font-size: 34px;
          font-weight: 700;
          color: #0b2238;
          font-family: var(--heading-font);
          margin-bottom: 12px;
          letter-spacing: -0.4px;
        }
        .footer-subtitle {
          font-size: 15px;
          color: #555555;
          line-height: 1.65;
          margin-bottom: 0;
        }

        /* Left Contact Item Cards */
        .icon-bubble {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #003061;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 48, 97, 0.18);
          transition: all 0.35s ease;
        }
        .contact-item:hover .icon-bubble {
          background: #f5683d;
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(245, 104, 61, 0.3);
        }

        .item-details {
          display: flex;
          flex-direction: column;
        }
        .item-label {
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 3px;
        }
        .item-text {
          font-size: 15px;
          color: #0b2238;
          line-height: 1.55;
          font-weight: 500;
        }
        .item-link {
          font-size: 17px;
          color: #0b2238;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .item-link:hover {
          color: #f5683d;
        }

        /* GSTIN & CIN Mini Badges */
        .contact-mini-badge {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }
        .contact-mini-badge:hover {
          border-color: #003061;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 48, 97, 0.08);
        }
        .mini-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #f1f5fa;
          color: #003061;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          flex-shrink: 0;
        }
        .mini-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.5px;
        }
        .mini-value {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #0b2238;
          word-break: break-all;
        }

        /* Right Form Card */
        .footer-form-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 34px 30px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .form-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #0b2238;
          margin-bottom: 22px;
          font-family: var(--heading-font);
        }

        .form-label-custom {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 6px;
          display: block;
        }

        :global(.input-icon) {
          position: absolute;
          left: 14px;
          top: 13px;
          color: #94a3b8;
          pointer-events: none;
        }

        .form-control-custom {
          width: 100%;
          padding: 11px 15px 11px 42px;
          border: 1px solid #dbe2ea;
          border-radius: 6px;
          font-size: 14px;
          color: #0f172a;
          background-color: #ffffff;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .form-control-custom:focus {
          border-color: #003061;
          box-shadow: 0 0 0 3px rgba(0, 48, 97, 0.08);
        }
        .form-control-custom.error {
          border-color: #dc3545;
        }

        .select-custom {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-left: 15px;
          cursor: pointer;
          height: 44px;
        }
        .select-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #475569;
        }

        /* Captcha */
        .captcha-container-custom {
          background: #f8fafc;
          padding: 14px 16px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        .captcha-label {
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        .captcha-math-box {
          background: #003061;
          color: #ffffff;
          padding: 9px 16px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 1px;
        }
        .captcha-input {
          width: 75px;
          padding: 8px;
          text-align: center;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-weight: 700;
          font-size: 15px;
          color: #0f172a;
          outline: none;
        }
        .captcha-input:focus {
          border-color: #003061;
        }
        .captcha-refresh-btn {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 8px 10px;
          border-radius: 6px;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }
        .captcha-refresh-btn:hover {
          background: #003061;
          color: #ffffff;
          border-color: #003061;
        }

        .error-text {
          color: #dc3545;
          font-size: 12px;
          display: block;
          margin-top: 5px;
        }

        /* Submit Button - Hero Button Style */
        .footer-submit-btn {
          width: 100%;
          background: #003061;
          color: #ffffff;
          border: none;
          padding: 14px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          position: relative;
          z-index: 1;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 4px 12px rgba(0, 48, 97, 0.2);
        }
        .footer-submit-btn:before {
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
        .footer-submit-btn:hover:before {
          transform: scale(1);
        }
        .footer-submit-btn:hover {
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(245, 104, 61, 0.35);
        }

        /* Copyright Bar */
        .footer-bottom-bar {
          background: rgba(0, 48, 97, 0.04);
          border-top: 1px solid rgba(0, 48, 97, 0.08);
        }
        .copyright-text {
          font-size: 13.5px;
          color: #64748b;
        }

        @media (max-width: 991px) {
          .landing-footer {
            padding-top: 60px;
          }
          .footer-main-title {
            font-size: 28px;
          }
          .footer-form-card {
            padding: 24px 20px;
          }
          .footer-star-right {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default LandingFooter;
