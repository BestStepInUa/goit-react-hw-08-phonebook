import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest, signupRequest } from 'api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signupRequest(credentials);
      return data;
    } catch (error) {
      const customError =
        error.response.data?.code === 11000
          ? 'This user is already registered'
          : error.response.data.message;
      return rejectWithValue(customError);
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
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
