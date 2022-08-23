import "./App.css";
import Column from "./components/Column";
import InputText from "./components/InputText";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  saveTasks,
  getTasksSave,
  deletingTask,
  getLocalItmes,
} from "./features/storeTasks.js";

const App = () => {
  const [tasks, setTasks] = useState(getLocalItmes());

  // Add Task - another way
  async function addTask(task) {
    try {
      const id = (await Math.floor(Math.random() * 1000000)) + 1;
      const newTask = await { ...task, id };
      setTasks([...tasks, newTask]);
      saveTasks("@SavedTasks", newTask);
    } catch {
      alert("Error");
    }
  }

  // Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    deletingTask(tasks, id);
  }

  // Changing Status
  function changeStatus(id) {
    let updatedTodos = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status:
            task.status === "ToDo"
              ? "Doing"
              : task.status === "Doing"
              ? "Done"
              : "ToDo",
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTodos);
  }

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem("@SavedTasks", json);
  }, [tasks]);

  // Fetches tasks from local storage
  useEffect(() => {
    async function getTasks() {
      const result = await getTasksSave("@SavedTasks");
      if (result.length === 0) {
        console.log("No tasks found");
      }
      setTasks(result);
    }
    getTasks();
  }, []);

  return (
    <div className="App">
      <Container className="external-border">
        <Row className="rows">
          <Col className="columns">
            <InputText onAdd={addTask} />
          </Col>
        </Row>
        <Row className="rows">
          <Col className="columns">
            {tasks.length > 0 ? (
              <Column
                tasks={tasks}
                onDelete={deleteTask}
                onChange={changeStatus}
              />
            ) : (
              <Row className="label">
                <Col className="columns">To Do</Col>
                <Col className="columns">Doing</Col>
                <Col className="columns">Done</Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
