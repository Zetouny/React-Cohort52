import { useContext, useState } from "react";
import CategoriesTabs from "../components/CategoriesTabs.jsx";
import ProductsList from "../components/ProductsList.jsx";
import { AppStatusContext } from "../contexts/AppStatusContext.jsx";

export default function Home() {
  const [filter, setFilter] = useState("");
  const { error } = useContext(AppStatusContext);

  function selectCategory(category) {
    setFilter((prev) => (prev === category ? "" : category));
  }

  if (error) {
    return (
      <div className="status-error">
        <b>Unexpected Error:</b> <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="page-title">Products</h1>
      <CategoriesTabs filter={filter} setFilter={selectCategory} />
      <ProductsList filter={filter} />
    </>
  );
}
