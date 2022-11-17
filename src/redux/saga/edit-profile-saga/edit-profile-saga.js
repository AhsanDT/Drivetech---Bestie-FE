import {takeLatest, put, takeEvery} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import * as types from '../../actions/types/editProfile-types';
import * as TYPES from '../../actions/types/auth_types';
import {
  editProfile,
  updateProfileType,
  updateSocialMediaLinks,
  updatePortfolioService,
  updateInterestService,
  updateTalentService,
} from '../../../shared/service/edit-profile-service';

export function* editProfileSaga() {
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile);
  yield takeLatest(types.UPDATE_USER_TYPE_REQUEST, updateProfileTypeSaga);
  yield takeLatest(
    types.UPDATE_SOCIAL_MEDIA_LINKS_REQUEST,
    updateSocialMediaSaga,
  );
  yield takeLatest(types.UPDATE_PORTFOLIO_REQUEST, updatePortfolioRequestSaga);
  yield takeLatest(types.UPDATE_INTEREST_REQUEST, updateUserInterestSaga);
  yield takeLatest(types.UPDATE_TALENT_REQUEST, updateUserTalentSaga);
}
function* updateProfile(params) {
  try {
    const res = yield editProfile(params?.params);
    if (res) {
      yield put({
        type: types.UPDATE_PROFILE_SUCCESS,
        payload: res,
      });
      yield put({
        type: TYPES.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* updateSocialMediaSaga(params) {
  try {
    const res = yield updateSocialMediaLinks(params?.params);
    if (res) {
      yield put({
        type: TYPES.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* updatePortfolioRequestSaga(params) {
  try {
    const res = yield updatePortfolioService(params?.params);
    if (res) {
      yield put({
        type: TYPES.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* updateUserInterestSaga(params) {
  try {
    const res = yield updateInterestService(params?.params);
    if (res) {
      yield put({
        type: TYPES.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* updateUserTalentSaga(params) {
  try {
    const res = yield updateTalentService(params?.params);
    if (res) {
      yield put({
        type: TYPES.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
    console.log('ERROR==> saga talent', error);
  }
}

//

function* updateProfileTypeSaga(params) {
  try {
    const res = yield updateProfileType(params?.params);
    if (res) {
      // yield put({
      //   type: types.UPDATE_PROFILE_SUCCESS,
      //   payload: res,
      // });
      yield put({
        type: TYPES.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    // yield put({
    //   type: types.UPDATE_PROFILE_FAILURE,
    //   payload: null,
    // });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
