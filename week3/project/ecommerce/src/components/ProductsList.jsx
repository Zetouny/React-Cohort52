import { useContext } from "react";
import ProductCard from "./ProductCard.jsx";
import useFetchOne from "../hooks/useFetchOne.jsx";
import { AppStatusContext } from "../contexts/AppStatusContext.jsx";

export default function Products({ filter }) {
  const { loading } = useContext(AppStatusContext);

  let url = "https://fakestoreapi.com/products";

  if (filter !== "") {
    url = `https://fakestoreapi.com/products/category/${filter}`;
  }

  const { data } = useFetchOne(url);

  if (loading) {
    return <div className="status-loading">Loading ...</div>;
  }

  if (data.length === 0) {
    return "No products found";
  }

  return (
    <div id="products-list">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
