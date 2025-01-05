import * as yup from 'yup';

// Validation schema
export const UserRegistervalidation = yup.object({
  contact: yup.string().when('contactMethod', {
    is: (value: string) => value === 'email',
    then: () => yup.string().email('Invalid email format').required('Email is required'),
    otherwise: () =>
      yup
        .string()
        .matches(/^\+88\d{11}$/, 'Phone number must start with +88 and have 11 digits')
        .required('Phone number is required'),
  }),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm password is required'),
});
