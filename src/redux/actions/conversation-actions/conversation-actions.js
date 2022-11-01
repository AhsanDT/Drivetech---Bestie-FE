import * as TYPES from '../types/conversation_types';

// AddCardRequest Action
export const createConversationRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CREATE_SUPPORT_CONVERSATION_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const createMessageRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CREATE_SUPPORT_MESSAGE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const getAllConversationMessage = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_SUPPORT_CONVERSATION_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
