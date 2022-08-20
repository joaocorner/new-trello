import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./input.css";

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

import { useState } from "react";

const InputText = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title || !text) {
      alert("Please enter a task with a title and text");
      return;
    }
    dispatch(addTodo({ title, text, tag, status }));
    setTitle("");
    setText("");
    setTag("");
    setStatus(false);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <div className="inputs">
          <InputGroup className="mb-3" style={{ width: "15rem" }}>
            <input
              type="text"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Insert you tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </InputGroup>
          <Button type="submit" variant="secondary" size="sm">
            Save Task
          </Button>
          <a className="back" href="/">
            Back to Home Page
          </a>
        </div>
      </form>
    </div>
  );
};

export default InputText;
