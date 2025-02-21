import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/todos", {
          headers: { Authorization: token },
        })
        .then((res) => setTodos(res.data));
    }
  }, [token]);

  const addTodo = async () => {
    const res = await axios.post(
      "http://localhost:5000/todos",
      { task },
      { headers: { Authorization: token } }
    );
    setTodos([...todos, res.data]);
    setTask("");
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove the token from local storage
    setToken(null); // Clear the token state
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`, {
      headers: { Authorization: token },
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        <>
          <h1>To-Do List</h1>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="New task"
          />
          <button onClick={addTodo}>Add</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo._id}>
                {todo.task}{" "}
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={logout}>logout</button>
        </>
      )}
    </div>
  );
};

export default App;
