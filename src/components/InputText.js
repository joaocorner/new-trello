import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useState } from "react";

const InputText = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a task");
      return;
    }

    onAdd({ title, text, tag, status });
    setTitle("");
    setText("");
    setTag("");
    setStatus("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
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
            <input type="submit" value="Save Task" />
            {/* <Button type="submit" variant="secondary" size="sm">
              Add
            </Button> */}
          </InputGroup>
      </div>
    </form>
  );
};

export default InputText;
