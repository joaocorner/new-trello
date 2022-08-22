import styled from "styled-components";

export const StyledColumn = styled.button`
  float: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;

  /* Clear floats after the columns */
  &:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  span {

  }
`;
