import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { searchTaskList } from "../store/taskSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.tasks);
  const searchList = useSelector((state) => state.task.searchList);
  const [searchTask, setSearchTask] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTask(value);
    dispatch(searchTaskList(value));
  };

  const toRender = searchTask.trim() ? searchList : task;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg my-4">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <input
        type="text"
        value={searchTask}
        onChange={handleSearch}
        placeholder="Search tasks..."
        className="w-full p-2 border rounded-md mb-4"
      />
      <AddTask />
      <ul className="space-y-3">
        {toRender.map((item) => (
          <TaskList key={item.id} task={item} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
