import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <CardWrapper>Hello Hi there</CardWrapper>
      <CardWrapper>Hello,am the second </CardWrapper>
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

export default App;
