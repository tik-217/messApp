import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initialState";

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = menuSlice.actions;

export default menuSlice.reducer;
