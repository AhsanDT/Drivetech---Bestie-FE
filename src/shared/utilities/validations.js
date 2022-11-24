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
export const updateBestieInfo = {
  firstName: '',
  lastName: '',
  phone: '',
  location: '',
  email: '',
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

export const SignUPFormFields = {
  firstName: '',
  lastName: '',
  phone: '',
  country: '',
  city: '',
  age: '',
  email: '',
  password: '',
};

export const updateEnduserInfoFields = {
  firstName: '',
  lastName: '',
  phone: '',
  country: '',
  city: '',
  age: '',
  email: '',
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
export const BestieRate = {
  bestieRate: '',
};

export const payment_CardFormField = {
  fullname: '',
  country: '',
  // cardNumber: '',
};

export const AddBankAccount = {
  fullname: '',
  country: '',
  country: '',
  bankAccNumber: '',
  RoutingNumber: '',
};

export const EditBankAccount = {
  fullname: '',
};

export const account_RateFormField = {
  rate: '',
};
export const socialMediaLinks = {
  instagram: '',
  tiktok: '',
  linkedIn: '',
  pinterest: '',
};
// const re =
//   /(?:https?:)?\/\/(?:www\.)?(?:instagram\.com|instagr\.am)\/(?P<username>[A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/;
var linkedin =
  /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
var tiktok =
  '/bhttps?://(?:m|www|vm).tiktok.com/.*\b(?:(?:usr|v|embed|user|video)/|?shareId=|&item_id=)(d+)\b/';

var pinterest =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

export const SocialLinks = yup.object().shape({
  // instagram: yup.string().url('Insta link required').required('required'),
  instagram: yup.string().url('Instagram Link Required'),

  // tiktok: yup.string().url('Insta link required'),
  tiktok: yup.string().url('Tiktok Link Required'),

  linkedIn: yup.string().url('Linkedin Link Required'),
  pinterest: yup.string().url('Pinterest Link Required'),
});

export const support_MessageFormField = {
  message: '',
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
  country: yup
    .string()
    .required('Country Name Required')
    .nullable('Country Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
  city: yup
    .string()
    .required('City Name Required')
    .nullable('City Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
  age: yup.string().required('Age Requried'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const updateEndUserInfo = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required')
    .matches(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
      'Invalid Number',
    ),
  country: yup
    .string()
    .required('Country Name Required')
    .nullable('Country Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
  city: yup
    .string()
    .required('City Name Required')
    .nullable('City Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),

  age: yup.string().required('Age Requried'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const BestieRateVs = yup.object().shape({
  bestieRate: yup.string().required('Rate Required'),
});

export const RegisterVS = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required')
    .matches(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
      'Invalid Phone Number',
    ),
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

export const UpdateBestieInfoSVS = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required')
    .matches(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
      'Invalid Phone Number',
    ),
  location: yup.string().required('Location Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  age: yup.string().required('Age Requried'),
});

export const SocialRegisterVS = yup.object().shape({
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required')
    .matches(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
      'Invalid Phone Number',
    ),
  location: yup.string().required('Location Required'),
  age: yup.string().required('Age Requried'),
});

export const SPRegisterStep1VS = yup.object().shape({
  city: yup
    .string()
    .required('City Name Required')
    .nullable('City Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
  country: yup
    .string()
    .required('Country Name Required')
    .nullable('Country Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
});
export const SocailSignUpVS = yup.object().shape({
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required')
    .matches(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
      'Invalid Phone Number',
    ),
  country: yup
    .string()
    .required('Country Name Required')
    .nullable('Country Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
  city: yup
    .string()
    .required('City Name Required')
    .nullable('City Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
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
  country: yup
    .string()
    .required('Country Name Required')
    .nullable('Country Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
  // cardNumber: yup.string().required('Card Number Required'),
});

export const addBankAccountFields = yup.object().shape({
  fullname: yup.string().required('Full Name Required'),
  country: yup
    .string()
    .required('Country Name Required')
    .nullable('Country Name Required')
    .matches(/^[aA-zZ\s]+$/, 'Only Alphabets Are Allowed'),
  bankAccNumber: yup.string().required('Bank Acc. Number Required'),
  RoutingNumber: yup.string().required('Routing Number Required'),
});
export const editBankAccountFields = yup.object().shape({
  fullname: yup.string().required('Full Name Required'),
});

// fullname: '',
//   bankName:"",
//   country:"",
//   bankAccNumber:""

export const account_RateVS = yup.object().shape({
  rate: yup.string().required('Rate Required'),
});

export const support_MessageVS = yup.object().shape({
  message: yup.string().required('Message Required'),
});
