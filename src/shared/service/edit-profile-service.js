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
