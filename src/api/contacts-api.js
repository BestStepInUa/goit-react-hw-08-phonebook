import instance from './auth-api';

export const fetchContactsRequest = async () => {
  const data = await instance.get('/contacts');
  return data;
};

export const addContactRequest = async ({ name, number }) => {
  const data = await instance.post('/contacts', { name, number });
  return data;
};

export const deleteContactRequest = async contactId => {
  const data = await instance.delete(`/contacts/${contactId}`);
  return data;
};
