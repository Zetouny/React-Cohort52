import { useState, useEffect } from "react";
import useFetchOne from "../hooks/useFetchOne";

function CategoriesTabs({ filter, setFilter }) {
  const [categories, setCategories] = useState([]);

  const { data } = useFetchOne("https://fakestoreapi.com/products/categories");

  useEffect(() => {
    setCategories(data);
  }, [data]);

  const categoriesList = categories.map((category) => {
    return (
      <button
        key={category}
        className={`category-button ${filter === category ? "active-tab" : ""}`}
        onClick={() => setFilter(category)}
      >
        {category}
      </button>
    );
  });

  return <div className="categories-tabs">{categoriesList}</div>;
}

export default CategoriesTabs;
