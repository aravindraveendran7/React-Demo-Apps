import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
let counter = 5;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "excercise daily",
    },
    {
      id: 2,
      title: "go to class",
      description: "attend cohort",
    },
    {
      id: 3,
      title: "do assignments",
      description: "practice daily",
    },
  ]);

  return (
    <>
      <button
        onClick={() =>
          setTodos([
            ...todos,
            {
              id: counter++,
              title: Math.random(),
              description: "description" + Math.random(),
            },
          ])
        }
      >
        Add ToDo
      </button>
      {todos.map((todo) => (
        <CardComponent>
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        </CardComponent>
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1
        style={{
          background: "#EDE5BD",
          padding: "10px",
          marginLeft: "50px",
          marginRight: "50px",
          borderRadius: "5px",
          border: "2px solid black",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          background: "#D3EDBD",
          padding: "10px",
          marginLeft: "50px",
          marginRight: "50px",
          borderRadius: "5px",
          border: "2px solid black",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function CardComponent({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
}

export default App;
