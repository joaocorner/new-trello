import { HomeStyled } from "../components/styles/Home.styled";

export default function Home() {
  return (
    <HomeStyled>
        <div>
          <a href="/main" className="link">
            <h1>To Do List!</h1>
          </a>
          <p>
            To use this site, access clicking on the Title above. Insert your 'To
            Do' list in the field and save. It'll be put in 'To Do' column. If you
            want to put it in 'Done', click in the title, or bring it back in 'To
            Do' by clicking again in the title. For erasing, click on the red X
          </p>
        </div>
    </HomeStyled>
  );
}
