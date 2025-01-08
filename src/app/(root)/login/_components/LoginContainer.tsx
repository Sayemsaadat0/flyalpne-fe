'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/core/input/TextInput';

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginContainer = () => {
  const { handleChange, values, touched, errors, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async () => {
      try {
        // Call Function Here
      } catch (err) { }
    },
  });

  return (
    <div className="bg-gray-100 max-w-[650px] mt-24  mx-auto rounded-[12px] p-5 md:p-10 space-y-5">
      <h3 className="text-xl font-semibold text-center">Sign in to Account</h3>
      <p className="text-center">Please enter your email and password to continue</p>
      <form className="space-y-6" autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextInput
          className="w-full"
          id="email"
          label="Enter Your Email"
          value={values.email}
          onChange={handleChange}
          type="text"
          error={touched.email && errors.email}
        />
        {touched.email && errors.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
        <div>
          <TextInput
            className="w-full "
            id="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            type="password"
            error={touched.password && errors.password}
          />
          {touched.password && errors.password && (
            <div className="text-red-500 text-sm">{errors.password}</div>
          )}

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2 ">
              <Checkbox />
              <p>Remember Me</p>
            </div>
            <Link
              href={'/verify-email'}
              className="hover:underline transition-all duration-300 underline-offset-4 font-semibold text-c-white-800"
            >
              Forget Password
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            disabled={isSubmitting}
            className="w-full md:w-[80%] text-lg">
            Login
          </Button>
        </div>
      </form>
      <div className="text-center">
        Dont have An account?{' '}
        <Link className="text-c-violet-700 font-bold" href={'signup'}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginContainer;
