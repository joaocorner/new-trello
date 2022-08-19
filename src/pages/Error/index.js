import "./error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-error">
      <h1>Error</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link to="/" className="link">Click here</Link> to back to the main page
      </p>
    </div>
  );
}
