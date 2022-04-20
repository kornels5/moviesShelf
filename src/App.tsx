import React from 'react';
import './App.css';
import { Logo } from './components/Logo';

function App() {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Movies shelf</h1>
      <div>
        <button onClick={() => alert('login clicked')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('register clicked')}>Register</button>
      </div>
    </div>
  );
}

export default App;
