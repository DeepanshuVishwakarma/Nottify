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
    setDeletion: (state, action) => {
      console.log("sent deletion", action.payload.title);
      console.log("before deletion", state.tasks);
      const taskKeyToDelete = action.payload.key;
      const updatedTasks = state.tasks.filter(
        (task) => task.key !== taskKeyToDelete
      );
      state.tasks = updatedTasks;

      console.log("after deletion", state.tasks);
    },
  },
});

export const { setSlide, setTasks, setDeletion } = appSlice.actions;
export default appSlice.reducer;
