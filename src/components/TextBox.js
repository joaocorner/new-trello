import { TextBoxStyled } from "./styles/TextBox.styled";

const TextBox = ({placeholder}) => {
  return (
    <TextBoxStyled>
      <input type="text" placeholder={placeholder} />
    </TextBoxStyled>
  );
};

export default TextBox;
