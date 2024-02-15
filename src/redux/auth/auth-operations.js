import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest, signupRequest } from 'api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signupRequest(credentials);
      return data;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        return rejectWithValue(`User creation error.`);
      }
      if (error.status === 500) {
        return rejectWithValue(`Server error.`);
      }
      return rejectWithValue(error.status);
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
      if (error.status === 400) {
        return rejectWithValue(`Login error.`);
      }
      if (error.status === 500) {
        return rejectWithValue(`Server error.`);
      }
      return rejectWithValue(error.status);
    }
  }
);
