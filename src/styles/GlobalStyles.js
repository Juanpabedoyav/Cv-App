import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
      
      --color-background: #eef5f6;      
      --color-blanco: #fff;
      --color-principal: #629197;

  }

  html{
    background-color: #eef5f6;
  }

  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Krub', sans-serif;

  }

  body{
      background-color: #eef5f6;
      text-align: center;
      height: 100vh;
  }

  .swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 0.25 em;
    background: initial;
    background-color: var(--color-principal);
    color: #fff;
    font-size: 1em;
  }
  
`;
