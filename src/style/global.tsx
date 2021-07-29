import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Resets */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
  }
  button{
  outline: none;
 border: none;
  }
`;
