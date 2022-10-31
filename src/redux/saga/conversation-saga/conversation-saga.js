import {takeLatest, put, takeEvery} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  createConversationMessageService,
  createConversationService,
  showAllMessageService,
} from '../../../shared/service/Conversation-Service';
import * as types from '../../actions/types/conversation_types';

export function* showAllConversationSaga() {
  yield takeLatest(types.GET_SUPPORT_CONVERSATION_REQUEST, getAllConversation);
}
function* getAllConversation(params) {
  console.log('params', params?.params);
  try {
    const res = yield showAllMessageService(params?.params);
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

export function* createConversationSaga() {
  yield takeLatest(
    types.CREATE_SUPPORT_CONVERSATION_REQUEST,
    createConversation,
  );
}
function* createConversation(params) {
  // console.log(params?.params);
  try {
    const res = yield createConversationService(params?.params);
    if (res) {
      yield put({
        type: types.CREATE_SUPPORT_CONVERSATION_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CREATE_SUPPORT_CONVERSATION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log('ERROR  message', msg);
    params?.cbFailure(msg);
  }
}

export function* createConversationMessageSaga() {
  yield takeLatest(
    types.CREATE_SUPPORT_MESSAGE_REQUEST,
    createConversationMessage,
  );
}
function* createConversationMessage(params) {
  console.log('message', params?.params);
  try {
    const res = yield createConversationMessageService(params?.params);
    if (res) {
      yield put({
        type: types.CREATE_SUPPORT_MESSAGE_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_SUPPORT_CONVERSATION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log('ERROR  message', msg);
    params?.cbFailure(msg);
  }
}
