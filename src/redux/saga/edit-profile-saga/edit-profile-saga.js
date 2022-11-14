import {takeLatest, put, takeEvery} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import * as types from '../../actions/types/editProfile-types';
import * as TYPES from '../../actions/types/auth_types';
import {editProfile} from '../../../shared/service/edit-profile-service';

export function* editProfileSaga() {
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile);
}
function* updateProfile(params) {
  try {
    const res = yield editProfile(params?.params);
    if (res) {
      console.log('EDIT PROFILE Res-==>', res);

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
    console.log('EDIT PROFILE ERROR-==>', error);
    yield put({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
