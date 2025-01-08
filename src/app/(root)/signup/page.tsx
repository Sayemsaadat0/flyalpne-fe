import React from 'react';
import SignupPage from './_components/SignupPage';

const Signup = () => {
  return (
    // auth_bg
    <div className="relative">
      <div>{/* <AuthBgIcon size={'full'} /> */}</div>
      <div className="">
        <SignupPage />
      </div>
    </div>
  );
};

export default Signup;
