import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    searchList: [],
  },
  reducers: {
    replaceTask(state, action) {
      state.tasks = action.payload;
    },
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    completedTask(state, action) {
      const id = action.payload;
      const completedItem = state.tasks.find((task) => task.id === id);

      if (completedItem) {
        completedItem.completed = !completedItem.completed;
      }
    },
    editTask(state, action) {
      const { id, newTitle } = action.payload;
      const newTitleUpdate = state.tasks.findIndex((task) => task.id === id);
      if (newTitleUpdate !== 1) {
        state.tasks[newTitleUpdate].title = newTitle;
      }
    },
    searchTaskList(state, action) {
      if (action.payload) {
        state.searchList = state.tasks.filter((task) =>
          task.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.searchList = [];
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  replaceTask,
  completedTask,
  editTask,
  searchTaskList,
} = taskSlice.actions;

export default taskSlice.reducer;
