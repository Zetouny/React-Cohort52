import useFetchOne from "../hooks/useFetchOne";

export default function CategoriesTabs({ filter, setFilter }) {
  const { data } = useFetchOne("https://fakestoreapi.com/products/categories");

  return (
    <div className="categories-tabs">
      {data.map((category) => (
        <button
          key={category}
          className={`category-button ${
            filter === category ? "active-tab" : ""
          }`}
          onClick={() => setFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
