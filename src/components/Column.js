import Output from "./Output";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./columns.css";

const Column = ({ tasks, onDelete, onChange, goUp, goDown }) => {
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
          <Col className="columns">
            {" "}
            {todos.map((task) => (
              <Output
                key={task.id}
                task={task}
                onDelete={onDelete}
                onChange={onChange}
                goUp={goUp}
                goDown={goDown}
              />
            ))}
          </Col>
          <Col className="columns">
            {" "}
            {doing.map((task) => (
              <Output
                key={task.id}
                task={task}
                onDelete={onDelete}
                onChange={onChange}
                goUp={goUp}
                goDown={goDown}
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
                goUp={goUp}
                goDown={goDown}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Column;
