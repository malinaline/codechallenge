import { styled } from "styled-components";

export const MoviesStyled = styled.div`
  color: var(--spaceCadet);
  padding: 10px;
  text-align: center;

  h1 {
    font-size: 60px;
    padding-bottom: 5px;
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
  }
  ul a {
    text-decoration: none;
    font-size: 30px;
    color: var(--spaceCadet);
    cursor: pointer;
  }
`;
