import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./user/user";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
