import { createSlice } from "@reduxjs/toolkit";

export const getDataSlice = createSlice({
  name: "getData",
  initialState: {
    data: 0,
  },
  reducers: {
    putData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { putData } = getDataSlice.actions;

export default getDataSlice.reducer;
