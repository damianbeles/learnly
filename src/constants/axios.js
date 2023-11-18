import axios from 'axios';

const prod = true;

export const BASE_URL = prod
  ? 'https://proper-captain-d6318c7772.strapiapp.com'
  : 'http://localhost:1337';
export const PIC_URL = prod ? '' : BASE_URL;

export const setAxiosAuthorization = jwt => {
  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${jwt}`;
    return config;
  });
};

export const setDefaultAxiosHeaders = () => {
  axios.defaults.baseURL = `${BASE_URL}/api`;
};
