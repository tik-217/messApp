import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initialState";

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserAlreadyExist(state, action: PayloadAction<boolean>) {
      state.userAlreadyExist = action.payload;
    },
    setLoginInvalidCred(state, action: PayloadAction<boolean>) {
      state.loginInvalidCred = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setGeneralErrorLogin(state, action: PayloadAction<boolean>) {
      state.generalErrorLogin = action.payload;
    },
  },
});

export const {
  setUserAlreadyExist,
  setLoginInvalidCred,
  setIsAuth,
  setGeneralErrorLogin,
} = authSlice.actions;

export default authSlice.reducer;
