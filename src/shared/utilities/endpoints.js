const BASE_URL = 'https://housibly.herokuapp.com/api/v1/';
const CHAT_URL = 'ws://housibly.herokuapp.com/cable?';

const ENDPOINTS = {
  LOGIN: 'login',
  SOCIAL_LOGIN: 'social_login.json',
  REGISTER: 'signup',
  FORGOT_PASS: 'forgot_password',
  VERIFY_OTP: 'verify_otp',
  RESEND_OTP: 'verify_otp/email_resend_otp',
  RESET_PASS: 'reset_password',
  LOGOUT: 'logout',
};

export {BASE_URL, ENDPOINTS, CHAT_URL};
