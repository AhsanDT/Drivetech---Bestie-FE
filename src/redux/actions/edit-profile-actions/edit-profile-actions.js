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
