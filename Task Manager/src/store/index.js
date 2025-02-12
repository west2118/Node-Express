import { configureStore } from "@reduxjs/toolkit";
import taskslice from "../store/taskSlice";

const store = configureStore({
  reducer: { task: taskslice },
});

export default store;
