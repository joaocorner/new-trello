import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  & > div {
    margin: auto;
    position: relative;
    top: 20px;
    width: 40%;
    height: auto;
  }
`;
