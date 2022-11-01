import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

export const showAllMessageService = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.GET_MESSAGE}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: `Bearer ${await GetToken()}`,
    },
  });
  return res.data;
};

export const createConversationService = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.CREATE_CONVERSATION}`,
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

export const createConversationMessageService = async params => {
  console.log('paaaaaa', params);
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.CREATE_MESSAGE}`,
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
