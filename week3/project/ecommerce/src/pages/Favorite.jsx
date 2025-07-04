import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext.jsx";
import useFetchMany from "../hooks/useFetchMany.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { AppStatusContext } from "../contexts/AppStatusContext.jsx";

export default function Favorite() {
  const { loading, error } = useContext(AppStatusContext);
  const { favorite } = useContext(FavoriteContext);
  const { data } = useFetchMany(favorite);

  if (error) {
    return (
      <div className="status-error">
        <b>Unexpected Error:</b> <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return <div className="status-loading">Loading ...</div>;
  }

  if (data.length === 0) {
    return "You haven't chosen any favorites yet!";
  }

  return (
    <>
      <h1 className="page-title">Favorites</h1>
      <div id="products-list">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
