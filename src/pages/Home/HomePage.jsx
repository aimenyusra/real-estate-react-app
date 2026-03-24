import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/HomePage/Navbar/Navbar";
import "./HomePage.css";

const STATS = [
  { value: "2,400+", label: "Properties Listed"   },
  { value: "$1.2B",  label: "Total Sales Volume"  },
  { value: "98%",    label: "Client Satisfaction" },
  { value: "12 yrs", label: "Market Experience"   },
];

const FEATURES = [
  { icon: "🏆", title: "Premium Listings",   desc: "Handpicked luxury and mid-range properties across all major UAE cities." },
  { icon: "🔍", title: "Smart Search",       desc: "Filter by location, price, type, size and get instant results." },
  { icon: "📊", title: "Compare & Decide",   desc: "Compare up to 3 properties side by side to make informed decisions." },
  { icon: "❤️",  title: "Save Favourites",   desc: "Heart any property and it stays saved — even when you close the tab." },
  { icon: "🗺️", title: "Interactive Map",    desc: "Explore listings geographically with our built-in property map." },
  { icon: "📞", title: "Expert Advisors",   desc: "Connect directly with top-rated agents who know your target market." },
];

const TESTIMONIALS = [
  { name: "James Whitfield",  role: "Home Buyer — Los Angeles",     quote: "Found my dream villa in under two weeks. The favourites feature made it so easy to shortlist.",  avatar: "JW" },
  { name: "Priya Nair",       role: "Investor — Miami",             quote: "The compare tool is a game changer. I could see all the numbers side by side before committing.",   avatar: "PN" },
  { name: "Marcus Chen",      role: "First-Time Buyer — New York",  quote: "I never expected finding a penthouse to feel this smooth. Incredible platform.",                   avatar: "MC" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) navigate(`/properties?search=${encodeURIComponent(search)}`);
    else navigate("/properties");
  };

  return (
    <>
      <Navbar />
      <div className="home">

        {/* ── Hero ── */}
        <section className="home-hero">
          <div className="home-hero__bg-overlay" />
          <div className="home-hero__particles" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="home-hero__particle" style={{ "--i": i }} />
            ))}
          </div>
          <div className="home-hero__inner">
            <p className="home-hero__eyebrow">◆ Premium Real Estate</p>
            <h1 className="home-hero__title">
              Find Your <em>Dream</em><br />
              Property Today
            </h1>
            <p className="home-hero__sub">
              Explore thousands of premium properties across the United Arab Emirates.
              Search, save, compare — all in one place.
            </p>

            {/* Search bar */}
            <div className="home-search">
              <div className="home-search__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <input
                className="home-search__input"
                type="text"
                placeholder="Search by city, state, or ZIP..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button className="home-search__btn" onClick={handleSearch}>
                Search Properties
              </button>
            </div>

            {/* Quick links */}
            <div className="home-hero__quick">
              {["Villa", "Apartment", "Penthouse", "Townhouse"].map((t) => (
                <button
                  key={t}
                  className="home-hero__quick-btn"
                  onClick={() => navigate(`/properties?type=${t}`)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="home-stats">
          <div className="home-stats__inner">
            {STATS.map((s) => (
              <div key={s.label} className="home-stat">
                <div className="home-stat__value">{s.value}</div>
                <div className="home-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section className="home-features">
          <div className="home-features__inner">
            <div className="home-section-head">
              <p className="home-section-head__eyebrow">◆ Why Choose Us</p>
              <h2 className="home-section-head__title">Everything You Need to<br /><em>Find Your Home</em></h2>
            </div>
            <div className="home-features__grid">
              {FEATURES.map((f) => (
                <div key={f.title} className="home-feature-card">
                  <div className="home-feature-card__icon">{f.icon}</div>
                  <h3 className="home-feature-card__title">{f.title}</h3>
                  <p className="home-feature-card__desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA banner ── */}
        <section className="home-cta">
          <div className="home-cta__inner">
            <p className="home-cta__eyebrow">◆ Start Today</p>
            <h2 className="home-cta__title">Ready to Find Your<br /><em>Perfect Property?</em></h2>
            <p className="home-cta__sub">
              Browse our curated listings and use our powerful tools to find, save, and compare.
            </p>
            <div className="home-cta__btns">
              <button className="home-cta__btn home-cta__btn--primary" onClick={() => navigate("/properties")}>
                Browse All Properties
              </button>
              <button className="home-cta__btn home-cta__btn--secondary" onClick={() => navigate("/contact")}>
                Talk to an Advisor
              </button>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="home-testimonials">
          <div className="home-testimonials__inner">
            <div className="home-section-head">
              <p className="home-section-head__eyebrow">◆ Client Stories</p>
              <h2 className="home-section-head__title">What Our Clients <em>Say</em></h2>
            </div>
            <div className="home-testimonials__grid">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="home-tcard">
                  <div className="home-tcard__stars">★★★★★</div>
                  <p className="home-tcard__quote">"{t.quote}"</p>
                  <div className="home-tcard__author">
                    <div className="home-tcard__av">{t.avatar}</div>
                    <div>
                      <div className="home-tcard__name">{t.name}</div>
                      <div className="home-tcard__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="home-footer">
          <div className="home-footer__inner">
            <div className="home-footer__brand">
              <span className="home-footer__logo">◆ DubaiEstate</span>
              <p className="home-footer__tagline">Premium real estate for discerning buyers.</p>
            </div>
            <div className="home-footer__links">
              <button onClick={() => navigate("/properties")}>Properties</button>
              <button onClick={() => navigate("/favourites")}>Favourites</button>
              <button onClick={() => navigate("/compare")}>Compare</button>
              <button onClick={() => navigate("/contact")}>Contact</button>
            </div>
            <p className="home-footer__copy">© 2024 DubaiEstate. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default HomePage;