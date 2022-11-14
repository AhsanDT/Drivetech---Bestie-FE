import {takeLatest, put, takeEvery} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  addCardDetail,
  deletePaymentCardService,
  getPaymentCards,
  showPaymenrService,
  showPaymentService,
  updateCardDetail,
  addBankDetail,
  showBankDetails,
  deleteBankService,
  updateBankDetail,
} from '../../../shared/service/PaymentService';
import * as types from '../../actions/types/payment-types';

// ************* Login Saga **************
export function* addCardRequest() {
  yield takeLatest(types.ADDCARD_REQUEST, addCard);
}
function* addCard(params) {
  try {
    const res = yield addCardDetail(params?.params);
    if (res) {
      yield put({
        type: types.ADDCARD_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.ADDCARD_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log('ERROR  message', msg);
    params?.cbFailure(msg);
  }
}

export function* showPaymentCardSaga() {
  yield takeLatest(types.GET_PAYMENT_CARD_REQUEST, getPaymentCardList);
}
function* getPaymentCardList(params) {
  try {
    const res = yield showPaymentService();
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

export function* deletePaymentCardSaga() {
  yield takeEvery(types.DELETE_PAYMENT_CARD_REQUEST, deletePaymentCard);
}
function* deletePaymentCard(params) {
  try {
    const res = yield deletePaymentCardService(params);
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

export function* updatePaymentCardSaga() {
  yield takeLatest(types.UPDATE_PAYMENT_CARD_REQUEST, updatePaymentCard);
}

function* updatePaymentCard(params) {
  console.log('paramsUpdate2', params);
  try {
    const res = yield updateCardDetail(params);
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

export function* Bank_CRUD() {
  yield takeLatest(types.ADD_BANK_REQUEST, addBankSaga);
  // yield takeLatest(types.UPDATE_BANK_REQUEST, updateBankSaga);
  // yield takeLatest(types.DELETE_BANK_REQUEST, deleteBankSaga);
  yield takeLatest(types.GET_BANK_LIST_REQUEST, getBanksaga);
}

function* addBankSaga(params) {
  try {
    const res = yield addBankDetail(params?.params);
    if (res) {
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log('ERROR  message', msg);
    params?.cbFailure(msg);
  }
}

function* getBanksaga(params) {
  try {
    const res = yield showBankDetails();
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
