import { useState, useEffect, useContext } from "react";
import { AppStatusContext } from "../contexts/AppStatusContext";

export default function useFetchOne(url) {
  const [data, setData] = useState([]);
  const { setLoading, setError } = useContext(AppStatusContext);

  useEffect(() => {
    setData([]);
    setLoading(true);

    async function fetchOne() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw Error(
            "We were unable to load the products, please try again in a moment"
          );
        }

        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchOne();
  }, [url]);

  return { data };
}
