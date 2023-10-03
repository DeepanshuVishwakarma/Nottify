import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "hello this is a react app",
  slide: 0,
  tasks: [],
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSlide: (state, action) => {
      state.slide = action.payload;
    },
    setTasks: (state, action) => {
      console.log("sent task", action.payload);
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { setSlide, setTasks } = appSlice.actions;
export default appSlice.reducer;
