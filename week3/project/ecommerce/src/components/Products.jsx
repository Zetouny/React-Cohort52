import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch.jsx";

function Products({ filter, setError }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let url = "https://fakestoreapi.com/products";

  if (filter != "") {
    url = `https://fakestoreapi.com/products/category/${filter}`;
  }

  const { data, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setLoading(false);
      setProducts(data);
    } else {
      setLoading(true);
    }
    if (error) {
      setLoading(false);
      setError(error);
    }
  }, [data, error, setError]);

  return (
    <>
      {loading ? (
        <div>Loading ...</div>
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
