/** @jsx jsx */
import { jsx } from '@emotion/react';

import '@reach/dialog/styles.css';
import React from 'react';
import { Logo } from './components/Logo';
import { FormLogin } from './components/FormLogin';
import { Button, Input, FormGroup } from './components/styledComponents';
import { Modal, ModalContents, ModalOpenButton } from './components/Modal';

function App() {
  function login(formData: any) {
    console.log('login', formData);
  }

  function register(formData: any) {
    console.log('register', formData);
  }

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo width="80" height="80" />
      <h1>Movies shelf</h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <ModalOpenButton>
            <Button variant="primary">Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <FormLogin
              onSubmit={login}
              submitButton={<Button variant="primary">Login</Button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant="secondary">Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <FormLogin
              onSubmit={register}
              submitButton={<Button variant="secondary">Register</Button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  );
}

export default App;
