import styled, { keyframes } from "styled-components";

const Movearrow = keyframes`

  0% {
    transform: translateY(10px);
  }

  25% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  75% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(10px);
  }

`;

export const HomeContainer = styled.div`
  height: 100vh;
  margin-top: 40px;
  background-color: #eef5f6;
  color: var(--color-principal);
  .text-h2 {
    margin-bottom: 20px;
    font-size: 22px;
  }
  .create {
    background-color: var(--color-principal);
    border-radius: 5px;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
  .icon {
    color: var(--color-blanco);
    font-size: 100px;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .text-create {
    /* border: 1px solid green; */
    color: var(--color-principal);
    background-color: var(--color-blanco);
    padding: 10px;
    font-size: 18px;
  }
  .box {
    padding-top: 5px;
  }
  .recomendaciones-container {
    border-bottom: 1px solid var(--color-principal);
    display: flex;
    justify-content: left;
    width: 80vw;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .recomendaciones {
    font-size: 18px;
    font-weight: 600;
  }
  .text-p {
    /* border: 1px solid green; */
    width: 80vw;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    font-size: 24px;
    text-align: left;
  }
  .arrow {
    /* border: 1px solid green; */
    width: 80vw;
    display: flex;
    justify-content: right;
    font-size: 32px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    animation: ${Movearrow} 1.5s ease infinite;
  }
`;
