import { Link } from "react-router";
import heartRegular from "/src/assets/heart-regular.svg";
import heartSolid from "/src/assets/heart-solid.svg";
import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";

export default function ProductCard({ product }) {
  const { favorite, manageFavorite } = useContext(FavoriteContext);
  const isFavorite = favorite.includes(product.id);

  return (
    <Link className="product" to={`/product/${product.id}`}>
      <img
        className="product-fav-button"
        src={isFavorite ? heartSolid : heartRegular}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          manageFavorite(product.id);
        }}
      />
      <img className="product-image" src={product.image} />
      <p className="product-title">{product.title}</p>
      <p className="product-price">€{product.price}</p>
    </Link>
  );
}
