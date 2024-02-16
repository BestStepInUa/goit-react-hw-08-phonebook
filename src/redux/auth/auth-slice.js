import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { signup, login } from './auth-operations';

import { pending, rejected } from 'helpers/functions/redux';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLogin = true;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(signup.fulfilled, login.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(signup.pending, login.pending), pending)
      .addMatcher(isAnyOf(signup.rejected, login.rejected), rejected);
  },
});

export const authReducer = authSlice.reducer;
