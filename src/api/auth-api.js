import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (authInstance.defaults.headers.authorization = '');
};

export const signupRequest = async credentials => {
  const { data } = await authInstance.post('/users/signup', credentials);
  setToken(data.token);
  return data;
};

export const loginRequest = async credentials => {
  const { data } = await authInstance.post('/users/login', credentials);
  setToken(data.token);
  return data;
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const { data } = await authInstance.post('/users/logout');
  return data;
};
