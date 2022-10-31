import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

export const showSupportTicketService = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_TICKETS}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: `Bearer ${await GetToken()}`,
    },
  });
  return res.data;
};

export const addSupportTicketDetail = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.ADD_TICKETS}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: `Bearer ${await GetToken()}`,
    },
  });
  return res.data;
};
