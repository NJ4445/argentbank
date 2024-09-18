import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

// Thunks
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/login', { email, password });
      const { token } = response.data.body;

      // Récupération du profil utilisateur
      const userResponse = await api.post('/user/profile', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { email: userEmail, userName, firstName, lastName } = userResponse.data.body;

      return { token, email: userEmail, userName, firstName, lastName };
    } catch (error) {
      // Gestion d'une erreur de connexion incorrecte
      if (error.response && error.response.status === 401) {
        return rejectWithValue('Email ou mot de passe incorrect');
      }
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const updateUserName = createAsyncThunk(
  'auth/updateUserName',
  async ({ token, userName }, { rejectWithValue }) => {
    try {
      const response = await api.put('/user/profile', { userName }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data.body;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (token, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/profile', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const { email, userName, firstName, lastName } = response.data.body;
      return { email, userName, firstName, lastName };
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('authToken') || null,
    user: {
      email: localStorage.getItem('userEmail') || '',
      userName: localStorage.getItem('userName') || '',
      firstName: localStorage.getItem('firstName') || '',
      lastName: localStorage.getItem('lastName') || '',
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = { email: '', userName: '', firstName: '', lastName: '' };
      localStorage.clear(); // Efface tous les éléments du localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token, email, userName, firstName, lastName } = action.payload;
        state.token = token;
        state.user = { email, userName, firstName, lastName };
        state.status = 'succeeded';
        state.error = null;
        localStorage.setItem('authToken', token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', userName);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        // Affichage de l'erreur renvoyée ou d'un message par défaut
        state.error = action.payload || 'Échec de la connexion';
      })
      .addCase(updateUserName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.user.userName = action.payload.userName;
        state.status = 'succeeded';
        localStorage.setItem('userName', action.payload.userName);
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Échec de la mise à jour du nom d\'utilisateur';
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        const { email, userName, firstName, lastName } = action.payload;
        state.user = { email, userName, firstName, lastName };
        state.status = 'succeeded';
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', userName);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Échec de la récupération du profil utilisateur';
      });
  },
});

// Exports
export const { logout } = authSlice.actions;
export const selectUserName = (state) => state.auth.user.userName;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserFirstName = (state) => state.auth.user.firstName;
export const selectUserLastName = (state) => state.auth.user.lastName;
export const selectToken = (state) => state.auth.token;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export default authSlice.reducer;
