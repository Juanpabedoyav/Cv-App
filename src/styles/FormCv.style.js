import styled from "styled-components";

export const FormCvContainer = styled.div`
  background-color: #eef5f6;
  color: var(--color-principal);
  height: 100vh;
  .react-tag-input {
    outline: 1px solid var(--color-principal);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    input{
      color: var(--color-principal);
      
    }
    input::placeholder{
      color: var(--color-principal);

    }
    .react-tag-input__tag {
      background-color: var(--color-principal);
      color:white;
      font-weight:600;
      padding: 5px;
    }
    .react-tag-input__tag__remove{
      background-color: var(--color-principal);
      color:white;      
      &:after{
          background-color:white;
      } 
      &:before{
          background-color:white;
    }    
    
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
  .perfil {
    outline: 1px solid var(--color-principal);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    color: black;
    resize: none;
    color: var(--color-principal);
    &::placeholder {
      color: var(--color-principal);
    }
  }

  .elegir-imagen {
    outline: 1px solid var(--color-principal);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 100%;
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
