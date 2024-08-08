import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initialState";

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },
    setUserAlreadyExist(state, action: PayloadAction<boolean>) {
      state.userAlreadyExist = action.payload;
    },
  },
});

export const { setUserEmail, setUserAlreadyExist } = userSlice.actions;

export default userSlice.reducer;
