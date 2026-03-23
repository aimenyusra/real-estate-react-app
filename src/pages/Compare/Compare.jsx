import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/HomePage/Navbar/Navbar";
import { useFavourites } from "../../context/FavouritesContext";
import "./Compare.css";

const formatPrice = (price) =>
  price >= 1000000 ? `$${(price / 1000000).toFixed(2)}M` : `$${(price / 1000).toFixed(0)}K`;

const ROWS = [
  { label: "Price",     key: (p) => formatPrice(p.price) },
  { label: "Location",  key: (p) => p.location },
  { label: "Type",      key: (p) => p.type },
  { label: "Bedrooms",  key: (p) => `${p.bedrooms} bedrooms` },
  { label: "Bathrooms", key: (p) => `${p.bathrooms} bathrooms` },
  { label: "Area",      key: (p) => `${p.sqft.toLocaleString()} sqft` },
];

const Compare = () => {
  const navigate = useNavigate();
  const { compareList, toggleCompare, clearCompare, toggleFavourite, isFavourite } = useFavourites();

  return (
    <>
      <Navbar />
      <div className="cmp-page">

        {/* Hero */}
        <div className="cmp-hero">
          <div className="cmp-hero__inner">
            <p className="cmp-hero__eyebrow">◆ Side by Side</p>
            <h1 className="cmp-hero__title">Compare <em>Properties</em></h1>
            <p className="cmp-hero__sub">
              {compareList.length === 0
                ? "Add up to 3 properties to compare them"
                : `Comparing ${compareList.length} of 3 properties`}
            </p>
          </div>
        </div>

        <div className="cmp-body">

          {compareList.length === 0 ? (
            <div className="cmp-empty">
              <div className="cmp-empty__icon">⚖️</div>
              <h2 className="cmp-empty__title">Nothing to Compare</h2>
              <p className="cmp-empty__sub">
                Go to any property and click <strong>"⊕ Compare"</strong> to add it here. You can compare up to 3 at a time.
              </p>
              <button className="cmp-empty__btn" onClick={() => navigate("/properties")}>
                Browse Properties
              </button>
            </div>
          ) : (
            <>
              {/* Toolbar */}
              <div className="cmp-toolbar">
                <p className="cmp-toolbar__info">
                  <strong>{compareList.length}/3</strong> properties selected
                </p>
                <div className="cmp-toolbar__actions">
                  <button className="cmp-toolbar__add" onClick={() => navigate("/properties")}>
                    + Add More
                  </button>
                  <button className="cmp-toolbar__clear" onClick={clearCompare}>
                    Clear All
                  </button>
                </div>
              </div>

              {/* Compare table */}
              <div className="cmp-table-wrap">
                <table className="cmp-table">
                  <thead>
                    <tr>
                      <th className="cmp-table__row-label" />
                      {compareList.map((p) => (
                        <th key={p.id} className="cmp-table__prop-head">
                          <div className="cmp-prop-head">
                            <div className="cmp-prop-head__img-wrap">
                              <img src={p.image} alt={p.location} className="cmp-prop-head__img" />
                              <button
                                className="cmp-prop-head__remove"
                                onClick={() => toggleCompare(p)}
                                title="Remove from compare"
                              >
                                ✕
                              </button>
                            </div>
                            <div className="cmp-prop-head__body">
                              <div className="cmp-prop-head__price">{formatPrice(p.price)}</div>
                              <div className="cmp-prop-head__loc">📍 {p.location}</div>
                              <div className="cmp-prop-head__btns">
                                <button
                                  className={`cmp-prop-head__fav ${isFavourite(p.id) ? "cmp-prop-head__fav--active" : ""}`}
                                  onClick={() => toggleFavourite(p)}
                                >
                                  {isFavourite(p.id) ? "❤️ Saved" : "🤍 Save"}
                                </button>
                                <button
                                  className="cmp-prop-head__view"
                                  onClick={() => navigate(`/properties/${p.id}`)}
                                >
                                  View →
                                </button>
                              </div>
                            </div>
                          </div>
                        </th>
                      ))}

                      {/* Empty slots */}
                      {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                        <th key={`empty-${i}`} className="cmp-table__prop-head">
                          <div className="cmp-empty-slot" onClick={() => navigate("/properties")}>
                            <div className="cmp-empty-slot__icon">+</div>
                            <div className="cmp-empty-slot__label">Add Property</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {ROWS.map((row) => (
                      <tr key={row.label} className="cmp-table__row">
                        <td className="cmp-table__row-label">{row.label}</td>
                        {compareList.map((p) => (
                          <td key={p.id} className="cmp-table__cell">
                            {row.key(p)}
                          </td>
                        ))}
                        {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                          <td key={`empty-cell-${i}`} className="cmp-table__cell cmp-table__cell--empty">—</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards view (mobile) */}
              <div className="cmp-cards">
                {compareList.map((p) => (
                  <div key={p.id} className="cmp-card">
                    <div className="cmp-card__img-wrap">
                      <img src={p.image} alt={p.location} className="cmp-card__img" />
                      <button className="cmp-card__remove" onClick={() => toggleCompare(p)}>✕</button>
                    </div>
                    <div className="cmp-card__body">
                      <div className="cmp-card__price">{formatPrice(p.price)}</div>
                      <div className="cmp-card__loc">📍 {p.location}</div>
                      {ROWS.slice(2).map((row) => (
                        <div key={row.label} className="cmp-card__row">
                          <span className="cmp-card__row-label">{row.label}</span>
                          <span className="cmp-card__row-val">{row.key(p)}</span>
                        </div>
                      ))}
                      <button className="cmp-card__view" onClick={() => navigate(`/properties/${p.id}`)}>
                        View Property →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Compare;