'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import TextInput from '@/components/core/input/TextInput';
import { Button } from '@/components/ui/button';
// import { UserRegistervalidation } from '@/lib/validate/AuthValidate/AuthValidate';

const SignupPage = () => {
  const [contactMethod, setContactMethod] = useState('email');

  const { handleChange, values, touched, errors, handleSubmit, isSubmitting, setFieldValue } =
    useFormik({
      initialValues: {
        contact: '',
        password: '',
        confirm_password: '',
        role: 'USER',
      },
      onSubmit: async (data) => {
        try {
        } catch (err) {}
      },
    });

  const handleContactMethodChange = (method: string) => {
    setContactMethod(method);
    setFieldValue('contact', '');
  };

  return (
    <div className="bg-gray-100 max-w-[550px] mx-auto mt-24 rounded-[12px] p-5 md:p-10 space-y-5">
      <h3 className="text-xl font-semibold text-center">Sign up to Account</h3>
      <p className="text-center">Please enter your details to continue</p>
      <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={contactMethod === 'email'}
              onChange={() => handleContactMethodChange('email')}
              className="mr-2"
            />
            Register with Email
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={contactMethod === 'phone'}
              onChange={() => handleContactMethodChange('phone')}
              className="mr-2"
            />
            Register with Phone
          </label>
        </div>

        <TextInput
          className="w-full"
          id="contact"
          label={contactMethod === 'email' ? 'Enter Your Email' : 'Enter Your Phone Number'}
          value={values.contact || ''} // Ensure value is always a string
          onChange={(e) =>
            contactMethod === 'phone'
              ? setFieldValue('contact', `+88${e.target.value.replace(/^\+88/, '')}`)
              : setFieldValue('contact', e.target.value)
          }
          type="text"
          // placeholder={contactMethod === 'email' ? 'Enter your email' : 'Enter 10-digit number'}
          error={Boolean(errors.contact) && touched.contact && errors.contact}
        />

        <TextInput
          className="w-full"
          id="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          type="password"
          error={Boolean(errors.password) && touched.password && errors.password}
        />
        <TextInput
          className="w-full"
          id="confirm_password"
          label="Confirm Password"
          value={values.confirm_password}
          onChange={handleChange}
          type="password"
          error={
            Boolean(errors.confirm_password) && touched.confirm_password && errors.confirm_password
          }
        />
        {/* Hidden role field */}
        <input type="hidden" id="role" value={values.role} />

        <div className="w-full flex justify-center">
          <Button disabled={isSubmitting} className="w-full bg-f-primary-1-500 text-white">
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-center">
        Already have an account?{' '}
        <Link className="text-c-violet-700 font-bold" href={'/login'}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
