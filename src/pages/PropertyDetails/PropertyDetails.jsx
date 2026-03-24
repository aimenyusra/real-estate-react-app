import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/HomePage/Navbar/Navbar";
import PropertyGallery   from "../../components/PropertyDetailsPage/PropertyGallery/PropertyGallery";
import PropertyTabs      from "../../components/PropertyDetailsPage/PropertyTabs/PropertyTabs";
import PropertySidebar   from "../../components/PropertyDetailsPage/PropertySideBar/PropertySideBar";
import SimilarProperties from "../../components/PropertyDetailsPage/SimilarProperties/SimilarProperties";
import { propertiesData } from  "../../api/propertiesData"
import "./base.css";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [saved,  setSaved]  = useState(false);
  const [copied, setCopied] = useState(false);

  const property = propertiesData.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="pd-not-found">
          <div className="pd-not-found__icon">🏠</div>
          <h2 className="pd-not-found__title">Property Not Found</h2>
          <p className="pd-not-found__sub">This property does not exist or has been removed.</p>
          <a href="/" className="pd-not-found__btn">Back to Listings</a>
        </div>
      </>
    );
  }

  const allImages = property.images || [property.image];

  const handleShare = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContact = () => {
    document.getElementById("pd-tabs-anchor")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="pd-page">

        {/* Breadcrumb */}
        <div className="pd-bar">
          <div className="pd-bar__inner">
            <a href="/" className="pd-bar__back">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Listings
            </a>
            <nav className="pd-bar__crumbs" aria-label="Breadcrumb">
              <a href="/"         className="pd-bar__crumb">Home</a>
              <span className="pd-bar__sep">›</span>
              <a href="/listings" className="pd-bar__crumb">Properties</a>
              <span className="pd-bar__sep">›</span>
              <span className="pd-bar__crumb pd-bar__crumb--active">{property.location}</span>
            </nav>
          </div>
        </div>

        {/* Main grid */}
        <div className="pd-body">

          {/* Left column */}
          <div className="pd-main">
            <PropertyGallery images={allImages} badge={property.badge} />

            {/* Title + actions */}
            <div className="pd-title-row">
              <div>
                <span className="pd-type-badge">{property.type}</span>
                <h1 className="pd-title">{property.price}</h1>
                <p className="pd-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {property.location}
                </p>
              </div>
              <div className="pd-title-row__actions">
                <button
                  className={`pd-action-btn1 ${saved ? "pd-action-btn--active" : ""}`}
                  onClick={() => setSaved((s) => !s)}
                >
                  {saved ? "❤️ Saved" : "🤍 Save"}
                </button>
                <button className="pd-action-btn2" onClick={handleShare}>
                  {copied ? "✓ Copied!" : "🔗 Share"}
                </button>
              </div>
            </div>

            {/* Stats strip */}
            <div className="pd-stats">
              {[
                { icon: "🛏", value: property.bedrooms,                        label: "Bedrooms"  },
                { icon: "🚿", value: property.bathrooms,                       label: "Bathrooms" },
                { icon: "📐", value: `${property.sqft.toLocaleString()} sqft`, label: "Area"      },
                { icon: "🏠", value: property.type,                            label: "Type"      },
              ].map((s) => (
                <div key={s.label} className="pd-stat">
                  <span className="pd-stat__icon">{s.icon}</span>
                  <span className="pd-stat__val">{s.value}</span>
                  <span className="pd-stat__lbl">{s.label}</span>
                </div>
              ))}
            </div>

            <div id="pd-tabs-anchor" />
            <PropertyTabs property={property} />
          </div>

          {/* Right sidebar */}
          <PropertySidebar property={property} onContact={handleContact} />
        </div>

        <SimilarProperties currentId={property.id} />
      </div>
    </>
  );
};

export default PropertyDetails;  