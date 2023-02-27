import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [newCounter, setNewCounter] = useState(0);

  function handleClick() {
    setNewCounter(newCounter + 1);
    console.log("Button Clicked");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Sheden <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick} >Click me</button>
        <p>Button clicked {newCounter} times</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
