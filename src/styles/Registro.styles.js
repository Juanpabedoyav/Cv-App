import styled from "styled-components";

export const ImgRegistro = styled.div`
  /* border: 1px solid red; */
  width: 100px;
  margin: 0px auto;
  margin-top: 10px;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
export const TitleRegistro = styled.h1`
  margin-bottom: 20px;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-principal);
`;
export const StyleRegistro = styled.div`
  height: 100vh;
  background-color: #eef5f6;
  width: 100%;
  overflow-x: hidden;
  .input {
    color: var(--color-principal);
  }
  .input::placeholder {
    font-weight: 600;
    color: var(--color-principal);
  }
  .button {
    background-color: var(--color-principal);
    color: var(--color-blanco);
    margin-bottom: 0;
  }
  .button:hover {
    background-color: var(--color-principal);
    color: var(--color-principal);
  }
  .input:focus {
    border: 1px solid var(--color-principal);
  }
  .formulario {
    margin-top: 10px;
    padding: 0px 20px;
    .label {
      margin-top: 10px;
      margin-bottom: 5px;
      font-weight: 600;
      color: var(--color-principal);
    }
    .botton-submit {
      width: 92%;
      margin: 15px 0 20px 0;
      background-color: var(--color-principal);
      &:hover {
        color: var(--color-blanco);
      }
    }
  }
  .back-container {
    width: 100vw;
    display: flex;
    justify-content: left;
    margin-bottom: 30px;
  }
  .back {
    font-size: 1.4rem;
    margin-top: 10px;
    margin-left: 15px;
    color: var(--color-principal);
  }
  p {
    font-weight: 600;
    color: var(--color-principal);
    margin: 0;
    a {
      text-decoration-line: underline;
    }
  }
  .icono-upload {
    font-size: 22px;
    margin-right: 10px;
  }
  .elegir-imagen {
    outline: 1px solid var(--color-principal);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 92%;
    /* border: 1px solid red; */
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    background-color: var(--color-blanco);
    color: var(--color-principal);
    /* justify-content: left; */
  }
  .elegir-imagen:hover {
    background-color: var(--color-blanco);
  }
`;

export const InputForm = styled.input`
  /* border:1px solid red; */
  outline: 1px solid var(--color-principal);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 92%;

  &::placeholder {
    color: var(--color-principal);
  }
`;

export const ContenedorInputs = styled.article`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 2rem 2rem 1rem 2rem; */
`;
