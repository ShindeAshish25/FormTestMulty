import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(state.value, action.payload);
      //   state.value.name = action.payload;
    },
  },
});
export const { update } = counterSlice.actions;

export default counterSlice.reducer;
