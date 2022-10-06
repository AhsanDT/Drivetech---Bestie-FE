export {appImages, appIcons, appLogos, appSvgs} from './theme/assets';

export {colors} from './theme/colors';
export {size} from './theme/sizes';
export {family} from './theme/family';
export {
  WP,
  HP,
  scrWidth,
  scrHeight,
  platformOrientedCode,
} from './theme/responsive';

export {
  LoginVS,
  loginFormFields,
  forgotFormFields,
  ForgotPasswordVS,
  resetFormFields,
  ResetPasswordVS,
  updateFormFields,
  PhoneAuthFieldsVS,
  PhoneAuthFields,
  signupFormFields,
  SignupVS,
  AddPersonalInfoField,
  AddPersonalInfoVS,
  codeFormFields,
  CodeVS,
  editFormFields,
  editProfileFieldsVS,
  addCardFormFields,
  addCardVS,
  AddSupportInfoField,
  AddSupportInfoVS,
  BudgetBoost,
  editSupportFormFields,
  editSupportProfileFieldsVS,
  socialSignupFormFields,
  SocialLoginSignupVS,
} from './utilities/validations';
export {
  StatusBarHeight,
  DimensionsWindowHeight,
  DimensionsWindowWidth,
} from './theme/statusBarHeight';

export {setupAxios, HTTP_CLIENT, initialConfig} from './utilities/config';
export {BASE_URL, ENDPOINTS} from './utilities/endpoints';
export {
  web_client_id,
  stripe_publishableKey,
  networkText,
  image_options,
} from './utilities/constant';
export {header, authHeader} from './utilities/headers';
export {
  checkConnected,
  responseValidator,
  checkBrand,
} from './utilities/helper';
