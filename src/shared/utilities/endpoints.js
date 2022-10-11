const BASE_URL = 'https://bestie-b.herokuapp.com/api/v1/';
const CHAT_URL = 'ws://housibly.herokuapp.com/cable?';

const ENDPOINTS = {
  LOGIN: 'authentication/login',
  SOCIAL_LOGIN: 'social_login.json',
  REGISTER: 'signup',
  FORGOT_PASS: 'authentication/forgot_password',
  VERIFY_OTP: 'verify_otp',
  RESEND_OTP: 'verify_otp/email_resend_otp',
  RESET_PASS: 'reset_password',
  LOGOUT: 'logout',
  GET_INTERESTS: 'authentication/get_interests',
};

export {BASE_URL, ENDPOINTS, CHAT_URL};
