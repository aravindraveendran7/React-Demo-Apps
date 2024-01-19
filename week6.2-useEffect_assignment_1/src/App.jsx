import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <>
      <div>
        <Todo id={"11"}></Todo>
      </div>
    </>
  );
}

//while using axios to get the response we use response.data.The data after it is the root node of the json object recieved.
function Todo({ id }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      setUser(response.data.data);
    });
  }, []);
  return (
    <div>
      <h1>{user.email}</h1>
      <h2>{user.last_name}</h2>
    </div>
  );
}

export default App;
