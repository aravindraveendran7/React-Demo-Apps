import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [buttonState, setButtonState] = useState(1);
  return (
    <>
      <div>
        <button onClick={() => setButtonState(1)}>1</button>
        <button onClick={() => setButtonState(2)}>2</button>
        <button onClick={() => setButtonState(3)}>3</button>
        <button onClick={() => setButtonState(4)}>4</button>

        <Todo id={buttonState}></Todo>
      </div>
    </>
  );
}

//while using axios to get the response we use response.data.
function Todo({ id }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setUser(response.data);
    });
  }, [id]);
  return (
    <div>
      <h1>{user.title}</h1>
      <h2>{user.description}</h2>
    </div>
  );
}

export default App;
