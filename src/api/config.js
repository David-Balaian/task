import axios from 'axios';
import { startLoading, stopLoading } from '../store/loading/actions';
import store from '../store/config';

const publicAPI = axios.create({ baseURL: 'https://randomuser.me' })

publicAPI.interceptors.request.use((request) => {
  store.dispatch(startLoading());
  return request;
})

publicAPI.interceptors.response.use((response) => {
  store.dispatch(stopLoading());
  return response;
})

export { publicAPI }