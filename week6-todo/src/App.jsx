import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "excercise daily",
    },
    {
      title: "go to class",
      description: "attend cohort",
    },
    {
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
              title: Math.random(),
              description: "description" + Math.random(),
            },
          ])
        }
      >
        Add ToDo
      </button>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description}></Todo>
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default App;
