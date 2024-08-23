import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./FormData";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
