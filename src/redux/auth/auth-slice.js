import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { signup, login, current, logout } from './auth-operations';

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

const handleLogoutFulfilled = state => {
  state.user = {};
  state.token = '';
  state.isLogin = false;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(current.fulfilled, handleCurrentFulfilled)
      .addCase(current.rejected, handleCurrentRejected)
      .addCase(logout.fulfilled, handleLogoutFulfilled)
      .addMatcher(
        isAnyOf(signup.fulfilled, login.fulfilled),
        handleSignupFulfilled
      )
      .addMatcher(
        isAnyOf(signup.pending, login.pending, current.pending, logout.pending),
        pending
      )
      .addMatcher(
        isAnyOf(signup.rejected, login.rejected, logout.rejected),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;
