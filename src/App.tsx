import React from 'react';
import './App.css';
import Calculator from './Calculator';
import { SharedProvider } from './SharedContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SharedProvider>
          <Calculator />
        </SharedProvider>
      </header>
    </div>
  );
}

export default App;
