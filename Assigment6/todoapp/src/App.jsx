import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task !== "") {
      setTasks([...tasks, task].sort());
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div
      style={{
        backgroundColor: "skyblue",
        marginLeft: "0px",
        width: "100vw",
        marginTop: "0vw",
        height: "1000px ",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "0vw" }}>Todo List</h1>
      <input
        style={{
          fontSize: "30px",
          color: "goldenrod",
          padding: "10px",
          textAlign: "center",
          padding: "10px",
          marginLeft: "50px",
        }}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button
        style={{
          color: "yellowgreen",
          fontSize: "30px",
          padding: "15px",
          margin: "10px",
        }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li
            style={{
              fontSize: "35px",
              margin: "10px",
              color: "black",
              listStyle: "square",
            }}
            key={index}
          >
            {task}
            <button
              style={{ color: "red", fontSize: "22px", margin: "10px" }}
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
