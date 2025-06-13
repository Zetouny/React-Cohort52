import { useState } from "react";
import "./App.css";
function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  function increaseBy1() {
    setCount(count + 1);
  }

  function decreaseBy1() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Count counting={count}></Count>
      <h2>{feedback}</h2>
      <Button increase={increaseBy1} decrease={decreaseBy1}></Button>
    </>
  );
}

function Count({ counting }) {
  return <h1>{counting}</h1>;
}

function Button({ increase, decrease }) {
  return (
    <>
      <button onClick={increase}>Add 1!</button>
      <button onClick={decrease}>Remove 1!</button>
    </>
  );
}

function App() {
  return <Counter></Counter>;
}

export default App;
