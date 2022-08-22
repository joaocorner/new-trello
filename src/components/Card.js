import { StyledCard } from "./styles/Card.styled";

export default function Card({ title, text, tag }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>{tag}</p>
      </div>
    </StyledCard>
  );
}
