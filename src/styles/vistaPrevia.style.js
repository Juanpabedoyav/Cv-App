import styled from "styled-components";

export const ContainerVistaPrevia = styled.div`
  background-color: #eef5f6;
  color: var(--color-principal);
  height: 100vh;
  .cabecera {
    /* border: 1px solid red; */
    font-size: 1.6rem;
    font-weight: 800;

    margin: 10px 0px;
    /* padding-left: 10px; */
    a {
      padding-top: 10px;
      padding-right: 20px;
      text-align: right;
      display: block;
    }
  }
  .title {
    font-size: 1.6rem;
    font-weight: 800;
  }
  .contenido {
    margin-top: 20px;
    padding: 10px;
    /* border: 1px solid yellow; */
  }
`;
