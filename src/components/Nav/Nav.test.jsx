// Nav.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../redux/Features/authSlice';
import Nav from './Nav';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

test('renders Nav component and tests sign out button', () => {
  // Setup with token
  store.dispatch({ type: 'auth/login/fulfilled', payload: { token: '123', userName: 'John Doe' } });

  render(
    <Provider store={store}>
      <Router>
        <Nav />
      </Router>
    </Provider>
  );

  // Check if logo and links are present
  expect(screen.getByAltText('Argent Bank Logo')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Sign Out')).toBeInTheDocument();
});

test('renders Sign In link when no token is present', () => {
  render(
    <Provider store={store}>
      <Router>
        <Nav />
      </Router>
    </Provider>
  );

  // Check for sign-in link when no token
  expect(screen.getByText('Sign In')).toBeInTheDocument();
});
