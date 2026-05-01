import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("https://ai-task-manager-opsw.onrender.com/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (task.trim() === "") return;
    await axios.post("https://ai-task-manager-opsw.onrender.com/tasks", { title: task });
    setTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://ai-task-manager-opsw.onrender.com/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Task Manager 🚀</h1>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button style={styles.addBtn} onClick={addTask}>
          Add
        </button>
      </div>

      <div style={styles.taskList}>
        {tasks.map((t) => (
          <div key={t.id} style={styles.task}>
            <span>{t.title}</span>
            <button
              style={styles.deleteBtn}
              onClick={() => deleteTask(t.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "Arial",
    color: "white",
  },
  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "none",
  },
  addBtn: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  taskList: {
    marginTop: "30px",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px auto",
    width: "300px",
    background: "#222",
    padding: "10px",
    borderRadius: "6px",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;