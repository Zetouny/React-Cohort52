import { useState, useEffect } from "react";

function CategoriesTabs({ filter, setFilter, setError }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
          throw new Error(`Couldn't fetch the data: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchCategories();
  }, []);

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
