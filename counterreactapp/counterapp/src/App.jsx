import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const setupCounter = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <>
      <h1>React app counter:{count}</h1>
      <button onClick={setupCounter}>Increment counter:{count}</button>
    </>
  );
}

export default App;
