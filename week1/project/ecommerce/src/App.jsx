import { useState } from "react";
import Header from "./components/Header.jsx";
import CategoriesTabs from "./components/CategoriesTabs.jsx";
import Products from "./components/Products.jsx";

function App() {
  const [filter, setFilter] = useState("");

  function selectCategory(category) {
    setFilter((prev) => (prev === category ? "" : category));
  }

  return (
    <>
      <Header title={"Products"} />
      <CategoriesTabs filter={filter} setFilter={selectCategory} />
      <Products filter={filter} />
    </>
  );
}

export default App;
