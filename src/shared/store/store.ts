// redux
import { configureStore } from "@reduxjs/toolkit";

// slices
import formSlice from "@/shared/store/formSlice/formSlice";
import menuSlice from "@/shared/store/menuSlice/menuSlice";
import userSlice from "@/shared/store/userSlice/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      formState: formSlice,
      menuState: menuSlice,
      userState: userSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
