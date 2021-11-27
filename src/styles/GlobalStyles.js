import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
      
      --color-background: #EEF5F6;
      --color-buttonPhone: #4B777E;
      /* --color-buttonfacebook: #2D4A4F; */
      --color-blanco: #fff;      

  }

  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;


  }

  body{
      background-color: var(---color-background);
      text-align: center;
      height: 100vh;
  }
`;
