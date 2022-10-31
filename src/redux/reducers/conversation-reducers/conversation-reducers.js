import * as TYPES from '../../actions/types/conversation_types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
};

const conversationReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.GET_SUPPORT_CONVERSATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_SUPPORT_CONVERSATION_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.CREATE_SUPPORT_CONVERSATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.CREATE_SUPPORT_CONVERSATION_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GET_SUPPORT_CONVERSATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_SUPPORT_CONVERSATION_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};

export default conversationReducer;
