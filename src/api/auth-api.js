import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signupRequest = async credentials => {
  const { data } = await authInstance.post('/users/signup', credentials);
  return data;
};

export const loginRequest = async credentials => {
  const { data } = await authInstance.post('/users/login', credentials);
  return data;
};

export const currentRequest = async token => {
  authInstance.defaults.headers.authorization = `Bearer ${token}`;
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    authInstance.defaults.headers.autorization = '';
    throw error;
  }
};
