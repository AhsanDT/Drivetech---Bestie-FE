import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

//AddCard Requests

export const addCardDetail = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.ADD_CARD}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: `Bearer ${await GetToken()}`,
    },
  });
  return res.data;
};

export const showPaymentService = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_CARD}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: `Bearer ${await GetToken()}`,
    },
  });
  return res.data;
};

export const deletePaymentCardService = async params => {
  const res = await axios.delete(
    `${BASE_URL}${ENDPOINTS.DELETE_CARD}${params?.params}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${await GetToken()}`,
      },
    },
  );
  return res.data;
};

export const updateCardDetail = async params => {
  console.log('token', params?.params);
  const res = await axios.put(
    `${BASE_URL}${ENDPOINTS.UPDATE_CARD}${params?.cardId}`,
    params?.params,
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
