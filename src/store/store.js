import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import getDataSlice from "./slices/getDataSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    getData: getDataSlice,
  },
});
