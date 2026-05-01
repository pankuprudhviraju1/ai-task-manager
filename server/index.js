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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});