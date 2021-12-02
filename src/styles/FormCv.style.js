import styled from "styled-components";

export const FormCvContainer = styled.div`
  background-color: #eef5f6;
  color: var(--color-principal);
  height: 100vh;
`;

export const TituloForm = styled.h1`
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: 800;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  /* color: rgb(158 170 186); */
`;

export const InputForm = styled.input`
  outline: 1px solid var(--color-principal);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  &::placeholder {
    color: var(--color-principal);
  }
`;

export const ContenedorInputs = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 1rem 2rem;
`;

export const ContenedorBotones = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  margin: ${(props) => props.margin};
  .button {
    background-color: var(--color-principal);
    color: var(--color-blanco);
  }
  .button:hover {
    background-color: var(--color-principal);
    color: var(--color-blanco);
  }
`;
