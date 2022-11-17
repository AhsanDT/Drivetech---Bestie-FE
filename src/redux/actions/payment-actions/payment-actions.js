import * as TYPES from '../types/payment-types';

//AddCardRequest Action
export const addCardRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.ADDCARD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const getPaymentCard = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PAYMENT_CARD_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const deletePaymentCard = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DELETE_PAYMENT_CARD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const updatePaymentCard = (params, cardId, cbSuccess, cbFailure) => {
  console.log('paramUUUUUUUUUU+++++++++', params);
  return {
    type: TYPES.UPDATE_PAYMENT_CARD_REQUEST,
    params,
    cardId,
    cbSuccess,
    cbFailure,
  };
};

export const addBankRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.ADD_BANK_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const getBankCard = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_BANK_LIST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const deleteBankCard = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DELETE_BANK_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const updateBankInfo = (params, bankId, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_BANK_REQUEST,
    params,
    bankId,
    cbSuccess,
    cbFailure,
  };
};
