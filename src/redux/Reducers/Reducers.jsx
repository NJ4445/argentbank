// redux/Reducers/Reducers.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('authToken') || null,
  user: {
    email: localStorage.getItem('userEmail') || '',
    name: localStorage.getItem('userName') || ''
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('authToken', action.payload);
    },
    setUser: (state, action) => {
      const { email, name } = action.payload;
      state.user = { email: email || '', name: name || '' };
      localStorage.setItem('userEmail', email || '');
      localStorage.setItem('userName', name || '');
    },
    logout: (state) => {
      state.token = null;
      state.user = { email: '', name: '' };
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
    }
  },
});

export const { setToken, setUser, logout } = authSlice.actions;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;
