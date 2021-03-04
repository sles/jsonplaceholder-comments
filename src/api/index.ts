import axios from 'axios';

export const api = axios.create({
  // this is a test app, so API link is hardcoded
  baseURL: process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com/',
  validateStatus: status => status >= 200 && status < 300,
});