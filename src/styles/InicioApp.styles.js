import styled from "styled-components";

export const StylesContainer = styled.div`
  background-color: #eef5f6;
  height: 100vh;
  color: var(--color-principal);
  overflow: hidden;
  p {
    font-weight: 600;
    .registrate {
      color: var(--color-principal);
      text-decoration-line: underline;
    }
  }
  .icon-facebook {
    font-size: 1.5rem;
    margin-right: 15px;
  }
`;

export const ImgContainer = styled.div`
  width: 150px;
  margin: 0 auto;
`;

export const ImgLogo = styled.img`
  width: 100%;
  height: auto;
  margin-top: 50px;
  border-radius: 8px;
  border: 2px solid var(--color-blanco);
  box-shadow: 0 0 10px -1px var(--color-blanco);
`;

export const TextH1 = styled.h1`
  font-size: 28px;
  margin-top: 20px;
  font-weight: 800;
`;

export const TextH4 = styled.h4`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 180px;
  width: 245px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  .phone {
    height: 49px;
    width: 100%;
    border-width: 0;
    background-color: var(--color-principal);
    color: var(--color-blanco);
    border-radius: 2px;
  }
  .button-facebook {
    height: 49px;
    width: 100%;
    border-width: 0;
    background-color: #5890ff;
    color: var(--color-blanco);
    border-radius: 2px;
  }
  .button-google {
    height: 49px;
    width: 100%;
    border-width: 0;
    /* background-color: #4285F4; */
    background-color: #ffffff;
    color: black;
    border-radius: 2px;
    border: 1px solid #34a853;
    padding: 0;
    img {
      position: absolute;
      left: 20px;
    }
    span {
      /* border:1px solid red; */
      margin-left: 30px;
    }
  }
  .css-taj3dd:hover {
    background-color: #ffffff;
  }

  .phone:hover {
    background-color: var(--color-principal);
  }
`;
