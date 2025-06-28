import { useState, useEffect } from "react";
import { Link } from "react-router";

function Products({ filter, setError }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let url = "https://fakestoreapi.com/products";

        if (filter !== "") {
          url = `https://fakestoreapi.com/products/category/${filter}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw Error(
            "We were unable to load the products, please try again in a moment"
          );
        }

        const date = await response.json();
        setProducts(date);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchProducts();
  }, [filter]);

  const productsList = products.map((product) => (
    <Link className="product" key={product.id} to={`/product/${product.id}`}>
      <img className="product-image" src={product.image} />
      <p className="product-title">{product.title}</p>
    </Link>
  ));

  return (
    <>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div id="products-list">{productsList}</div>
      )}
    </>
  );
}

export default Products;
