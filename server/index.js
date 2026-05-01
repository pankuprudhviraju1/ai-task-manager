const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// CREATE
app.post("/tasks", (req, res) => {
  const task = { id: Date.now(), title: req.body.title };
  tasks.push(task);
  res.json(task);
});

// READ
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ success: true });
});

app.listen(3001, () => console.log("Server running on port 3001"));