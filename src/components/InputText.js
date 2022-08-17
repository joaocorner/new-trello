import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const InputText = () => {
  return (
    <InputGroup className="mb-3" style={{ width: "15rem" }}>
      <Form.Control as="textarea" aria-label="With textarea" />
    </InputGroup>
  );
};

export default InputText;
