import "./App.css";
import Column from "./components/Column";
import InputText from "./components/InputText";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";
import { removeTodo } from "./features/todoSlice";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      text: "Exam will be on the 15th of May",
      tag: "exam",
      status: false,
    },
  ]);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();


  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

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
              <Column tasks={tasks} onCheck={handleTodoDone} />
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
