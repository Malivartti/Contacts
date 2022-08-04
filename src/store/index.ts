import { configureStore } from "@reduxjs/toolkit";
import contacts from "./redusers/Contacts/contactsSlice"
import auth from "./redusers/Auth/authSlice"

const rootReducer = {
  contacts,
  auth,
}

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
