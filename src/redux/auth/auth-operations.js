import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest, signupRequest } from 'api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signupRequest(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || error.response.data.code
      );
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginRequest(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || error.response.data.code
      );
    }
  }
);
