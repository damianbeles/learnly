import axios from 'axios';

const prod = true;

export const BASE_URL = prod
  ? 'https://proper-captain-d6318c7772.strapiapp.com'
  : 'http://localhost:1337';
export const PIC_URL = prod ? '' : BASE_URL;

export const setDefaultAxiosHeaders = () => {
  axios.defaults.baseURL = `${BASE_URL}/api`;
};
