import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { AuthState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    }
  }
})

export const { setIsAuth, setUser } = authSlice.actions;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectUsername = (state: RootState) => state.auth.user.username;
export default authSlice.reducer;
