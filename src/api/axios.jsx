import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default api;
