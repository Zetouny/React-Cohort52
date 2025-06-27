import "./App.css";
import useWindowSize from "./useWindowSize.jsx";
import { BeanHead } from "beanheads";

function App() {
  const windowSize = useWindowSize();

  const Small = () => (
    <BeanHead
      body="breasts"
      circleColor="blue"
      eyebrows="raised"
      eyes="dizzy"
      faceMask={false}
      faceMaskColor="green"
      facialHair="none"
      hair="bun"
      hairColor="brown"
      lashes={false}
      lipColor="purple"
      mask={false}
      mouth="sad"
      skinTone="brown"
    />
  );

  const Medium = () => (
    <BeanHead
      body="chest"
      circleColor="blue"
      eyebrows="concerned"
      eyes="happy"
      faceMask={false}
      faceMaskColor="black"
      facialHair="mediumBeard"
      hair="bob"
      hairColor="blonde"
      lashes={false}
      lipColor="red"
      mask={false}
      mouth="openSmile"
      skinTone="yellow"
    />
  );

  const Big = () => (
    <BeanHead
      body="chest"
      circleColor="blue"
      eyebrows="raised"
      eyes="heart"
      faceMask={false}
      faceMaskColor="blue"
      facialHair="none3"
      hat="none3"
      hatColor="blue"
      lashes={false}
      lipColor="turqoise"
      mask
      mouth="openSmile"
      skinTone="light"
    />
  );

  return (
    <>
      <h1>
        {windowSize.width}px / {windowSize.height}px
      </h1>
      {windowSize.width < 700 ? (
        <>
          <h2>
            You are on a <b>small</b> screen
          </h2>
          <Small />
        </>
      ) : windowSize.width > 1000 ? (
        <>
          <h2>
            You are on a <b>big</b> screen
          </h2>
          <Big />
        </>
      ) : (
        <>
          <h2>
            You are on a <b>medium</b> screen
          </h2>
          <Medium />
        </>
      )}
    </>
  );
}

export default App;
