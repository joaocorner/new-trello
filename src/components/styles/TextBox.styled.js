import styled from "styled-components";

export const TextBoxStyled = styled.div`
  margin: auto;

  input {
    width: 400px;
    padding: 10px;
    font-size: 18px;
    outline: none;
    background: linear-gradient(to left top, #000, #22132e) fixed;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.5s;
    text-align: center;
  }

  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(to left top, #000, #4e2d69) fixed;
  }
`;
