import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* simple passing the text */}
      <CardWrapper>Hello Hi there</CardWrapper>

      {/* passing a component as such inside the wrapper */}
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </>
  );
}

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px",
        backgroundColor: "yellow",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
}

function TextComponent() {
  return <p>Hi from the TextComponent</p>;
}

export default App;
