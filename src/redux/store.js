import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
