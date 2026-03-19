import "./PropertySideBar.css";
import React from "react";
import { agentData } from "../../../api/propertiesData";

const PropertySidebar = ({ property, onContact }) => {
  const facts = [
    { label: "Property Type", value: property.type },
    { label: "Bedrooms",      value: property.bedrooms },
    { label: "Bathrooms",     value: property.bathrooms },
    { label: "Living Area",   value: `${property.sqft.toLocaleString()} sqft` },
    { label: "Listing ID",    value: `#RE-${String(property.id).padStart(4, "0")}` },
  ];

  return (
    <aside className="pd-sidebar">

      {/* Price card */}
      <div className="pd-price-card">
        <div className="pd-price-card__label">Asking Price</div>
        <div className="pd-price-card__price">{property.price}</div>
        <div className="pd-price-card__sub">{property.type} · {property.location}</div>
        <div className="pd-price-card__divider" />
        <button className="pd-cta-primary"   onClick={onContact}>Schedule a Viewing</button>
        <button className="pd-cta-secondary" onClick={onContact}>Make an Offer</button>
      </div>

      {/* Agent card */}
      <div className="pd-agent-card">
        <p className="pd-agent-card__heading">Your Agent</p>
        <div className="pd-agent-card__top">
          <div className="pd-agent-card__av">{agentData.avatar}</div>
          <div>
            <div className="pd-agent-card__name">{agentData.name}</div>
            <div className="pd-agent-card__title">{agentData.title}</div>
            <div className="pd-agent-card__meta">⭐ {agentData.rating} · {agentData.deals} deals</div>
          </div>
        </div>
        <div className="pd-agent-card__btns">
          <a href={`tel:${agentData.phone}`} className="pd-agent-btn pd-agent-btn--call">
            📞 Call Now
          </a>
          <button className="pd-agent-btn pd-agent-btn--msg" onClick={onContact}>
            ✉️ Message
          </button>
        </div>
      </div>

      {/* Quick facts */}
      <div className="pd-quick-facts">
        {facts.map((f) => (
          <div key={f.label} className="pd-quick-facts__row">
            <span className="pd-quick-facts__label">{f.label}</span>
            <span className="pd-quick-facts__value">{f.value}</span>
          </div>
        ))}
      </div>

    </aside>
  );
};

export default PropertySidebar;