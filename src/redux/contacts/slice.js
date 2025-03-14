import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, addContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
    })
    .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
    })
    .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
    });
  },
});

export const contactsReducer = slice.reducer;