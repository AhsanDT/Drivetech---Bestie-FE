import {fork} from 'redux-saga/effects';

import {
  loginRequest,
  socialLoginRequest,
  signUpRequest,
  forgotPassRequest,
  OTPVerifyRequest,
  resendOTPRequestSaga,
  resetPassRequest,
  logoutRequestSaga,
  showInterestSaga,
  updateSocialLoginData,
  validateEmailSaga,
} from './auth-saga/auth-saga';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(socialLoginRequest);
  yield fork(signUpRequest);
  yield fork(forgotPassRequest);
  yield fork(OTPVerifyRequest);
  yield fork(resendOTPRequestSaga);
  yield fork(resetPassRequest);
  yield fork(logoutRequestSaga);
  yield fork(showInterestSaga);
  yield fork(updateSocialLoginData);
  yield fork(validateEmailSaga);
}
