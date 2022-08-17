import Card from "react-bootstrap/Card";
import "./card.css";

const Output = ({text}) => {
  return (
    <Card className="bg-light" style={{ width: "15rem" }}>
      <Card.Body className="text">{text}</Card.Body>
    </Card>
  );
};

export default Output;
