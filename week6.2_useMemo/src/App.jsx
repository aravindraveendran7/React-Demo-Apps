import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputValue, setSum] = useState(100);
  const [count, setCount] = useState(0);

  let counter = 0;
  for (let i = 1; i <= inputValue; i++) {
    counter = counter + i;
  }

  return (
    <>
      <input
        onChange={(event) => setSum(event.target.value)}
        type="text"
        placeholder="Number"
      ></input>{" "}
      <br />
      sum is {counter}
      <br />
      <button onClick={() => setCount(count + 1)}>Count({count})</button>
    </>
  );
}

export default App;
