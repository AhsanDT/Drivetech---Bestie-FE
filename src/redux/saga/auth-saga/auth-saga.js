import AsyncStorage from '@react-native-async-storage/async-storage';
import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  loginUser,
  socialLogin,
  registerUser,
  forgotPassword,
  OTPVerify,
  resendOTP,
  resetPassword,
  logoutUser,
  showInterestService,
  updateSocialLogin,
  showTalentService,
  validateEmailService,
  validatePhoneService,
} from '../../../shared/service/AuthService';
import * as types from '../../actions/types/auth_types';

// ************* Login Saga **************
export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}
function* login(params) {
  try {
    const res = yield loginUser(params?.params);
    if (res) {
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      console.log('LOGIN USER TYPE==> saga ', res?.data?.profile_type);
      yield put({
        type: types.USER_TYPE,
        payload: res?.data?.profile_type,
      });
      AsyncStorage.setItem('usertoken', res?.auth_token);
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log('ERROR  message', msg);
    params?.cbFailure(msg);
  }
}

// ************* Social Login Saga **************
export function* socialLoginRequest() {
  yield takeLatest(types.SOCIAL_LOGIN_REQUEST, socialLoginUser);
}
function* socialLoginUser(params) {
  try {
    const res = yield socialLogin(params?.data);
    if (res) {
      yield put({
        type: types.SOCIAL_LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      AsyncStorage.setItem('usertoken', res?.auth_token);
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      console.log('SOCIAL LOGIN USERTYPE==> ', res?.data?.profile_type);
      yield put({
        type: types.USER_TYPE,
        payload: res?.data?.profile_type,
      });
      // AsyncStorage.setItem('usertoken', res?.user?.auth_token);
      params?.cbSuccess(res);
    } else {
      yield put({
        type: types.SOCIAL_LOGIN_REQUEST_FAILURE,
        payload: null,
      });
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: res,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SOCIAL_LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status);
    params?.cbFailure(msg);
  }
}
export function* updateSocialLoginData() {
  yield takeLatest(types.UPDATE_SOCIAL_LOGIN_REQUEST, updateSocialLoginUser);
}
function* updateSocialLoginUser(params) {
  try {
    const res = yield updateSocialLogin(params?.data, params?.email);
    if (res) {
      console.log('update SOCIAL LOGIn response saga', res);
      yield put({
        type: types.UPDATE_SOCIAL_LOGIN_SUCCESS,
        payload: res,
      });
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      // AsyncStorage.setItem('usertoken', res?.user?.auth_token);
      params?.cbSuccess(res);
    } else {
      yield put({
        type: types.UPDATE_SOCIAL_LOGIN_FAILURE,
        payload: null,
      });
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: res,
      });
    }
  } catch (error) {
    console.log('update SOCIAL LOGIn error', error);

    yield put({
      type: types.SOCIAL_LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status);
    params?.cbFailure(msg);
  }
}

// ************* Sign Up Saga **************
export function* signUpRequest() {
  yield takeLatest(types.SIGNUP_REQUEST, signUp);
}
function* signUp(params) {
  try {
    const res = yield registerUser(params?.data);
    if (res) {
      AsyncStorage.setItem('usertoken', res?.auth_token);
      yield put({
        type: types.SIGNUP_SUCCESS_REQUEST,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(
      error?.response?.status,
      error?.response?.data?.error,
    );
    params?.cbFailure(msg);
  }
}

// ************* Forgot Saga **************
export function* forgotPassRequest() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgot);
}
function* forgot(params) {
  try {
    const res = yield forgotPassword(params?.data);
    if (res) {
      yield put({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.FORGOT_PASSWORD_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Verify OTP Saga **************
export function* OTPVerifyRequest() {
  yield takeLatest(types.OTP_VERIFY_REQUEST, verifyOTP);
}
function* verifyOTP(params) {
  try {
    const res = yield OTPVerify(params?.data);
    if (res) {
      yield put({
        type: types.OTP_VERIFY_SUCCESS,
        payload: res,
      });
      console.log(res);
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.OTP_VERIFY_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// Show Interest

export function* showInterestSaga() {
  yield takeLatest(types.GET_INTEREST_REQUEST, getInterestList);
  yield takeLatest(types.GET_TALENT_REQUEST, getTalentList);
}
function* getInterestList(params) {
  try {
    const res = yield showInterestService(params);
    if (res) {
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getTalentList(params) {
  try {
    const res = yield showTalentService(params);
    if (res) {
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Resend OTP Saga **************
export function* resendOTPRequestSaga() {
  yield takeLatest(types.RESEND_OTP_REQUEST, resend_otp);
}
function* resend_otp(params) {
  try {
    const res = yield resendOTP(params?.params);
    if (res) {
      yield put({
        type: types.RESEND_OTP_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.RESEND_OTP_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Reset Password Saga **************
export function* resetPassRequest() {
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPass);
}
function* resetPass(params) {
  try {
    const res = yield resetPassword(params?.params);
    if (res) {
      yield put({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.RESET_PASSWORD_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

export function* validateEmailSaga() {
  yield takeLatest(types.VALIDATE_EMAIL_REQUEST, validateEmail);
}
function* validateEmail(params) {
  // console.log('\n\nparams', params);
  try {
    const res = yield validateEmailService(params?.params);
    if (res) {
      // console.log('VALIDATE EMAIL SAGA==>res ', res);
      params?.cbSuccess(res);
    }
  } catch (error) {
    // console.log('VALIDATE EMAIL SAGA==>err ', error?.response?.data?.error);

    params?.cbFailure(error?.response?.data);
  }
}

export function* validatePhoneSaga() {
  yield takeLatest(types.VALIDATE_PHONE_REQUEST, validatePhone);
}
function* validatePhone(params) {
  console.log('PARAMS SAGA==> ', params);
  try {
    const res = yield validatePhoneService(params?.params);
    if (res) {
      // console.log('VALIDATE EMAIL SAGA==>res ', res);
      params?.cbSuccess(res);
      console.log('Eres', res);
    }
  } catch (error) {
    // console.log('VALIDATE EMAIL SAGA==>err ', error?.response?.data?.error);
    console.log('ERROR 12', error);
    params?.cbFailure(error?.response?.data);
  }
}

//************* Logout Saga **************
export function* logoutRequestSaga() {
  yield takeLatest(types.LOGOUT_REQUEST_REQUEST, logout);
}
function* logout(params) {
  try {
    const res = yield logoutUser(params?.params);
    yield put({
      type: types.LOGOUT_REQUEST_SUCCESS,
      payload: params,
    });
    params?.callBack();
  } catch (error) {
    console.log(error);
  }
}
