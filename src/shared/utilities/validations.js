import * as yup from 'yup';

import {emailRegex} from './constant';

export const RegisterFields = {
  fullName: '',
  lastName: '',
  phone: '',
  // location: '',
  // experience: 'him/he',
  age: '',
  // gender: 'Male',
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
  fullName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  phone: yup.string().required('Phone Number Required'),
  // location: yup.string().required('Location Required'),
  // experience: yup.string().required('Experience Required'),
  age: yup.string().required('Age Requried'),
  // gender: yup.string().required('Gender Requried'),
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
