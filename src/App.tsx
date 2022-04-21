import '@reach/dialog/styles.css';
import './App.css';
import React from 'react';
import { Dialog } from '@reach/dialog';
import { Logo } from './components/Logo';
import { FormLogin } from './components/FormLogin';

function App() {
  const [showDialog, setShowDialog] = React.useState('none');

  return (
    <div>
      <Logo />
      <h1>Movies shelf</h1>
      <button onClick={() => setShowDialog('register')}>register</button>
      <button onClick={() => setShowDialog('login')}>login</button>
      <Dialog aria-label="Login form" isOpen={showDialog === 'login'}>
        <button className="close-button" onClick={() => setShowDialog('none')}>
          <span aria-hidden>×</span>
        </button>
        <FormLogin onSubmit={data => console.log(data)} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={showDialog === 'register'}>
        <button className="close-button" onClick={() => setShowDialog('none')}>
          <span aria-hidden>×</span>
        </button>
        <FormLogin onSubmit={data => console.log(data)} buttonText="Register" />
      </Dialog>
    </div>
  );
}

export default App;
