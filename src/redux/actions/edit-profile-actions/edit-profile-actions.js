import * as TYPES from '../types/editProfile-types';

//Email Validation Action
export const updateProfileAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const updateUserType = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_USER_TYPE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const updateSocialMediaLinks = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_SOCIAL_MEDIA_LINKS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const updatePortfolioAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_PORTFOLIO_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const updateUserInterestAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_INTEREST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const updateUserTalentAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_TALENT_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
