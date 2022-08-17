import Card from "react-bootstrap/Card";
import "./card.css";

const tasks = [
  {
    id: 1,
    title: "Learn React",
    text: "Exam will be on the 15th of May",
    tag: "exam",
    status: "To Do",
  },
  {
    id: 2,
    title: "Learn Node",
    text: "Node is essential for the backend",
    tag: "job",
    status: "Doing",
  },
];

const Output = () => {
  return (
    <div>
      {tasks.map((task) => (
        <Card key={task.id} className="bg-light" style={{ width: "15rem" }}>
          <Card.Title className="title">{task.title}</Card.Title>
          <Card.Body className="text">{task.text}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Output;
