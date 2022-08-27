import Output from "./Output";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./columns.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Card from "react-bootstrap/Card";
import "./card.css";
import { FaTimes } from "react-icons/fa";

const Column = ({ tasks, onDelete, onChange, handleOnDragEnd, onDragEnd }) => {
  const todos = tasks.filter((task) => task.status === "ToDo");
  const doing = tasks.filter((task) => task.status === "Doing");
  const done = tasks.filter((task) => task.status === "Done");



  return (
    <>
      <Container>
        <Row className="rows-label">
          <Col className="columns">To Do</Col>
          <Col className="columns">Doing</Col>
          <Col className="columns">Done</Col>
        </Row>
        <Row className="rows">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todos">
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
                              onClick={() => onDelete(id)}
                            />
                            <Card.Title
                              className="title"
                              onClick={() => onChange(id)}
                            >
                              {title}
                            </Card.Title>
                            <Card.Subtitle className="tag">{tag}</Card.Subtitle>
                            <Card.Text className="text">{text}</Card.Text>
                          </Card>
                        </div>
                        //   <Output
                        //   ref={provided.innerRef}
                        //   {...provided.draggableProps}
                        //   {...provided.dragHandleProps}
                        //   task={task}
                        //   onDelete={onDelete}
                        //   onChange={onChange}
                        // />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Col>
              )}
            </Droppable>
          </DragDropContext>
          <Col className="columns">
            {" "}
            {doing.map((task) => (
              <Output
                key={task.id}
                task={task}
                onDelete={onDelete}
                onChange={onChange}
              />
            ))}
          </Col>
          <Col className="columns">
            {" "}
            {done.map((task) => (
              <Output
                key={task.id}
                task={task}
                onDelete={onDelete}
                onChange={onChange}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Column;
