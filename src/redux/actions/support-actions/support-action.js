import * as TYPES from '../types/support_types';

// AddCardRequest Action
export const addSupportTicketRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.Add_SUPPORT_TICKET_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const getAllSupportTicket = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_SUPPORT_TICKET_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

// export const deletePaymentCard = (params, cbSuccess, cbFailure) => {
//   return {
//     type: TYPES.DELETE_PAYMENT_CARD_REQUEST,
//     params,
//     cbSuccess,
//     cbFailure,
//   };
// };

// export const updatePaymentCard = (params, cardId, cbSuccess, cbFailure) => {
//   console.log('paramUUUUUUUUUU+++++++++', params);
//   return {
//     type: TYPES.UPDATE_PAYMENT_CARD_REQUEST,
//     params,
//     cardId,
//     cbSuccess,
//     cbFailure,
//   };
// };
