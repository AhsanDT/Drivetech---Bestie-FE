import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

export const editProfile = async params => {
  const res = await axios.put(
    `${BASE_URL}${ENDPOINTS.UPDATE_PROFILE}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${await GetToken()}`,
      },
    },
  );
  return res.data;
};

export const updateProfileType = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.PROFILE_TYPE}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: `Bearer ${await GetToken()}`,
    },
  });
  return res.data;
};

export const updateSocialMediaLinks = async params => {
  const res = await axios.put(
    `${BASE_URL}${ENDPOINTS.UPDATE_SOCIALMEDIA_LINK}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${await GetToken()}`,
      },
    },
  );
  return res.data;
};
export const updatePortfolioService = async params => {
  const res = await axios.put(
    `${BASE_URL}${ENDPOINTS.UPDATE_PORTFOLIO}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${await GetToken()}`,
      },
    },
  );
  return res.data;
};

export const updateInterestService = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.UPDATE_USER_INTEREST}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${await GetToken()}`,
      },
    },
  );
  return res.data;
};

export const updateTalentService = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.UPDATE_USER_TALENT}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${await GetToken()}`,
      },
    },
  );
  return res.data;
};
