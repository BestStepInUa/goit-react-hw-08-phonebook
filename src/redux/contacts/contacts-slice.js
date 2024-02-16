import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts-operations';
import { initialState } from './contactsInitialState';
import { pending, rejected } from 'helpers/functions/redux';

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        const index = state.items.findIndex(task => task.id === payload.id);
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        rejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
