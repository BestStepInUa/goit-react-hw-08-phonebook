import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { signup, login, current } from './auth-operations';

import { pending, rejected } from 'helpers/functions/redux';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const handleSignupFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLogin = true;
  state.isLoading = false;
  state.error = null;
};

const handleCurrentFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLogin = true;
  state.isLoading = false;
  state.error = null;
};

const handleCurrentRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(current.fulfilled, handleCurrentFulfilled)
      .addCase(current.rejected, handleCurrentRejected)
      .addMatcher(
        isAnyOf(signup.fulfilled, login.fulfilled),
        handleSignupFulfilled
      )
      .addMatcher(
        isAnyOf(signup.pending, login.pending, current.pending),
        pending
      )
      .addMatcher(isAnyOf(signup.rejected, login.rejected), rejected);
  },
});

export const authReducer = authSlice.reducer;
