import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
    email: "",
    phone: "",
    address: "",

    sccBoard: "",
    sccCGPA: "",
    sccPassingYear: "",
    hscBoard: "",
    hscCGPA: "",
    hscPassingYear: "",
    graduationBoard: "",
    graduationCGPA: "",
    graduationPassingYear: "",
    postGraduationBoard: "",
    postGraduationCGPA: "",
    postGraduationPassingYear: "",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(state.value, action.payload);
        state.value.name = action.payload;
        state.value.email = action.payload;
        state.value.phone = action.payload;
        state.value.address = action.payload;
        
        state.value.sccBoard = action.payload;
        state.value.sccCGPA = action.payload;
        state.value.sccPassingYear = action.payload;

        state.value.hscBoard = action.payload;
        state.value.hscCGPA = action.payload;
        state.value.hscPassingYear = action.payload;

        state.value.graduationBoard = action.payload;
        state.value.graduationCGPA = action.payload;
        state.value.graduationPassingYear = action.payload;

        state.value.postGraduationBoard = action.payload;
        state.value.postGraduationCGPA = action.payload;
        state.value.postGraduationPassingYear = action.payload;
        
    },
  },
});
export const { update } = counterSlice.actions;

export default counterSlice.reducer;
