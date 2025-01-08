import React from 'react';
import LoginContainer from './_components/LoginContainer';

const Login = () => {
  return (
    // auth_bg
    <div className="relative">
      <div>{/* <AuthBgIcon size={'full'} /> */}</div>
      <div>
        <LoginContainer />
      </div>
    </div>
  );
};

export default Login;
