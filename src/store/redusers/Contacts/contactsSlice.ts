import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { IContact } from "../../../models/IContact";
import { ContactState } from "./types";

const initialState: ContactState = {
  contacts: [],
  isLoading: false,
  error: "",
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactsFetching(state) {
      state.isLoading = true;
      state.error = ""
    },
    contactsFetchingSuccess(state, action: PayloadAction<IContact[]>) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    contactsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContact(state, action: PayloadAction<Omit<IContact, "id">>) {
      const newContact = {
        id: Number(new Date()),
        ...action.payload
      } as IContact
      state.contacts.push(newContact)
    },
    changeContact(state, action: PayloadAction<IContact>) {
      state.contacts = state.contacts.map(contact => {
        if (contact.id === action.payload.id) {
          return action.payload
        }
        return contact
      })
    },
    deleteContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    }
  }
})

export const { contactsFetching, contactsFetchingSuccess, contactsFetchingError, addContact, changeContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state: RootState) => state.contacts;
export default contactsSlice.reducer;
