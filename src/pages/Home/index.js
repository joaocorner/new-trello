import "./home.css";

export default function Home() {
  return (
    <div className="container-home">
      <a href="/todolist" className="link">
        <h1 className="title">To Do List!</h1>
      </a>
      <p className="howto">
        To use this site, access clicking on the Title above. Insert your 'To Do' list in the field and save. It'll be put in 'To Do' column. If you want to put it in 'Done', click in the title, or bring it back in 'To Do' by clicking again in the title. For erasing, click on the red X If you want to create a new list, write its name after the / in the URL. For example, if you want to create a list called 'Shopping', you should write new-trello.vercel.app/Shopping
      </p>
    </div>
  );
}
