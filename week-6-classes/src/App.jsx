import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <HeaderWithComponent />
      <Header title="This component wont re-render"></Header>
    </>
  );
}

function HeaderWithComponent() {
  const [headerTitle, setheaderTitle] = useState("My Name is...");
  return (
    <>
      <button
        onClick={() => setheaderTitle(`My new component ${Math.random()}`)}
      >
        click me to see the change
      </button>
      <Header title={headerTitle} />
    </>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}
export default App;
