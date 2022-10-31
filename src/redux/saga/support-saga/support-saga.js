import {takeLatest, put, takeEvery} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  addSupportTicketDetail,
  showSupportTicketService,
} from '../../../shared/service/SupportService';
import * as types from '../../actions/types/support_types';

export function* showSupportTicketSaga() {
  yield takeLatest(types.GET_SUPPORT_TICKET_REQUEST, getAllSupportTicket);
}
function* getAllSupportTicket(params) {
  try {
    const res = yield showSupportTicketService();
    if (res) {
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('error', error);
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log('ERROR  message', msg);
    params?.cbFailure(msg);
  }
}

export function* addSupportTicketSaga() {
  yield takeLatest(types.Add_SUPPORT_TICKET_REQUEST, addSupportTicket);
}
function* addSupportTicket(params) {
  console.log(params?.params);
  try {
    const res = yield addSupportTicketDetail(params?.params);
    if (res) {
      yield put({
        type: types.ADD_SUPPORT_TICKET_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.ADD_SUPPORT_TICKET_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log('ERROR  message', msg);
    params?.cbFailure(msg);
  }
}
