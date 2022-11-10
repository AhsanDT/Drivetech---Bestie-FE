import * as TYPES from '../../actions/types/editProfile-types';

const initialState = {
  isLoggedIn: false,
  loading: false,
  isSuccess: false,
  isFailure: false,
  userInfo: null,
  userType: null,
};

const authReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.UPDATE_PROFILE_SUCCESS:
      console.log('EDIT_PROFILE payload==> ', payload);
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
        profileType: payload?.data?.profile_type,
        userType: payload?.data?.profile_type,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
