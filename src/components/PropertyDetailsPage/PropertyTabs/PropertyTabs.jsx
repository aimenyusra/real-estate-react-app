import "./PropertyTabs.css";
import React, { useState } from "react";
import { amenitiesList, agentData } from "../../../api/propertiesData";

const TABS = [
  { key: "overview",  label: "Overview"  },
  { key: "amenities", label: "Amenities" },
  { key: "location",  label: "Location"  },
  { key: "contact",   label: "Contact"   },
];

const PropertyTabs = ({ property }) => {
  const [activeTab, setActiveTab]   = useState("overview");
  const [contactSent, setContactSent] = useState(false);

  return (
    <div>
      {/* Tab bar */}
      <div className="pd-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={activeTab === t.key}
            className={`pd-tab ${activeTab === t.key ? "pd-tab--active" : ""}`}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Overview ── */}
      {activeTab === "overview" && (
        <div className="pd-panel">
          <h2 className="pd-panel__title">About This Property</h2>
          <p className="pd-panel__desc">
            This beautiful {property.type.toLowerCase()} in {property.location} offers
            modern living with {property.bedrooms} spacious bedrooms and {property.bathrooms} bathrooms
            across {property.sqft.toLocaleString()} sqft of living space. Perfect for families
            looking for comfort and convenience in one of the most sought-after neighborhoods.
          </p>
          <div className="pd-meta-grid">
            {[
              { label: "Property Type", value: property.type },
              { label: "Location",      value: property.location },
              { label: "Bedrooms",      value: property.bedrooms },
              { label: "Bathrooms",     value: property.bathrooms },
              { label: "Living Area",   value: `${property.sqft.toLocaleString()} sqft` },
              { label: "Listing ID",    value: `#RE-${String(property.id).padStart(4, "0")}` },
            ].map((m) => (
              <div key={m.label} className="pd-meta-item">
                <span className="pd-meta-item__label">{m.label}</span>
                <span className="pd-meta-item__value">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Amenities ── */}
      {activeTab === "amenities" && (
        <div className="pd-panel">
          <h2 className="pd-panel__title">Amenities & Features</h2>
          <div className="pd-amenities">
            {amenitiesList.map((a) => (
              <div key={a} className="pd-amenity">
                <span className="pd-amenity__dot">✦</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Location ── */}
      {activeTab === "location" && (
        <div className="pd-panel">
          <h2 className="pd-panel__title">Location</h2>
          <p className="pd-panel__desc">
            Located in {property.location} — {property.lat}°N, {Math.abs(property.lng)}°W
          </p>
          <div className="pd-map-placeholder">
            <div className="pd-map-placeholder__inner">
              <div className="pd-map-placeholder__pin">📍</div>
              <div className="pd-map-placeholder__city">{property.location}</div>
              <div className="pd-map-placeholder__coords">
                {property.lat}°N, {Math.abs(property.lng)}°W
              </div>
              <a
                href={`https://maps.google.com/?q=${property.lat},${property.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-map-placeholder__link"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Contact ── */}
      {activeTab === "contact" && (
        <div className="pd-panel">
          <h2 className="pd-panel__title">Send a Message</h2>
          {contactSent ? (
            <div className="pd-contact-success">
              <div className="pd-contact-success__icon">✓</div>
              <p className="pd-contact-success__msg">
                Message sent! {agentData.name} will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              className="pd-contact-form"
              onSubmit={(e) => { e.preventDefault(); setContactSent(true); }}
            >
              <div className="pd-form-row">
                <div className="pd-form-group">
                  <label className="pd-form-label">Full Name</label>
                  <input className="pd-form-input" type="text" placeholder="John Smith" required />
                </div>
                <div className="pd-form-group">
                  <label className="pd-form-label">Email</label>
                  <input className="pd-form-input" type="email" placeholder="john@email.com" required />
                </div>
              </div>
              <div className="pd-form-group">
                <label className="pd-form-label">Phone (optional)</label>
                <input className="pd-form-input" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="pd-form-group">
                <label className="pd-form-label">Message</label>
                <textarea
                  className="pd-form-input pd-form-input--textarea"
                  rows={4}
                  defaultValue={`Hi, I'm interested in the property at ${property.location} listed at ${property.price}. Please contact me.`}
                />
              </div>
              <button type="submit" className="pd-form-submit">Send Message</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyTabs;