import styled from "styled-components";

export const ImgContainer = styled.div`
  /* border: 2px solid red; */
  width: 40%;
  margin: 0 auto;
`;

export const ImgLogo = styled.img`
  width: 100%;
  height: auto;
  margin-top: 80px;
`;

export const TextH1 = styled.h1`
  margin-top: 30px;
`;

export const TextH4 = styled.h4`
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
    background-color: var(--color-buttonPhone);
    color: var(--color-blanco);
    border-radius: 1px;
  }

  .link {
    text-decoration-line: none;
  }
`;
