// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Activer DevTools sauf en production
});
