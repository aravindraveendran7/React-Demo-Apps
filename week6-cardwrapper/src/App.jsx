import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardWrapper>Hello There</CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </div>
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
        fontFamily: "sans-serif",
        fontWeight: "bold",
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
