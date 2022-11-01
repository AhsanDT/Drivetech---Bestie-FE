import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

//Authentication Requests

export const loginUser = async params => {
  console.log('SERVICE PARAMS ', params);
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  return res.data;
};

export const socialLogin = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.SOCIAL_LOGIN}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  return res.data;
};
export const updateSocialLogin = async (params, email) => {
  const res = await axios.put(
    `${BASE_URL}${ENDPOINTS.UPDATE_SOCIAL_LOGIN}=${email}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    },
  );
  return res.data;
};

export const registerUser = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.REGISTER}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  return res.data;
};

export const forgotPassword = async params => {
  console.log('forgot pass PARAMS services ==>', params);
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.FORGOT_PASS}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });

  return res.data;
};

export const OTPVerify = async params => {
  console.log('verify pass PARAMS services ==>', params);
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.VERIFY_OTP}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  return res.data;
};

export const resendOTP = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.RESEND_OTP}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const showInterestService = async params => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_INTERESTS}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  return res.data;
};
export const showTalentService = async params => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_TALENTS}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  return res.data;
};

export const resetPassword = async params => {
  // console.log('params', params);
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.RESET_PASS}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  return res.data;
};
export const validateEmailService = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.VALIDATE_EMAIL}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    },
  );
  return res.data;
};

export const validatePhoneService = async params => {
  console.log('params services', params);
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.VALIDATE_PHONE}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    },
  );
  return res.data;
};
export const logoutUser = async params => {
  const res = await axios.post(`${BASE_URL}conversations/logout`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};
