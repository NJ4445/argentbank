import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export const loginService = async (email, password) => {
  return api.post('/user/login', { email, password });
};

export const fetchUserProfileService = async (token) => {
  return api.post('/user/profile', {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateUserNameService = async (token, userName) => {
  return api.put('/user/profile', { userName }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default api;
