import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Products({ filter, setError }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let url = "https://fakestoreapi.com/products";

        if (filter != "") {
          url = `https://fakestoreapi.com/products/category/${filter}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw Error(`Couldn't fetch the data: ${response.status}`);
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
    <NavLink className="product" key={product.id} to={`/product/${product.id}`}>
      <img className="product-image" src={product.image} />
      <p className="product-title">{product.title}</p>
    </NavLink>
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
