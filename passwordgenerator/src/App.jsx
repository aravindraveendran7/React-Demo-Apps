import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="rounded-md w-1/2 ml-80 mt-3 p-8 bg-zinc-300  shadow-md">
        <h1 className="font-serif font-bold text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-3">
          <input
            type="text"
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
          ></input>
          <button className="bg-blue-500 w-20">Copy</button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            className="cursor-pointer border-solid"
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label htmlFor="Length" className="text-black">
            Length:{length}
          </label>

          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            className="ml-2 cursor-pointer"
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="Numbers" className="text-black">
            Numbers
          </label>
          <input
            type="checkbox"
            defaultChecked={charactersAllowed}
            className="ml-2 cursor-pointer"
            onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="Characters" className="text-black">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
