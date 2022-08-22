import Card from "react-bootstrap/Card";
import "./card.css";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

const Output = (props) => {
  const dispatch = useDispatch();
  const handleDeleteMessageClick = () => {

    dispatch(removeTodo(props.todo.id))
}

  return (
    <div className="cards">
      <Card
        // key={props.id}
        className="bg-light cards"
        style={{ width: "18rem", height: "10rem" }}
      >
        <FaTimes className="close" onClick={handleDeleteMessageClick} />
        {/* <Card.Title className="title" onClick={() => onChange(props.task.id)}>
          {props.task.title}
        </Card.Title> */}
        <Card.Title className="tag">{props.title}</Card.Title>
        <Card.Subtitle className="tag">{props.tag}</Card.Subtitle>
        <Card.Text className="text">{props.text}</Card.Text>
      </Card>
    </div>
  );
};

export default Output;
