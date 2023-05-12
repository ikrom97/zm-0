import axios from 'axios';

const REQUEST_TIMEOUT = 5000;

export const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: REQUEST_TIMEOUT,
});
