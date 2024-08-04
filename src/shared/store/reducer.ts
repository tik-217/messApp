import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "@/shared/store/initialState";

export const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = formSlice.actions;

export default formSlice.reducer;
