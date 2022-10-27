import * as yup from 'yup';

import {emailRegex} from './constant';

export const RegisterFields = {
  firstName: '',
  lastName: '',
  phone: '',
  location: '',
  email: '',
  password: '',
  age: '',
};
export const SocialRegisterFields = {
  phone: '',
  location: '',
  age: '',
};

export const CustomerRegisterStep2Fields = {
  firstName: '',
  lastName: '',
  phone: '',
  govtID: '',
  password: '',
};

export const SPRegisterFields = {
  city: '',
  country: '',
  city: '',
  age: '',
  password: '',
  email: '',
  // sex: '',
};

export const SocialSignUPFormFields = {
  phone: '',
  country: '',
  city: '',
  age: '',
  // sex: '',
};

export const SPRegisterStep3Fields = {
  hourly_rate: '',
};

export const loginFormFields = {
  email: '',
  password: '',
};
export const createFormFields = {
  password: '',
  confirmPassword: '',
};
export const forgotFormFields = {
  email: '',
};
export const codeFormFields = {
  code: '',
};

export const payment_CardFormField = {
  fullname: '',
  country: '',
  // cardNumber: '',
};
export const account_RateFormField = {
  rate: '',
};

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Address Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SignUpVS = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required'),
  country: yup.string().required('Country Name Required'),
  city: yup.string().required('City Name Required'),
  age: yup.string().required('Age Requried'),
});

export const RegisterVS = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  phone: yup.string().required('Phone Number Required'),
  location: yup.string().required('Location Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  age: yup.string().required('Age Requried'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SocialRegisterVS = yup.object().shape({
  phone: yup.string().required('Phone Number Required'),
  location: yup.string().required('Location Required'),
  age: yup.string().required('Age Requried'),
});

export const SPRegisterStep1VS = yup.object().shape({
  city: yup.string().required('City Name Required').label('city'),
  country: yup.string().required('Country Name Required').label('country'),
});
export const SocailSignUpVS = yup.object().shape({
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required'),
  country: yup.string().required('Country Name Required'),
  city: yup.string().required('City Name Required'),
  age: yup.string().required('Age Requried'),

  // sex: 'Sex required',
});

export const CreatePasswordVS = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),

  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], ' Password does not match'),
});

export const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const payment_CardVS = yup.object().shape({
  fullname: yup.string().required('Full Name Required'),
  country: yup.string().required('Country Required'),
  // cardNumber: yup.string().required('Card Number Required'),
});

export const account_RateVS = yup.object().shape({
  rate: yup.string().required('Rate Required'),
});
