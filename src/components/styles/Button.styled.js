import styled from "styled-components";

export const StyledButton = styled.button`
  width: 400px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  background: linear-gradient(to left top, #000, #4e2d69) fixed;
  border-radius: 10px;
  border: 5px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.5s;

  &:hover {
    border: 5px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(to left top, #000, #8b5db0) fixed;
    cursor: pointer;
  }
  &:focus {
    background: linear-gradient(to left top, #8b5db0, #000) fixed;
  }
`;
