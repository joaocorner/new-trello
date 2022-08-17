import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Output from "./Output";
import InputText from "./InputText";
import Button from "./AddButton";

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
            <Output text="" />
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
            <InputText />
          </Col>
          <Col>
            <InputText />
          </Col>
          <Col>
            <InputText />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button />
          </Col>
          <Col>
            <Button />
          </Col>
          <Col>
            <Button />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Input;
