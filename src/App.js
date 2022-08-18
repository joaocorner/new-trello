import "./App.css";
import Column from "./components/Column";
import InputText from "./components/InputText";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      text: "Exam will be on the 15th of May",
      tag: "exam",
      status: "To Do",
    },
    {
      id: 2,
      title: "Learn Node",
      text: "Node is essential for the backend",
      tag: "job",
      status: "Doing",
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Changing Status
  const changeStatus = (id) => {
    console.log(id);
  };

  return (
    <div className="App">
      <InputText onAdd={addTask} />
      {tasks.length > 0 ? (
        <Column tasks={tasks} onDelete={deleteTask} onChange={changeStatus} />
      ) : (
        " No tasks to display"
      )}
    </div>
  );
};

export default App;
