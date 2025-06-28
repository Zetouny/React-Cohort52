import { useState } from "react";
import Header from "./components/Header.jsx";
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
          <Header title={"Products"} />
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
