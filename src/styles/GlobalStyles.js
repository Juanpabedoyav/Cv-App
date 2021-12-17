import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
      
      --color-background: #eef5f6;      
      --color-blanco: #fff;
      --color-principal: #21a4ac;

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

  .swal2-label{
    color:black;
    font-weight:600;
    font-size: 1.2rem;
  }

  .swal2-html-container{
    color:black;
    font-weight:600;
    font-size: 1.3rem;
  }
.swal2-input::placeholder{
  font-weight: 400;
  color:#222;
}
.swal2-input{
  font-weight: 600;
  color:#333;
  font-size:1.1rem;
}  
.elegir-imagen {
    padding: 1rem;
    border-radius: 4px;
    margin-top: 25px;
    margin-bottom: 1rem;
    width: 90%;
    /* border: 1px solid red; */
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    background-color: var(--color-principal);
    color: var(--color-blanco);
    /* justify-content: left; */
  }
`;
