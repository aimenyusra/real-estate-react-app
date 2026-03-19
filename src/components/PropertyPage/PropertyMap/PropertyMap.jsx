import React, { useState } from "react";
import "./PropertyMap.css";

const formatPrice = (price) =>
  price >= 1000000 ? `$${(price / 1000000).toFixed(1)}M` : `$${(price / 1000).toFixed(0)}K`;

const PropertyMap = ({ properties }) => {
  const [selected, setSelected] = useState(null);

  // Normalize lat/lng to % position within a bounding box
  const lats = properties.map((p) => p.lat);
  const lngs = properties.map((p) => p.lng);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs), maxLng = Math.max(...lngs);

  const toPercent = (p) => ({
    x: ((p.lng - minLng) / (maxLng - minLng || 1)) * 80 + 10,
    y: 100 - (((p.lat - minLat) / (maxLat - minLat || 1)) * 80 + 10),
  });

  return (
    <div className="pmap">
      <div className="pmap__header">
        <h3 className="pmap__title">Property Map</h3>
        <span className="pmap__count">{properties.length} listings</span>
      </div>

      <div className="pmap__canvas" onClick={() => setSelected(null)}>
        {/* Grid lines for map feel */}
        <div className="pmap__grid" aria-hidden="true" />

        {properties.map((p) => {
          const pos = toPercent(p);
          const isSelected = selected?.id === p.id;
          return (
            <button
              key={p.id}
              className={`pmap__pin ${isSelected ? "pmap__pin--active" : ""}`}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onClick={(e) => { e.stopPropagation(); setSelected(isSelected ? null : p); }}
              aria-label={`${p.location} - ${formatPrice(p.price)}`}
            >
              {formatPrice(p.price)}
              {isSelected && (
                <div className="pmap__popup">
                  <img src={p.image} alt={p.location} className="pmap__popup-img" />
                  <div className="pmap__popup-body">
                    <div className="pmap__popup-price">{formatPrice(p.price)}</div>
                    <div className="pmap__popup-loc">📍 {p.location}</div>
                    <div className="pmap__popup-specs">
                      🛏 {p.bedrooms} &nbsp;·&nbsp; 🚿 {p.bathrooms} &nbsp;·&nbsp; {p.sqft.toLocaleString()} sqft
                    </div>
                    <a href={`/property/${p.id}`} className="pmap__popup-link">View Property →</a>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="pmap__footer">
        <div className="pmap__legend">
          <span className="pmap__legend-dot" /> Click a pin to preview
        </div>
        <a
          href={`https://maps.google.com/?q=United+States`}
          target="_blank"
          rel="noopener noreferrer"
          className="pmap__gmaps"
        >
          Open Google Maps →
        </a>
      </div>
    </div>
  );
};

export default PropertyMap;