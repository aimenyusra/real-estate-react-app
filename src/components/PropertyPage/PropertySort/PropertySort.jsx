import React, { useState } from "react";
import "./PropertySort.css";

const SORT_OPTIONS = [
  { value: "newest",     label: "Newest First"         },
  { value: "price_asc",  label: "Price: Low to High"   },
  { value: "price_desc", label: "Price: High to Low"   },
  { value: "sqft_desc",  label: "Largest First"        },
  { value: "beds_desc",  label: "Most Bedrooms"        },
];

const PropertySort = ({ total, onSort, onViewChange, view }) => {
  const [open,   setOpen]   = useState(false);
  const [active, setActive] = useState(SORT_OPTIONS[0]);

  const select = (opt) => {
    setActive(opt);
    onSort(opt.value);
    setOpen(false);
  };

  return (
    <div className="psort">
      <p className="psort__count">
        <strong>{total}</strong> {total === 1 ? "property" : "properties"} found
      </p>

      <div className="psort__right">
        {/* View toggle */}
        <div className="psort__view">
          <button
            className={`psort__view-btn ${view === "grid" ? "psort__view-btn--active" : ""}`}
            onClick={() => onViewChange("grid")}
            aria-label="Grid view"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
              <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
              <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
              <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
            </svg>
          </button>
          <button
            className={`psort__view-btn ${view === "list" ? "psort__view-btn--active" : ""}`}
            onClick={() => onViewChange("list")}
            aria-label="List view"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="6"  x2="21" y2="6"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Sort dropdown */}
        <div className="psort__dropdown-wrap">
          <button className="psort__dropdown-btn" onClick={() => setOpen((o) => !o)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {active.label}
            <svg
              className={`psort__chevron ${open ? "psort__chevron--open" : ""}`}
              width="12" height="12" viewBox="0 0 24 24" fill="none"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {open && (
            <div className="psort__menu">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  className={`psort__menu-item ${active.value === opt.value ? "psort__menu-item--active" : ""}`}
                  onClick={() => select(opt)}
                >
                  {opt.label}
                  {active.value === opt.value && <span>✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertySort;