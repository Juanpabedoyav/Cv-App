import styled from "styled-components";

export const GridGranp = styled.div`
  /* border: 2px solid fuchsia; */
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(14, 1fr);
  grid-template-rows: 30px 167px 25px 320px 5px 20px 70px;
  background-color: #eef5f6;
  height: 100vh;
`;

export const GridUncleVideo = styled.iframe`
  /* border: 2px solid red; */
  grid-column: 2/14;
  grid-row: 2/2;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const GridUncleList = styled.div`
  /* border: 2px solid blue; */
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(14, 1fr);
  grid-column: 2/14;
  grid-row: 4/4;
  .tutorials-styles {
    font-weight: 600;
    text-align: start;
    padding: 3px 10px;
    color: #47525e;
    border: 1px solid #47525e30;
    border-radius: 7px;
    background-color: #dafdf739;
    box-shadow: 0px 1px 5px;
    height: 2rem;
    &:hover {
      color: var(--color-principal);
    }
  }
`;
export const Tutorial1 = styled.div`
  /* border: 2px solid green; */
  grid-column: 1/12;
  grid-row: 2/2;
`;
export const Tutorial2 = styled.div`
  /* border: 2px solid green; */
  grid-column: 1/13;
  grid-row: 4/4;
`;
export const Tutorial3 = styled.div`
  /* border: 2px solid green; */
  grid-column: 1/13;
  grid-row: 6/6;
`;
export const Tutorial4 = styled.div`
  /* border: 2px solid green; */
  grid-column: 1/13;
  grid-row: 8/8;
`;
export const Tutorial5 = styled.div`
  /* border: 2px solid green; */
  grid-column: 1/13;
  grid-row: 10/10;
`;
export const Tutorial6 = styled.div`
  /* border: 2px solid green; */
  grid-column: 1/13;
  grid-row: 12/12;
`;
export const Tutorial7 = styled.div`
  /* border: 2px solid green; */
  grid-column: 1/13;
  grid-row: 14/14;
`;
export const ButtonBack = styled.div`
  /* border: 2px solid green; */
  grid-column: 13/14;
  grid-row: 7/7;
  .regresar {
    background-color: var(--color-principal);
  }
  .regresar:hover {
    background-color: var(--color-principal);
  }
`;
