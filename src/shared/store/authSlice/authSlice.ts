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
  },
});

export const { setUserAlreadyExist, setLoginInvalidCred } = authSlice.actions;

export default authSlice.reducer;
