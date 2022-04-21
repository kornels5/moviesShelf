import React, { FC } from 'react';

interface FormLoginProps {
  onSubmit: (obj: { username: string; password: string }) => void;
  buttonText: string;
}

const FormLogin: FC<FormLoginProps> = ({ onSubmit, buttonText }) => {
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
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export { FormLogin };
