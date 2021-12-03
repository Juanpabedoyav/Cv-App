import styled from 'styled-components'


export const ContainerLogin = styled.div`
 background-color: #eef5f6;
  height: 100vh;
  color: var(--color-principal);
  overflow: hidden;
  .button {
    background-color: var(--color-principal);
    color: var(--color-blanco);
  }
  .button:hover {
    background-color: var(--color-principal);
    color: var(--color-blanco);
    background-color: #eef5f6;
    height: 710px;
  }
  .input {
    border: 1px solid var(--color-principal);
  }
  .pass {
    border: 1px solid var(--color-principal);
    margin-top: 15px;
  }
  .input::placeholder,
  .pass::placeholder {
    color: var(--color-principal);
  }
.botton-login {
  width: 82%;
  margin: 20px 0;
  background-color: var(--color-principal);
  color: var(--color-blanco);
  height:48px;
}
.botton-login:hover {
  background-color: var(--color-principal);
  color: var(--color-blanco);
}

`
export const H1 = styled.h1`
color: #629197;
font-weight: bold;
`;

export const Label = styled.div`
    width: 250px;
    margin: auto;
    padding-left: 63px;
    padding-top: 20px;
    color: #629197;
    
`;
export const Label1 = styled.div`
    width: 250px;
    margin: auto;
    padding-left: 80px;
    padding-top: 20px;
    color: #629197;
`;
export const IconUbi = styled.div`
    position: relative;
    top: 30px;
    right: 140px;
    font-size: 1.4rem;
`;
export const ForgotPassword = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    color: #629197;
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
/* border:1px solid red; */

  display: flex;
  
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  /* margin: 2rem 2rem 1rem 2rem; */

`;
export const TitleRegistro = styled.h1`
  margin-bottom: 20px;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-principal);
`;

