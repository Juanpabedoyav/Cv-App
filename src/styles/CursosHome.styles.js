import styled from "styled-components";

export const CursosContainer = styled.div`
  /* border: 1px solid green; */
  width: 80vw;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  .curso-card {
    margin-bottom: 50px;
    width: inherit;
  }
  .frame {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0 0 20px 1px var(--color-principal);
  }
  .curso-hidden {
    background-color: red;
    margin-top: 100px;
    visibility: hidden;
  }
`;
