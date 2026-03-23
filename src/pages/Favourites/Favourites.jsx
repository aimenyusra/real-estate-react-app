import React, { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyPage/PropertyCard/PropertyCard";
import Navbar from "../../components/HomePage/Navbar/Navbar";

function FavoritesPage() {

  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {

    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);

  };



  useEffect(() => {

    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);

    return () =>
      window.removeEventListener("favoritesUpdated", loadFavorites);

  }, []);



  return (
    <>
      <Navbar />

      <div style={{ padding: "80px" }}>

        <h1 style={{fontSize:"36px" , textAlign:"center"}}>My Favorite Properties ❤️</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          {favorites.length > 0 ? (

            favorites.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))

          ) : (

            <p>No favorite properties yet.</p>

          )}

        </div>

      </div>
    </>
  );
}

export default FavoritesPage;