import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  addContactRequest,
  deleteContactRequest,
} from 'api';

const errorHandler = (error, thunkAPI) =>
  thunkAPI.rejectWithValue(error.message);

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await fetchContactsRequest();
    return data;
  } catch (error) {
    return errorHandler();
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    try {
      const { data } = await addContactRequest({ name, number });
      return data;
    } catch (error) {
      return errorHandler();
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const { data } = await deleteContactRequest(contactId);
      return data;
    } catch (error) {
      return errorHandler();
    }
  }
);
