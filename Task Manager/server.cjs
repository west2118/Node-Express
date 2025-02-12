const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

const tasks = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn Javascript", completed: true },
];

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Add new tasks
app.post("/api/tasks", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title !== undefined ? req.body.title : task.title;
  task.completed =
    req.body.completed !== undefined ? req.body.completed : task.completed;

  res.json(task);
});

// Delete a task
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task Deleted" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Serving running on port ${PORT}`);
});
