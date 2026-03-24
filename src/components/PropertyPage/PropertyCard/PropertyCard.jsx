import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavourites } from "../../../context/FavouritesContext";
import "./PropertyCard.css";

const formatPrice = (price) =>
  price >= 1000000
    ? `$${(price / 1000000).toFixed(2)}M`
    : `$${(price / 1000).toFixed(0)}K`;

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const { isFavourite, toggleFavourite, isInCompare, toggleCompare } = useFavourites();

  const saved    = isFavourite(property.id);
  const compared = isInCompare(property.id);

  return (
    <div className="pcard" onClick={() => navigate(`/properties/${property.id}`)}>
      <div className="pcard__img-wrap">
        <img className="pcard__img" src={property.image} alt={property.location} loading="lazy" />
        {property.badge && <span className="pcard__badge">{property.badge}</span>}

        {/* ── Heart / Save button ── */}
        <button
          className={`pcard__save ${saved ? "pcard__save--active" : ""}`}
          onClick={(e) => { e.stopPropagation(); toggleFavourite(property); }}
          aria-label={saved ? "Remove from favourites" : "Add to favourites"}
        >
          {saved ? "❤️" : "🤍"}
        </button>

        <div className="pcard__overlay" />
      </div>

      <div className="pcard__body">
        <div className="pcard__price">{formatPrice(property.price)}</div>
        <p className="pcard__location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              stroke="currentColor" strokeWidth="1.8"/>
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
          </svg>
          {property.location}
        </p>

        <div className="pcard__divider" />

        <div className="pcard__specs">
          <span className="pcard__spec">🛏 {property.bedrooms} bd</span>
          <span className="pcard__spec">🚿 {property.bathrooms} ba</span>
          <span className="pcard__spec">📐 {property.sqft.toLocaleString()} sqft</span>
        </div>

        <div className="pcard__footer">
          <span className="pcard__type">{property.type}</span>
          <div className="pcard__actions">

            {/* ── Compare button ── */}
            <button
              className={`pcard__compare-btn ${compared ? "pcard__compare-btn--active" : ""}`}
              onClick={(e) => { e.stopPropagation(); toggleCompare(property); }}
              title={compared ? "Remove from compare" : "Add to compare"}
            >
              {compared ? "⊖ Compare" : "⊕ Compare"}
            </button>

            {/* ── View button ── */}
            <button
              className="pcard__cta-btn"
              onClick={(e) => { e.stopPropagation(); navigate(`/properties/${property.id}`); }}
            >
              View →
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;