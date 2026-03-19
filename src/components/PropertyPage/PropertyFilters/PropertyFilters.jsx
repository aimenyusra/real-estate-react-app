import React, { useState } from "react";
import "./PropertyFilters.css";

const TYPES    = ["All Types", "Villa", "Apartment", "Townhouse", "Penthouse"];
const BEDS     = ["Any", "1+", "2+", "3+", "4+", "5+"];
const LOCATIONS = ["All Locations", "Los Angeles, CA", "Miami, FL", "New York, NY", "Chicago, IL", "Austin, TX", "Phoenix, AZ", "San Francisco, CA", "Denver, CO"];

const PropertyFilters = ({ onFilter }) => {
  const [type,     setType]     = useState("All Types");
  const [beds,     setBeds]     = useState("Any");
  const [location, setLocation] = useState("All Locations");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);

  const apply = () => {
    onFilter({ type, beds, location, minPrice, maxPrice });
  };

  const reset = () => {
    setType("All Types");
    setBeds("Any");
    setLocation("All Locations");
    setMinPrice(0);
    setMaxPrice(2000000);
    onFilter({});
  };

  const fmt = (v) => v >= 1000000 ? `$${(v/1000000).toFixed(1)}M` : `$${(v/1000).toFixed(0)}K`;

  return (
    <aside className="pfilters">
      <div className="pfilters__head">
        <h3 className="pfilters__title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="6"  x2="20" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Filters
        </h3>
        <button className="pfilters__reset" onClick={reset}>Reset</button>
      </div>

      {/* Location */}
      <div className="pfilters__group">
        <label className="pfilters__label">Location</label>
        <select className="pfilters__select" value={location} onChange={(e) => setLocation(e.target.value)}>
          {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>

      {/* Property Type */}
      <div className="pfilters__group">
        <label className="pfilters__label">Property Type</label>
        <div className="pfilters__pills">
          {TYPES.map((t) => (
            <button
              key={t}
              className={`pfilters__pill ${type === t ? "pfilters__pill--active" : ""}`}
              onClick={() => setType(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div className="pfilters__group">
        <label className="pfilters__label">Bedrooms</label>
        <div className="pfilters__pills">
          {BEDS.map((b) => (
            <button
              key={b}
              className={`pfilters__pill ${beds === b ? "pfilters__pill--active" : ""}`}
              onClick={() => setBeds(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="pfilters__group">
        <label className="pfilters__label">
          Price Range
          <span className="pfilters__range-val">{fmt(minPrice)} – {fmt(maxPrice)}</span>
        </label>
        <div className="pfilters__sliders">
          <input
            className="pfilters__slider"
            type="range"
            min={0}
            max={2000000}
            step={50000}
            value={minPrice}
            onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 50000))}
          />
          <input
            className="pfilters__slider"
            type="range"
            min={0}
            max={2000000}
            step={50000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 50000))}
          />
        </div>
        <div className="pfilters__range-labels">
          <span>{fmt(0)}</span>
          <span>{fmt(2000000)}</span>
        </div>
      </div>

      <button className="pfilters__apply" onClick={apply}>
        Apply Filters
      </button>
    </aside>
  );
};

export default PropertyFilters;