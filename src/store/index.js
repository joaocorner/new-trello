import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/todoSlice"; 

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
