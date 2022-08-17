import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const AddButton = ({ onClick }) => {
  return (
    <Button variant="primary" size="sm" onClick={onClick}>
      Add
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
