import * as TYPES from '../../actions/types/support_types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
};

const supportReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.GET_SUPPORT_TICKET_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_SUPPORT_TICKET_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.ADD_SUPPORT_TICKET_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.ADD_SUPPORT_TICKET_FAILURE:
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

export default supportReducer;
