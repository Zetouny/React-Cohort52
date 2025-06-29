import { useState, useEffect, useContext } from "react";
import { AppStatusContext } from "../contexts/AppStatusContext";

export default function useFetchMany(productsIds) {
  const [data, setData] = useState([]);
  const { setLoading, setError } = useContext(AppStatusContext);

  useEffect(() => {
    setData([]);
    setLoading(true);

    async function fetchMany() {
      try {
        const fetchProducts = productsIds.map(async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );

          if (!response.ok) {
            throw Error(
              "We were unable to load the products, please try again in a moment"
            );
          }

          return await response.json();
        });

        const results = await Promise.all(fetchProducts);
        setData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMany();
  }, [productsIds]);

  return { data };
}
