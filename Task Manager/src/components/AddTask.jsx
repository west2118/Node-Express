import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { API_URL } from "../App";

const AddTask = () => {
  const dispatch = useDispatch();
  const task = useRef(null);

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!task.current.value.trim()) {
      alert("Please fill the field!");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: task.current.value }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const newTask = await response.json();

      dispatch(addTask(newTask));
      task.current.value = "";
    } catch (error) {
      console.error("Error adding task");
    }
  };

  return (
    <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
      <input
        type="text"
        ref={task}
        placeholder="Add a new task..."
        className="flex-1 p-2 border rounded-md"
      />
      <button className="bg-blue-500 text-white px-8 py-2 rounded-md font-semibold">
        Add
      </button>
    </form>
  );
};

export default AddTask;
