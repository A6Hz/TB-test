import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./slice/app";

export const store = configureStore({
  reducer: {
    file: fileReducer,
  },
});
