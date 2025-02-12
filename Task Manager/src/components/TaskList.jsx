import React, { useRef, useState } from "react";
import { API_URL } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { completedTask, deleteTask, editTask } from "../store/taskSlice";

const TaskList = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      if (!response.ok)
        throw new Error(`HTTP error status: ${response.status}`);
      dispatch(deleteTask(id));
    } catch (error) {
      console.error("Error deleting task failed!");
    }
  };

  const handleEditTask = async () => {
    if (!editedTitle.trim()) return;

    try {
      const response = await fetch(`${API_URL}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editedTitle }),
      });

      if (!response.ok)
        throw new Error(`HTTP error status: ${response.status}`);

      dispatch(editTask({ id: task.id, newTitle: editedTitle }));
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompletedTask = async () => {
    try {
      const response = await fetch(`${API_URL}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });

      if (!response.ok)
        throw new Error(`HTTP error status: ${response.status}`);

      dispatch(completedTask(task.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className="flex items-center justify-between bg-gray-200 p-3 rounded-md">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={task.completed}
          onChange={handleCompletedTask}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            className="p-1.5 border-black border w-60"
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span
            className={`text-lg ${
              task.completed ? "line-through text-red-600" : ""
            }`}>
            {task.title}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleEditTask}
            className="bg-green-500 py-1.5 px-6 rounded-md text-white">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-500 py-1.5 px-6 rounded-md text-white">
            Edit
          </button>
        )}
        <button
          onClick={() => handleDeleteTask(task.id)}
          className="bg-red-500 py-1.5 px-6 rounded-md text-white">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskList;
