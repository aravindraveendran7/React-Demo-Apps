import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center pt-6 gap-2">
        <button
          onClick={() => setColor("red")}
          className="font bold text-lg bg-red-600 rounded-md px-0.5 py-0.5"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="font bold text-lg bg-blue-600 rounded-md px-0.5 py-0.5"
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
