import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Output from "./Output";

const Input = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>To Do</Col>
          <Col>Doing</Col>
          <Col>Done</Col>
        </Row>
        <Row>
          <Col>
            <Output />
          </Col>
          <Col>
            <Output />
          </Col>
          <Col>
            <Output />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3" style={{ width: "15rem" }}>
              <InputGroup></InputGroup>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Col>
          <Col>
            {" "}
            <InputGroup className="mb-3" style={{ width: "15rem" }}>
              <InputGroup></InputGroup>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Col>
          <Col>
            {" "}
            <InputGroup className="mb-3" style={{ width: "15rem" }}>
              <InputGroup></InputGroup>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Button variant="primary" size="sm">
              +{" "}
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="primary" size="sm">
              +{" "}
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="primary" size="sm">
              +{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Input;
