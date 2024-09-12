import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer, { login, updateUserName } from '../../redux/Features/authSlice';
import api from '../../api/axios';

jest.mock('../../api/axios');

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk],
});

test('login thunk works', async () => {
  api.post.mockResolvedValueOnce({ data: { body: { token: '123', userName: 'John Doe' } } });
  api.post.mockResolvedValueOnce({ data: { body: { email: 'john@example.com', userName: 'John Doe' } } });

  await store.dispatch(login({ email: 'john@example.com', password: 'password' }));

  const state = store.getState().auth;
  expect(state.token).toBe('123');
  expect(state.user.userName).toBe('John Doe');
});

test('updateUserName thunk works', async () => {
  api.put.mockResolvedValueOnce({ data: { body: { userName: 'Jane Doe' } } });

  await store.dispatch(updateUserName('Jane Doe'));

  const state = store.getState().auth;
  expect(state.user.userName).toBe('Jane Doe');
});
