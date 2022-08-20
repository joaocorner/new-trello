import Output from "./Output";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./columns.css";

import { useSelector } from "react-redux";

const Column = ({ onDelete }) => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <Container>
        <Row className="rows-label">
          <Col className="columns">To Do</Col>
          <Col className="columns">Done</Col>
        </Row>
        <Row className="rows">
          <Col className="columns">
            {" "}
            {todos.map((todo) =>
              todo.status === false ? (
                <Output
                  key={todo.id}
                  title={todo.title}
                  text={todo.text}
                  tag={todo.tag}
                  onDelete={onDelete}
                />
              ) : null
            )}
          </Col>
          <Col className="columns">
            {" "}
            {todos.map((todo) =>
              todo.status === true ? (
                <Output
                  key={todo.id}
                  title={todo.title}
                  text={todo.text}
                  tag={todo.tag}
                  onDelete={onDelete}
                />
              ) : null
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Column;
