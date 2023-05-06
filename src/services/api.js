import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000/';
const REQUEST_TIMEOUT = 5000;

export const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});
