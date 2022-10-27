import * as TYPES from '../../actions/types/auth_types';

const initialState = {
  isLoggedIn: false,
  loading: false,
  isSuccess: false,
  isFailure: false,
  userInfo: null,
  forgotPassRes: null,
  resetPassRes: null,
  otp_verify: null,
  resendData: null,
  signupObject: {
    firstName: null,
    lastName: null,
    password: null,
    email: null,
    phoneNumber: null,
    country: null,
    city: null,
    age: null,
    sex: null,
    pronoun: null,
    profilePhoto: null,
    interestList: [],
    idCardfront: null,
    idCardBack: null,
    selfie: null,
    profileType: null,
    login_type: null,
    experience: null,
    location: null,
    portfolio: [],
    talentList: [],
    model: null,
    cameraType: null,
    otherEquipments: [],
    rate: null,
    instagramLink: null,
    tiktokLink: null,
    pinterestLink: null,
    linkedinLink: null,
  },
};

const authReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
        profileType: payload?.data?.profile_type,
        isLoggedIn: true,
      };
    case TYPES.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: null,
        isLoggedIn: false,
      };
    case TYPES.SOCIAL_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
      };
    case TYPES.SOCIAL_LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: null,
      };
    case TYPES.SIGNUP_SUCCESS_REQUEST:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
      };
    case TYPES.SIGNUP_FAILURE_REQUEST:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: null,
      };
    case TYPES.UPDATE_SIGNUP_OBJECT:
      state.signupObject[Object.keys(payload)[0]] = Object.values(payload)[0];
      return state;

    case TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: true,
        isSuccess: true,
        isFailure: false,
        forgotPassRes: payload,
      };
    case TYPES.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        forgotPassRes: null,
      };
    case TYPES.OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        otp_verify: payload?.otp,
        // userInfo: payload,
      };
    case TYPES.OTP_VERIFY_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        otp_verify: null,
        // userInfo: null,
      };
    case TYPES.RESEND_OTP_SUCCESS:
      return {
        ...state,
        loading: true,
        isSuccess: true,
        isFailure: false,
        resendData: payload,
      };
    case TYPES.RESEND_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        resendData: null,
      };
    case TYPES.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: true,
        isSuccess: true,
        isFailure: false,
        resetPassRes: payload,
      };
    case TYPES.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        resetPassRes: null,
      };
    case TYPES.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: null,
      };
    case TYPES.LOGOUT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: state?.userInfo,
      };
    default:
      return state;
  }
};

export default authReducer;
