// src/redux/Features/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

// Thunks
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/login', { email, password });
      const { token } = response.data.body;

      // Récupérer le profil utilisateur
      const userResponse = await api.post('/user/profile', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { email: userEmail, userName } = userResponse.data.body;

      return { token, email: userEmail, userName };
    } catch (error) {
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
      const { email, userName } = response.data.body;
      return { email, userName };
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
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = { email: '', userName: '' };
      localStorage.clear(); // Clear all localStorage items
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('Login fulfilled:', action.payload);
        const { token, email, userName } = action.payload;
        state.token = token;
        state.user = { email, userName };
        state.status = 'succeeded';
        state.error = null;
        localStorage.setItem('authToken', token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', userName);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed';
      })

      .addCase(updateUserName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        console.log('updateUserName.fulfilled payload:', action.payload); 
        state.user.userName = action.payload.userName;
        state.status = 'succeeded';
        localStorage.setItem('userName', action.payload.userName);
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to update user name';
      })

      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        console.log('Fetch User Profile fulfilled:', action.payload);
        const { email, userName } = action.payload;
        state.user = { email, userName };
        state.status = 'succeeded';
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', userName);
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch user profile';
      });
  },
});

// Exports
export const { logout } = authSlice.actions;
export const selectUserName = (state) => state.auth.user.userName;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectToken = (state) => state.auth.token;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export default authSlice.reducer;
