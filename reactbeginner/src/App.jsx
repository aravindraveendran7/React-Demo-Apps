import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BioPage from "./components/Biopage";
import { Variables } from "./components/Variables";
import { UsingMap } from "./components/UsingMap";
import { UseProps } from "./components/UsingProps";

function App() {
  return (
    <>
      <BioPage />
      <UseProps
        name="John Davis"
        age={18}
        hobbies={["sleeping", " ", "biking"]}
      />
      {/* <Variables /> */}
      {/* <UsingMap /> */}
      {/* <Shoppingcart /> */}
    </>
  );
}

export default App;
