import logo from './logo.svg';
import './App.css';

function App() {

  function handleClick() {
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
