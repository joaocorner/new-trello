import Output from "./Output";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./columns.css";

const Column = ({ tasks, onDelete, onChange }) => {
  const todos = tasks.filter((task) => task.status === false);
  const done = tasks.filter((task) => task.status === true);

  return (
    <>
      <Container>
        <Row className="rows">
          <Col className="columns">To Do</Col>
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
