import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "../components/styles/Container.styled";
import { HomeStyled } from "../components/styles/Home.styled";
import Column from "../components/Column";

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <Column textLabel="To Do" />
        <Column textLabel="Doing" />
        <Column textLabel="Done" />
      </Container>
    </>
  );
}
