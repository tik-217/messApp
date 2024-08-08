import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initialState";

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },
  },
});

export const { setUserEmail } = userSlice.actions;

export default userSlice.reducer;
