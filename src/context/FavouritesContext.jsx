import React, { createContext, useContext, useState, useEffect } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    try {
      const stored = localStorage.getItem("prop_favourites");
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  const [compareList, setCompareList] = useState(() => {
    try {
      const stored = localStorage.getItem("prop_compare");
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("prop_favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("prop_compare", JSON.stringify(compareList));
  }, [compareList]);

  const toggleFavourite = (property) => {
    setFavourites((prev) => {
      const exists = prev.find((p) => p.id === property.id);
      return exists ? prev.filter((p) => p.id !== property.id) : [...prev, property];
    });
  };

  const isFavourite  = (id) => favourites.some((p) => p.id === id);

  const toggleCompare = (property) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === property.id);
      if (exists) return prev.filter((p) => p.id !== property.id);
      if (prev.length >= 3) return prev;
      return [...prev, property];
    });
  };

  const isInCompare  = (id) => compareList.some((p) => p.id === id);
  const clearCompare = ()   => setCompareList([]);

  return (
    <FavouritesContext.Provider value={{
      favourites, toggleFavourite, isFavourite,
      compareList, toggleCompare, isInCompare, clearCompare,
    }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);