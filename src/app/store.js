import { configureStore } from "@reduxjs/toolkit";
import turnSlice from "../components/boxSlice";

const store = configureStore({
  reducer: {
    turn: turnSlice,
  },
});

export default store;
