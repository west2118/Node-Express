const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    profile:
      "https://flatlogic.com/assets/templates/user_management_react-e2f5cc54639078d41a53da2787cdf5b9eb894f4f93563060542158e72d689b1e.png",
    firstName: "John",
    lastName: "Melvin",
    email: "amandasmurf21@gmail.com",
    phone: "09123428712",
    role: "admin",
  },
  {
    id: 2,
    profile:
      "https://flatlogic.com/assets/templates/user_management_react-e2f5cc54639078d41a53da2787cdf5b9eb894f4f93563060542158e72d689b1e.png",
    firstName: "John2",
    lastName: "Melvin2",
    email: "amandasmurf212@gmail.com",
    phone: "09123428711",
    role: "user",
  },
];

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Get specific users
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Could not find user" });
  }
});

// Add user
app.post("/api/users", (req, res) => {
  if (
    !req.body.profile &&
    !req.body.firstName &&
    !req.body.lastName &&
    !req.body.phone &&
    !req.body.role
  ) {
    return res.status(404).json({ message: "Some input is missing" });
  }

  const newUser = {
    id: users.length + 1,
    profile: req.body.profile,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    role: req.body.role,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User could not find" });
  }

  users.splice(userIndex, 1);
  res.status(201).json({ message: "User Deleted" });
});

// Update user info
app.post("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    res.status(404).json({ message: "User could not find" });
  }

  user.profile = req.body.profile ?? user.profile;
  user.firstName = req.body.firstName ?? user.firstName;
  user.lastName = req.body.lastName ?? user.lastName;
  user.email = req.body.email ?? user.email;
  user.phone = req.body.phone ?? user.phone;
  user.role = req.body.role ?? user.role;

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
