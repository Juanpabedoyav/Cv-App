import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
      
      --color-background: #EEF5F6;      
      --color-blanco: #fff;
      --color-principal: #629197;

  }

  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Krub', sans-serif;

  }

  body{
      background-color: var(---color-background);
      text-align: center;
      height: 100vh;
  }
  .registrate{
    color: #629197;
  }
`;
