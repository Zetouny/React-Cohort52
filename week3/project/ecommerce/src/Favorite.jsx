import { useEffect, useContext } from "react";
import { FavoriteContext } from "./contexts/FavoriteContext";
import useFetch from "./hooks/useFetch";
import ProductCard from "./components/ProductCard.jsx";

export default function Favorite() {
  const { favorite } = useContext(FavoriteContext);
  const { data } = useFetch(favorite);

  useEffect(() => {}, [favorite, data]);

  return (
    <div id="products-list">
      {data.length > 0
        ? data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : "You haven't chosen any favorites yet!"}
    </div>
  );
}
