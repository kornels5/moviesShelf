/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC } from 'react';

import { Button, Input, FormGroup } from './styledComponents';

interface FormLoginProps {
  onSubmit: (obj: { username: string; password: string }) => void;
  submitButton: any;
}

const FormLogin: FC<FormLoginProps> = ({ onSubmit, submitButton }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const username = target.username.value;
    const password = target.password.value;
    onSubmit({
      username: username,
      password: password,
    });
  }
  return (
    <form
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
      onSubmit={e => handleSubmit(e)}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>{React.cloneElement(submitButton, { type: 'submit' })}</div>
    </form>
  );
};

export { FormLogin };
