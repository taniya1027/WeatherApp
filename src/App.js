import React from 'react';
import './App.css';
import Forecast from "./components/forecasts/Forecast";
import Logo from "./components/logo/logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Taniya
      </footer>
    </div>
  );
}

export default App;