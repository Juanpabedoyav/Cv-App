import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  height: 100vh;

  .principal-title {
    padding-top: 1vh;
  }

  h1 {
    font-weight: 800;
  }

  h2 {
    text-align: center;
    color: #fff;
  }

  h3 {
    text-align: start;
    padding: 0 7vh 1vh;
    color: grey;
    font-weight: 600;
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
  .elegir-imagen:hover {
    background-color: var(--color-principal);
  }
`;
export const ContainerTitle = styled.div`
  background-color: grey;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3vh;
  margin-top: 4vh;
`;
export const ContainerprofileImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
`;

export const ContainerPersonalData = styled.div``;
export const ContainerProfesionalProfile = styled.div``;
export const ContainerStudies = styled.div``;
