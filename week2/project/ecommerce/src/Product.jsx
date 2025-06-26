import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "./components/Header.jsx";

function Product() {
  let params = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );

        if (!response.ok) {
          throw Error(`Couldn't fetch the data: ${response.status}`);
        }

        const date = await response.json();
        setProduct(date);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchProduct();
  }, []);

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Header title={product.title} />
          <div className="product-container">
            <img className="product-image" src={product.image} />
            <div className="product-info">
              <div>
                Price: €{product.price} || Rating: ⭐{product.rating.rate} (
                {product.rating.count})
              </div>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
