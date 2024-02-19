import instance from './auth-api';

export const fetchContactsRequest = async () => {
  const data = await instance.get('/contacts');
  return data;
};

export const addContactRequest = async ({ name, phone }) => {
  const { data } = await instance.post('/contacts', { name, phone });
  return data;
};

export const deleteContactRequest = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
