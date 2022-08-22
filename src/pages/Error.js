import { ErrorStyled } from "../components/styles/Error.styled";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <ErrorStyled>
      <h1>Error</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link to="/home" className="link">
          Click here
        </Link>{" "}
        to back to the main page
      </p>
    </ErrorStyled>
  );
}
