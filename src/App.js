import "./App.css";
import { useState, useEffect } from "react";
import InputText from "./components/InputText";
import "./components/card.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaTimes } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  saveTasks,
  getTasksSave,
  deletingTask,
  getLocalItems,
} from "./features/storeTasks.js";

const App = () => {
  const [tasks, setTasks] = useState(getLocalItems());
  const todos = tasks.filter((task) => task.status === "ToDo");
  const doing = tasks.filter((task) => task.status === "Doing");
  const done = tasks.filter((task) => task.status === "Done");

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  }

  // Add Task - another way
  async function addTask(task) {
    try {
      const number = Math.floor(Math.random() * 10000) + 1;
      const id = "" + number;
      const newTask = await { ...task, id };
      setTasks([...tasks, newTask]);
      saveTasks(window.location.pathname, newTask);
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
    localStorage.setItem(window.location.pathname, json);
  }, [tasks]);

  // Fetches tasks from local storage
  useEffect(() => {
    async function getTasks() {
      const result = await getTasksSave(window.location.pathname);
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
          <Container>
            <Row className="rows-label">
              <Col className="columns">To Do</Col>
              <Col className="columns">Doing</Col>
              <Col className="columns">Done</Col>
            </Row>
            <Row className="rows">
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todo">
                  {(provided) => (
                    <Col
                      className="columns"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {" "}
                      {todos.map(({ id, text, title, tag }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              className="cards"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card
                                key={id}
                                className="bg-light cards"
                                style={{ width: "18rem", height: "10rem" }}
                              >
                                <FaTimes
                                  className="close"
                                  onClick={() => deleteTask(id)}
                                />
                                <Card.Title
                                  className="title"
                                  onClick={() => changeStatus(id)}
                                >
                                  {title}
                                </Card.Title>
                                <Card.Subtitle className="tag">
                                  {tag}
                                </Card.Subtitle>
                                <Card.Text className="text">{text}</Card.Text>
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Col>
                  )}
                </Droppable>
              </DragDropContext>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="doing">
                  {(provided) => (
                    <Col
                      className="columns"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {" "}
                      {doing.map(({ id, text, title, tag }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              className="cards"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card
                                key={id}
                                className="bg-light cards"
                                style={{ width: "18rem", height: "10rem" }}
                              >
                                <FaTimes
                                  className="close"
                                  onClick={() => deleteTask(id)}
                                />
                                <Card.Title
                                  className="title"
                                  onClick={() => changeStatus(id)}
                                >
                                  {title}
                                </Card.Title>
                                <Card.Subtitle className="tag">
                                  {tag}
                                </Card.Subtitle>
                                <Card.Text className="text">{text}</Card.Text>
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Col>
                  )}
                </Droppable>
              </DragDropContext>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="done">
                  {(provided) => (
                    <Col
                      className="columns"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {" "}
                      {done.map(({ id, text, title, tag }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              className="cards"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card
                                key={id}
                                className="bg-light cards"
                                style={{ width: "18rem", height: "10rem" }}
                              >
                                <FaTimes
                                  className="close"
                                  onClick={() => deleteTask(id)}
                                />
                                <Card.Title
                                  className="title"
                                  onClick={() => changeStatus(id)}
                                >
                                  {title}
                                </Card.Title>
                                <Card.Subtitle className="tag">
                                  {tag}
                                </Card.Subtitle>
                                <Card.Text className="text">{text}</Card.Text>
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Col>
                  )}
                </Droppable>
              </DragDropContext>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default App;
