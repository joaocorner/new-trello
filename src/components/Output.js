import Card from "react-bootstrap/Card";
import "./card.css";

const Output = ({ task, onDelete, onChange }) => {
  return (
    <div className="cards">
      <Card
        key={task.id}
        className="bg-light cards"
        style={{ width: "18rem", height: "10rem" }}
        onClick={() => onChange(task.id)}
        onDoubleClick={() => onDelete(task.id)}
      >
        <Card.Title className="title">{task.title}</Card.Title>
        <Card.Subtitle className="tag">{task.tag}</Card.Subtitle>
        <Card.Text className="text">{task.text}</Card.Text>
      </Card>
    </div>
  );
};

export default Output;
