import styled from "styled-components";

export const StylesContainer = styled.div`
  background-color: #eef5f6;
  height: 100vh;
  color: var(--color-principal);
  p {
    font-weight: 600;
    .registrate {
      color: #629197;
      text-decoration-line: underline;
    }
  }
`;

export const ImgContainer = styled.div`
  /* border: 2px solid red; */
  width: 150px;
  margin: 0 auto;
`;

export const ImgLogo = styled.img`
  width: 100%;
  height: auto;
  margin-top: 80px;
  border-radius: 5px;
`;

export const TextH1 = styled.h1`
  font-size: 28px;
  margin-top: 30px;
`;

export const TextH4 = styled.h4`
  font-size: 16px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 2px solid red; */
  height: 110px;
  width: 245px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;

  .phone {
    height: 49px;
    width: 100%;
    border-width: 0;
    background-color: var(--color-principal);
    color: var(--color-blanco);
    border-radius: 1px;
  }
  .phone:hover {
    background-color: var(--color-principal);
  }
`;
