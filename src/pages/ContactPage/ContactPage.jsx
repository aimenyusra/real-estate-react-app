import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/HomePage/Navbar/Navbar";
import "./ContactPage.css";

const agentData = {
  name: "Sarah Mitchell",
  title: "Senior Property Advisor",
  phone: "+1 (310) 555-0192",
  email: "sarah.mitchell@realestate.com",
  avatar: "SM",
  deals: 127,
  rating: 4.9,
  bio: "With over 10 years of experience in luxury real estate across the US, Sarah specializes in helping clients find their perfect home. Her deep market knowledge and white-glove service have earned her a reputation as one of the top advisors in the industry.",
};

const officeInfo = [
  { icon: "📍", label: "Address",      value: "1234 Wilshire Blvd, Suite 500\nLos Angeles, CA 90010" },
  { icon: "📞", label: "Phone",        value: "+1 (310) 555-0100" },
  { icon: "✉️", label: "Email",        value: "hello@realestate.com" },
  { icon: "🕐", label: "Office Hours", value: "Mon – Fri: 9am – 6pm\nSat: 10am – 4pm" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "General Inquiry", message: "",
  });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  const subjects = [
    "General Inquiry",
    "Schedule a Viewing",
    "Property Valuation",
    "Investment Advice",
    "Make an Offer",
    "Other",
  ];

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <>
      <Navbar />

      <div className="contact-page">

        {/* ── Hero ── */}
        <div className="contact-hero">
          <div className="contact-hero__inner">
            <p className="contact-hero__eyebrow">◆ Get In Touch</p>
            <h1 className="contact-hero__title">
              Let's Find Your<br />
              <em>Dream Property</em>
            </h1>
            <p className="contact-hero__sub">
              Our team of expert advisors is ready to help you every step of the way.
            </p>
          </div>
        </div>

        <div className="contact-body">

          {/* ── Left: Form ── */}
          <div className="contact-main">
            <div className="contact-form-card">
              <h2 className="contact-form-card__title">Send Us a Message</h2>
              <p className="contact-form-card__sub">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {sent ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h3 className="contact-success__title">Message Sent!</h3>
                  <p className="contact-success__msg">
                    Thank you, <strong>{formData.name}</strong>! {agentData.name} will
                    reach out to you at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    className="contact-success__btn"
                    onClick={() => { setSent(false); setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label className="contact-form__label">Full Name *</label>
                      <input
                        className="contact-form__input"
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact-form__group">
                      <label className="contact-form__label">Email Address *</label>
                      <input
                        className="contact-form__input"
                        type="email"
                        name="email"
                        placeholder="john@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label className="contact-form__label">Phone Number</label>
                      <input
                        className="contact-form__input"
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-form__group">
                      <label className="contact-form__label">Subject</label>
                      <select
                        className="contact-form__input contact-form__input--select"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label className="contact-form__label">Message *</label>
                    <textarea
                      className="contact-form__input contact-form__input--textarea"
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`contact-form__submit ${loading ? "contact-form__submit--loading" : ""}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="contact-form__spinner" />
                        Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Right: Info ── */}
          <aside className="contact-sidebar">

            {/* Agent card */}
            <div className="contact-agent">
              <p className="contact-agent__eyebrow">YOUR ADVISOR</p>
              <div className="contact-agent__top">
                <div className="contact-agent__av">{agentData.avatar}</div>
                <div>
                  <div className="contact-agent__name">{agentData.name}</div>
                  <div className="contact-agent__title">{agentData.title}</div>
                  <div className="contact-agent__meta">
                    ⭐ {agentData.rating} &nbsp;·&nbsp; {agentData.deals} deals closed
                  </div>
                </div>
              </div>
              <p className="contact-agent__bio">{agentData.bio}</p>
              <div className="contact-agent__btns">
                <a href={`tel:${agentData.phone}`} className="contact-agent-btn contact-agent-btn--call">
                  📞 Call Now
                </a>
                <a href={`mailto:${agentData.email}`} className="contact-agent-btn contact-agent-btn--email">
                  ✉️ Email
                </a>
              </div>
            </div>

            {/* Office info */}
            <div className="contact-office">
              <h3 className="contact-office__title">Office Information</h3>
              <div className="contact-office__list">
                {officeInfo.map((item) => (
                  <div key={item.label} className="contact-office__item">
                    <span className="contact-office__icon">{item.icon}</span>
                    <div>
                      <div className="contact-office__label">{item.label}</div>
                      <div className="contact-office__value" style={{ whiteSpace: "pre-line" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="contact-social">
              <p className="contact-social__label">Follow Us</p>
              <div className="contact-social__links">
                {["Instagram", "Facebook", "LinkedIn", "Twitter"].map((s) => (
                  <a key={s} href="#" className="contact-social__btn" aria-label={s}>
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* ── Map section ── */}
        <div className="contact-map-section">
          <h2 className="contact-map-section__title">Find Us</h2>
          <div className="contact-map">
            <div className="contact-map__inner">
              <div className="contact-map__pin">📍</div>
              <div className="contact-map__address">1234 Wilshire Blvd, Los Angeles, CA</div>
              <a
                href="https://maps.google.com/?q=1234+Wilshire+Blvd+Los+Angeles+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map__link"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactPage;