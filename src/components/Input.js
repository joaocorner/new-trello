import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Input = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
        <Button variant="outline-secondary" id="button-addon1">
          Add
        </Button>
      </InputGroup>
    </div>
  );
};

export default Input;
