import React from 'react';
import './App.css';

function App() {
  const tasks = ['Learn React', 'Learn JavaScript', 'Learn CSS'];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dojo!</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
