import { useState } from "react";
import CategoriesTabs from "./components/CategoriesTabs.jsx";
import Products from "./components/Products.jsx";

function App() {
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");

  function selectCategory(category) {
    setFilter((prev) => (prev === category ? "" : category));
  }

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <h1>Products</h1>
          <CategoriesTabs
            filter={filter}
            setFilter={selectCategory}
            setError={setError}
          />
          <Products filter={filter} setError={setError} />
        </>
      )}
    </>
  );
}

export default App;
