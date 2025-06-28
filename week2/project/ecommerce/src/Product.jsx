import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Product() {
  const params = useParams();

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
          throw Error(
            "We were unable to load the products, please try again in a moment"
          );
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchProduct();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1>{product.title}</h1>
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
  );
}

export default Product;
