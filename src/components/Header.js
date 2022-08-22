import { StyledHeader } from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import TextBox from "./TextBox";

function Header() {
  return (
    <StyledHeader>
      <div>
        <Flex>
          <TextBox placeholder="Title" />
          <TextBox placeholder="Text" />
          <TextBox placeholder="Tag" />
          <StyledButton type="submit">Add Task</StyledButton>
        </Flex>
      </div>
    </StyledHeader>
  );
}

export default Header;
