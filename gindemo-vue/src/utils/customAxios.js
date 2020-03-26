import axios from 'axios';
import storageService from '../services/storageService';


const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});
// Add a request interceptor
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  const token = storageService.get(storageService.USER_TOKEN);
  Object.assign(config.headers, { Authorization: `Bearer ${token}` });
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

export default instance;
