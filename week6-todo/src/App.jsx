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
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
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
