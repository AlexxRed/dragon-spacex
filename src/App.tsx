import React from 'react';
import l from './light.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={l} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
