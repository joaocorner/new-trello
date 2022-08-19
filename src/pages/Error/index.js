import "./error.css";

export default function Error() {
  return (
    <div className="container-error">
      <h1>Error</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <a href="/" className="link">
          Click here
        </a>{" "}
        to back to the main page
      </p>
    </div>
  );
}
