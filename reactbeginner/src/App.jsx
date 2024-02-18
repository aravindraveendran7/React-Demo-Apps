import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BioPage from "./components/Biopage";
import { Variables } from "./components/Variables";
import { UsingMap } from "./components/UsingMap";
import { UseProps } from "./components/UsingProps";
import { UpdatingArrayState } from "./components/UpdatingArrayState";
import { UpdatingStringState } from "./components/UpdatingStringState";
import { UpdatinObjectState } from "./components/UpdatinObjectState";
import { UpdatingArrayOfObjectsState } from "./components/UpdatingArrayOfObjectsState";
import { InputBoxSubmission } from "./components/InputBoxSubmission";
import { ResetKey } from "./components/ResetProject";

//uncomment components to see the changes.For
function App() {
  return (
    <>
      {/* <BioPage />
      <UseProps
        name="John Davis"
        age={18}
        hobbies={["sleeping", " ", "biking"]}
      /> */}
      {/* <Variables /> */}
      {/* <UsingMap /> */}
      {/* <Shoppingcart /> */}
      {/* <UpdatingArrayState /> */}
      {/* <UpdatingStringState /> */}
      {/* <UpdatinObjectState /> */}
      {/* <UpdatingArrayOfObjectsState /> */}
      {/* <InputBoxSubmission /> */}
      <ResetKey />
    </>
  );
}

export default App;
