const BASE_URL = 'https://bestie-b.herokuapp.com/api/v1/';
const CHAT_URL = 'ws://housibly.herokuapp.com/cable?';

const ENDPOINTS = {
  LOGIN: 'authentication/login',
  SOCIAL_LOGIN: 'social_login/social_login',
  REGISTER: 'authentication/sign_up',
  FORGOT_PASS: 'authentication/forgot_password',
  VERIFY_OTP: 'authentication/verify_token',
  RESEND_OTP: 'verify_otp/email_resend_otp',
  RESET_PASS: 'authentication/reset_password',
  LOGOUT: 'logout',
  GET_INTERESTS: 'authentication/get_interests',
  GET_TALENTS: 'authentication/get_talents',
  UPDATE_SOCIAL_LOGIN: 'authentication/update_social_login?email',
  VALIDATE_EMAIL: 'authentication/uniq_email_and_phone',
  VALIDATE_PHONE: 'authentication/uniq_phone_number',
};

export {BASE_URL, ENDPOINTS, CHAT_URL};
