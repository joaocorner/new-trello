import Card from "react-bootstrap/Card";
import "./card.css";

const tasks = [
  {
    id: 1,
    text: "Learn React",
    tag: "exam",
    status: "To Do",
  },
  {
    id: 2,
    text: "Learn Node",
    tag: "job",
    status: "Doing",
  },
];

const Output = () => {
  return (
    <div>
      {tasks.map((task) => (
        <Card className="bg-light" style={{ width: "15rem" }}>
          <Card.Body className="text">{task.text}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Output;
