import { configureStore } from "@reduxjs/toolkit";
import text from "./text";
const store = configureStore({
  reducer: {
    text,
  },
});
export default store;
