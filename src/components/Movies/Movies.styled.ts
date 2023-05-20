import { styled } from "styled-components";

export const MoviesStyled = styled.div`
  color: var(--spaceCadet);
  padding: 10px;
  text-align: center;

  h1 {
    font-size: 40px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
  ul a {
    text-decoration: none;
    font-size: 30px;
    cursor: pointer;
  }
`;
