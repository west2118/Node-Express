import React, { useEffect } from "react";
import Tasks from "./components/Tasks";
import { useDispatch } from "react-redux";
import { replaceTask } from "./store/taskSlice";

export const API_URL = "http://localhost:3001/api/tasks";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Could not fetch data!");
        }

        const data = await response.json();
        dispatch(replaceTask(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div>
      <Tasks />
    </div>
  );
};

export default App;
