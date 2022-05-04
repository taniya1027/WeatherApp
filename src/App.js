import React from 'react';
import './App.css';
import Forecast from "./components/forecasts/Forecast";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Weather app</h1>
      </header>
      <main><Forecast/></main>
      <footer>
        Page created by Taniya
      </footer>
    </div>
  );
}

export default App;
