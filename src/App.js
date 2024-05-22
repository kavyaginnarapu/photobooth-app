// src/App.js
import React from 'react';
import './App.css';
import Photobooth from './components/Photobooth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Photobooth Sample App</h1>
      </header>
      <main>
        <Photobooth />
      </main>
    </div>
  );
}

export default App;
