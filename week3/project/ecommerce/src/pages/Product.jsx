import { useContext } from "react";
import { useParams } from "react-router";
import useFetchOne from "../hooks/useFetchOne.jsx";
import { FavoriteContext } from "../contexts/FavoriteContext.jsx";
import heartRegular from "/src/assets/heart-regular.svg";
import heartSolid from "/src/assets/heart-solid.svg";
import { AppStatusContext } from "../contexts/AppStatusContext.jsx";

export default function Product() {
  const params = useParams();

  const { data } = useFetchOne(
    `https://fakestoreapi.com/products/${params.id}`
  );

  const { loading, error } = useContext(AppStatusContext);
  const { favorite, manageFavorite } = useContext(FavoriteContext);
  const isFavorite = favorite.includes(data?.id);

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

  return (
    <>
      <h1 className="page-title">{data?.title}</h1>
      <div className="product-container">
        <img className="product-image" src={data?.image} />
        <div className="product-info">
          <img
            className="product-fav-button"
            src={isFavorite ? heartSolid : heartRegular}
            onClick={() => manageFavorite(data?.id)}
          />
          <div>
            Price: €{data?.price} || Rating: ⭐{data?.rating?.rate} (
            {data?.rating?.count})
          </div>
          <p className="product-description">{data?.description}</p>
        </div>
      </div>
    </>
  );
}
