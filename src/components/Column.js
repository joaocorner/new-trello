import Output from "./Output";

const Column = ({ tasks, onDelete, onChange }) => {

  return (
    <>
      {tasks.map((task) => (
        <Output
          key={task.id}
          task={task}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </>
  );
};

export default Column;
