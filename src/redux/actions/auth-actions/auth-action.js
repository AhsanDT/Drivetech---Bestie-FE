import * as TYPES from '../types/auth_types';

//Email Validation Action
export const loginRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGIN_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Social Login Action
export const socialLoginRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SOCIAL_LOGIN_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
export const updateSocialLoginRequest = (data, email, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_SOCIAL_LOGIN_REQUEST,
    data,
    email,
    cbSuccess,
    cbFailure,
  };
};

//Sign up obj Action
export const signUpRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SIGNUP_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
export const updateSignupObject = payload => {
  return {
    type: TYPES.UPDATE_SIGNUP_OBJECT,
    payload,
  };
};

//Forgot Password Action
export const forgotPassRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.FORGOT_PASSWORD_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};

//Verify OTP Action
export const verifyOTPRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.OTP_VERIFY_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};

//Resend OTP Action
export const resendOTPRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.RESEND_OTP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const getInterestList = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_INTEREST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

//Reset Password Action
export const resetPassRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.RESET_PASSWORD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const validateEmailAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.VALIDATE_EMAIL_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//logout request
export const logoutRequset = (params, callBack) => {
  return {
    type: TYPES.LOGOUT_REQUEST_REQUEST,
    params,
    callBack,
  };
};
