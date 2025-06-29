import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard.jsx";
import useFetchOne from "../hooks/useFetchOne.jsx";
import { AppStatusContext } from "../contexts/AppStatusContext.jsx";

function Products({ filter }) {
  const [products, setProducts] = useState([]);
  const { loading } = useContext(AppStatusContext);

  let url = "https://fakestoreapi.com/products";

  if (filter !== "") {
    url = `https://fakestoreapi.com/products/category/${filter}`;
  }

  const { data } = useFetchOne(url);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <>
      {loading ? (
        <div className="status-loading">Loading ...</div>
      ) : (
        <div id="products-list">
          {data.length > 0
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : "No products found"}
        </div>
      )}
    </>
  );
}

export default Products;
