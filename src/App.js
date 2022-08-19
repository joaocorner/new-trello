import "./App.css";
import Column from "./components/Column";
import InputText from "./components/InputText";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   title: "Learn React",
    //   text: "Exam will be on the 15th of May",
    //   tag: "exam",
    //   status: false,
    // },
    // {
    //   id: 2,
    //   title: "Learn Node",
    //   text: "Node is essential for the backend",
    //   tag: "job",
    //   status: true,
    // },
    // {
    //   id: 3,
    //   title: "Learn Node",
    //   text: "Node is essential for the backend",
    //   tag: "job",
    //   status: true,
    // },
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
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="App">
      <Container className='external-border'>
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
