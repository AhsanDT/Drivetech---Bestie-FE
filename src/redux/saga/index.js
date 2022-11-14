import {fork} from 'redux-saga/effects';

import {
  loginRequest,
  socialLoginRequest,
  signUpRequest,
  forgotPassRequest,
  OTPVerifyRequest,
  resendOTPRequestSaga,
  resetPassRequest,
  // logoutRequestSaga,
  showInterestSaga,
  updateSocialLoginData,
  validateEmailSaga,
  validatePhoneSaga,
} from './auth-saga/auth-saga';
import {
  createConversationMessageSaga,
  createConversationSaga,
  showAllConversationSaga,
} from './conversation-saga/conversation-saga';
import {
  addCardRequest,
  deletePaymentCardSaga,
  getPaymentCardRequest,
  showPaymentCardSaga,
  updatePaymentCardSaga,
  Bank_CRUD,
} from './payment-saga/payment-saga';
import {
  addSupportTicketSaga,
  showSupportTicketSaga,
} from './support-saga/support-saga';
import {editProfileSaga} from '../saga/edit-profile-saga/edit-profile-saga';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(socialLoginRequest);
  yield fork(signUpRequest);
  yield fork(forgotPassRequest);
  yield fork(OTPVerifyRequest);
  yield fork(resendOTPRequestSaga);
  yield fork(resetPassRequest);
  // yield fork(logoutRequestSaga);
  yield fork(showInterestSaga);
  yield fork(updateSocialLoginData);
  yield fork(validateEmailSaga);
  yield fork(validatePhoneSaga);
  yield fork(addCardRequest);
  yield fork(showPaymentCardSaga);
  yield fork(deletePaymentCardSaga);
  yield fork(updatePaymentCardSaga);
  yield fork(showSupportTicketSaga);
  yield fork(addSupportTicketSaga);
  yield fork(showAllConversationSaga);
  yield fork(createConversationSaga);
  yield fork(createConversationMessageSaga);
  yield fork(editProfileSaga);
  yield fork(Bank_CRUD);
}
