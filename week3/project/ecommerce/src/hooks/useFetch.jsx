import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setData([]);
    setError("");

    async function fetchOne() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw Error(`Couldn't fetch the data: ${response.status}`);
        }

        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        setError(error.message);
      }
    }

    async function fetchMany() {
      try {
        url.forEach(async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );

          if (!response.ok) {
            throw Error(`Couldn't fetch the data: ${response.status}`);
          }

          const responseData = await response.json();

          setData((prev) => {
            const findProduct = prev.find(
              (product) => product.id === responseData.id
            );

            if (findProduct) {
              return [...prev];
            } else {
              return [...prev, responseData];
            }
          });
        });
      } catch (error) {
        setError(error.message);
      }
    }

    if (typeof url === "string") {
      fetchOne();
    } else {
      fetchMany();
    }
  }, [url]);

  return { data, error };
}
