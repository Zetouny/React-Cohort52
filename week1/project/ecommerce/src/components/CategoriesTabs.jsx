import categories from "../assets/fake-data/all-categories.js";

function CategoriesTabs({ filter, setFilter }) {
  const categoriesList = categories.map((category) => {
    const filterName = category.slice(6);
    return (
      <li
        className={filter === filterName ? "active-tab" : ""}
        onClick={() => setFilter(filterName)}
      >
        {category}
      </li>
    );
  });

  return (
    <>
      <ul className="categories-tabs">{categoriesList}</ul>
    </>
  );
}

export default CategoriesTabs;
