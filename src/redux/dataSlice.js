import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    getReccoData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getReccoData } = dataSlice.actions;

export default dataSlice.reducer;
