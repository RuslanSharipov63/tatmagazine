import { configureStore } from "@reduxjs/toolkit";
import AdminOnChangeInput from "./AdminOnChangeInput";

export const store = configureStore({
  reducer: {
    admininput: AdminOnChangeInput,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
