import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signupRequest = async credentials => {
  console.log(credentials);
  const { data } = await authInstance.post('/users/signup', credentials);
  return data;
};

export const loginRequest = async credentials => {
  const { data } = await authInstance.post('/users/login', credentials);
  return data;
};
