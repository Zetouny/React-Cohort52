import { createContext, useState } from "react";

export const FavoriteContext = createContext([]);

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  function manageFavorite(id) {
    if (favorite.includes(id)) {
      setFavorite((prev) => prev.filter((item) => item !== id));
    } else {
      setFavorite((prev) => [...prev, id]);
    }
  }

  return (
    <FavoriteContext value={{ favorite, manageFavorite }}>
      {children}
    </FavoriteContext>
  );
}
