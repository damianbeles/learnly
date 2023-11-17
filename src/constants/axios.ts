import axios from 'axios';

export const setAxiosAuthorization = (jwt: string) => {
  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${jwt}`;
    return config;
  });
};

export const setDefaultAxiosHeaders = () => {
  axios.defaults.baseURL = 'http://localhost:1337/api';
};
