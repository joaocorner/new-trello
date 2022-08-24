import Card from "react-bootstrap/Card";
import "./card.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Output = ({ task, onDelete, onChange, goUp, goDown }) => {
  return (
    <div className="cards">
      <Card
        key={task.id}
        className="bg-light cards"
        style={{ width: "18rem", height: "10rem" }}
      >
        <FaTimes className="close" onClick={() => onDelete(task.id)} />
        <AiOutlineArrowUp className="uparrow" onClick={() => goUp(task.id)} />
        <AiOutlineArrowDown
          className="downarrow"
          onClick={() => goDown(task.id)}
        />
        <Card.Title className="title" onClick={() => onChange(task.id)}>
          {task.title}
        </Card.Title>
        <Card.Subtitle className="tag">{task.tag}</Card.Subtitle>
        <Card.Text className="text">{task.text}</Card.Text>
      </Card>
    </div>
  );
};

export default Output;
