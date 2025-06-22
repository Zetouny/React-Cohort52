import categories from "../assets/fake-data/all-categories.js";

function CategoriesTabs({ filter, setFilter }) {
  const categoriesList = categories.map((category) => {
    const filterName = category.slice(6);
    return (
      <button
        key={category}
        className={`category-button ${
          filter === filterName ? "active-tab" : ""
        }`}
        onClick={() => setFilter(filterName)}
      >
        {category}
      </button>
    );
  });

  return <div className="categories-tabs">{categoriesList}</div>;
}

export default CategoriesTabs;
