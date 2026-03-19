import "./PropertyGallery.css";
import React, { useState } from "react";

const PropertyGallery = ({ images, badge }) => {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveImg((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="pd-hero">
      <div className="pd-hero__img-wrap">
        <img
          className="pd-hero__img"
          src={images[activeImg]}
          alt="Property"
        />

        {badge && <span className="pd-hero__badge">{badge}</span>}

        {images.length > 1 && (
          <>
            <button className="pd-hero__arrow pd-hero__arrow--prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="pd-hero__arrow pd-hero__arrow--next" onClick={next} aria-label="Next">›</button>
            <div className="pd-hero__counter">{activeImg + 1} / {images.length}</div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="pd-hero__thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`pd-hero__thumb ${i === activeImg ? "pd-hero__thumb--active" : ""}`}
              onClick={() => setActiveImg(i)}
              aria-label={`Image ${i + 1}`}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;