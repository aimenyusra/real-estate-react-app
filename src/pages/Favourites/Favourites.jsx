import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/HomePage/Navbar/Navbar";
import { useFavourites } from "../../context/FavouritesContext";
import "./Favourites.css";

const formatPrice = (price) =>
  price >= 1000000 ? `$${(price / 1000000).toFixed(2)}M` : `$${(price / 1000).toFixed(0)}K`;

const Favourites = () => {
  const navigate = useNavigate();
  const { favourites, toggleFavourite, isFavourite, toggleCompare, isInCompare } = useFavourites();

  return (
    <>
      <Navbar />
      <div className="fav-page">

        {/* Hero */}
        <div className="fav-hero">
          <div className="fav-hero__inner">
            <p className="fav-hero__eyebrow">◆ Your Collection</p>
            <h1 className="fav-hero__title">Saved <em>Properties</em></h1>
            <p className="fav-hero__sub">
              {favourites.length === 0
                ? "You haven't saved any properties yet"
                : `${favourites.length} ${favourites.length === 1 ? "property" : "properties"} saved`}
            </p>
          </div>
        </div>

        <div className="fav-body">
          {favourites.length === 0 ? (
            <div className="fav-empty">
              <div className="fav-empty__icon">🤍</div>
              <h2 className="fav-empty__title">No Saved Properties</h2>
              <p className="fav-empty__sub">
                Click the heart icon on any property to save it here.
              </p>
              <button className="fav-empty__btn" onClick={() => navigate("/properties")}>
                Browse Properties
              </button>
            </div>
          ) : (
            <>
              <div className="fav-toolbar">
                <p className="fav-toolbar__count">
                  <strong>{favourites.length}</strong> saved {favourites.length === 1 ? "property" : "properties"}
                </p>
                <button
                  className="fav-toolbar__browse"
                  onClick={() => navigate("/properties")}
                >
                  + Browse More
                </button>
              </div>

              <div className="fav-grid">
                {favourites.map((property) => {
                  const saved    = isFavourite(property.id);
                  const compared = isInCompare(property.id);
                  return (
                    <div
                      key={property.id}
                      className="fav-card"
                      onClick={() => navigate(`/properties/${property.id}`)}
                    >
                      <div className="fav-card__img-wrap">
                        <img src={property.image} alt={property.location} className="fav-card__img" />
                        {property.badge && (
                          <span className="fav-card__badge">{property.badge}</span>
                        )}
                        <button
                          className={`fav-card__heart ${saved ? "fav-card__heart--active" : ""}`}
                          onClick={(e) => { e.stopPropagation(); toggleFavourite(property); }}
                          title="Remove from favourites"
                        >
                          ❤️
                        </button>
                        <div className="fav-card__overlay" />
                      </div>

                      <div className="fav-card__body">
                        <div className="fav-card__price">{formatPrice(property.price)}</div>
                        <p className="fav-card__location">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                              stroke="currentColor" strokeWidth="1.8"/>
                            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
                          </svg>
                          {property.location}
                        </p>
                        <div className="fav-card__divider" />
                        <div className="fav-card__specs">
                          <span>🛏 {property.bedrooms} bd</span>
                          <span>🚿 {property.bathrooms} ba</span>
                          <span>📐 {property.sqft.toLocaleString()} sqft</span>
                        </div>
                        <div className="fav-card__footer">
                          <span className="fav-card__type">{property.type}</span>
                          <div className="fav-card__btns">
                            <button
                              className={`fav-card__compare ${compared ? "fav-card__compare--active" : ""}`}
                              onClick={(e) => { e.stopPropagation(); toggleCompare(property); }}
                            >
                              {compared ? "⊖ Compare" : "⊕ Compare"}
                            </button>
                            <button
                              className="fav-card__view"
                              onClick={(e) => { e.stopPropagation(); navigate(`/properties/${property.id}`); }}
                            >
                              View →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

    export default Favourites;