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
  .input::placeholder {
    font-weight: 600;
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
      width: 100%;
      margin: 20px 0;
      background-color: var(--color-principal);
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
    margin-top: 50px;
    a {
      text-decoration-line: underline;
    }
  }
`;
