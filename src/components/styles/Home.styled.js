import styled from "styled-components";

export const HomeStyled = styled.div`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  text-align: justify;
  color: #dccaeb;

  a {
    text-decoration: none;
    color: inherit;
    width: fit-content;
    text-align: center;

    &:hover {
      color: #9fc131;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
  }
`;
