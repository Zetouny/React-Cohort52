import "./App.css";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return hobbies.map((hobby) => <Hobby prop={hobby} />);
}

function Hobby({ prop }) {
  return <h1>{prop}</h1>;
}

function App() {
  return <HobbyList />;
}

export default App;
