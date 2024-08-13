// src/api/callApi.jsx
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

// Instance Axios
const api = axios.create({
  baseURL: API_URL,
});

// Ajout intercepteur pour les réponses
api.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

// Fonction pour se connecter
export const login = async (credentials) => {
  try {
    return await api.post('/user/login', credentials);
  } catch (error) {
    console.error("Error during login:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fonction pour s'inscrire
export const signup = async (userData) => {
  try {
    return await api.post('/user/signup', userData);
  } catch (error) {
    console.error("Error during signup:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fonction pour récupérer les informations du profil utilisateur
export const getUserProfile = async (token) => {
  try {
    const response = await api.get('/user/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.error("Error fetching user profile:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fonction pour mettre à jour le nom d'utilisateur
export const updateUserName = async (token, newUserName) => {
  try {
    const response = await api.put('/user/profile', { name: newUserName }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.error("Error updating user name:", error.response ? error.response.data : error.message);
    throw error;
  }
};
