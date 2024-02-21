import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//componente de saludo
function Greeting() {
  return <h1>Hello Dojo!</h1>;
}
//componente de lista de tareas
function TodoList() {
  const [tasks] = useState([
    "Learn React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the dogs",
  ]);
  return (
    <div>
      <h2>Things I need to do</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Greeting />
      </div>
      <TodoList />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
