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
  userType: null,
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
    otherInputEquipment: null,
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
      console.log('LOGIN PAYLOAD==> ', payload);
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

    case TYPES.USER_TYPE:
      console.log('USER_TYPE==> ', payload);

      return {
        ...state,
        userType: payload,
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
        profileType: payload?.data?.profile_type,
        userType: payload?.data?.profile_type,
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
      let keys = Object.keys(payload);
      keys.map(x => {
        state.signupObject[x] = payload[x];
      });
      // console.log('REDUX STATE==> ', payload);
      // state.signupObject[Object.keys(payload)[0]] = Object.values(payload)[0];
      return {
        ...state,
      };

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
    case TYPES.CLEAR_SIGNUP_OBJECT:
      return {
        ...state,
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
          otherInputEquipment: null,
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
    case TYPES.LOGOUT_REQUEST:
      return {
        // ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: null,
        isLoggedIn: false,
        ...initialState,
      };
    case TYPES.LOGOUT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        userInfo: null,
        profileType: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
