const BASE_URL = 'https://bestie-b.herokuapp.com/api/v1/';
// const BASE_URL = 'https://bestie-staging.herokuapp.com/api/v1/';

const CHAT_URL = '';

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
  ADD_CARD: 'cards',
  GET_CARD: 'cards',
  DELETE_CARD: 'cards/',
  UPDATE_CARD: 'cards/',
  GET_TICKETS: 'supports',
  ADD_TICKETS: 'supports',
  GET_MESSAGE: 'support_conversations/get_messages',
  CREATE_CONVERSATION: 'support_conversations',
  CREATE_MESSAGE: 'support_conversations/create_message',
  UPDATE_PROFILE: 'profile/update_profile',
  // CRUD(BANK)
  BANK: 'banks',
  PROFILE_TYPE: 'profile/switch_user',
  UPDATE_SOCIALMEDIA_LINK: 'profile/update_social_media',
  UPDATE_PORTFOLIO: 'profile/update_portfolio',
  UPDATE_USER_INTEREST: 'profile/update_user_interests',
  UPDATE_USER_TALENT: 'profile/update_user_talents',
};

export {BASE_URL, ENDPOINTS, CHAT_URL};
