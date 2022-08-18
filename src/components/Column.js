import Output from "./Output";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Column = ({ tasks, onDelete, onChange }) => {
  const todos = tasks.filter((task) => task.status === "todo");
  const doing = tasks.filter((task) => task.status === "doing");
  const done = tasks.filter((task) => task.status === "done");

  return (
    <>
      <Container>
        <Row className="label">
          <Col className="todolab">To Do</Col>
          <Col className="doinglab">Doing</Col>
          <Col className="donelab">Done</Col>
        </Row>
        <Row className="cardtask">
          <Col className="cardtodo">
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
          <Col className="carddoing">
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
          <Col className="carddone">
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
