import "./SimilarProperties.css";
import React from "react";
import { propertiesData } from "../../../api/propertiesData";

const SimilarProperties = ({ currentId }) => {
  const similar = propertiesData.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <section className="pd-similar">
      <p className="pd-similar__eyebrow">You May Also Like</p>
      <h2 className="pd-similar__title">Similar Properties</h2>
      <div className="pd-similar__grid">
        {similar.map((p) => (
          <a key={p.id} href={`/property/${p.id}`} className="pd-similar-card">
            <div className="pd-similar-card__img-wrap">
              <img src={p.image} alt={p.location} />
            </div>
            <div className="pd-similar-card__body">
              <div className="pd-similar-card__price">{p.price}</div>
              <div className="pd-similar-card__loc">📍 {p.location}</div>
              <div className="pd-similar-card__specs">
                🛏 {p.bedrooms} &nbsp;·&nbsp; 🚿 {p.bathrooms}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SimilarProperties;