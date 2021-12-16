import styled from "styled-components";

export const GridAbuperf = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: #eef5f6;
  margin-top: -40px;
  height: 100vh;
  .styles-font-perfil {
    font-size: 15px;
    font-weight: bold;
    color: var(--color-principal);
  }
  .styles-font-name {
    font-size: 15px;
    font-weight: bold;
    color: var(--color-principal);
    /* margin-top: 30px; */
    padding-top: 3vh;
  }
  .styles-font-correo {
    font-size: 13px;
    font-weight: bold;
    color: var(--color-principal);
    /* margin-top: 35px; */
  }
  .styles-imagen {
    border-radius: 100%;
    width: 100%;
  }
`;

export const GridPaperf1 = styled.div`
  grid-column: 2/8;
  grid-row: 2/2;
`;

export const GridPaperf2 = styled.div`
  grid-column: 2/8;
  grid-row: 3/3;
  font-size: 11px;
  font-weight: bold;
  color: var(--color-principal); ;
`;

export const GridPaperf3 = styled.div`
  grid-column: 9/14;
  grid-row: 2/4;
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

export const GridPaperf4 = styled.div`
  grid-column: 4/12;
  grid-row: 5/5;
  text-align: start;
  padding-top: 20px;
`;

export const GridPaperf5 = styled.button`
  grid-column: 4/12;
  grid-row: 6/6;
  text-align: start;
  padding-top: 0px;
  border: none;
`;

export const GridPaperf6 = styled.div`
  grid-column: 4/12;
  grid-row: 7/7;
  text-align: start;
  padding-top: 20px;
`;
export const GridPaperf7 = styled.div`
  grid-column: 4/12;
  grid-row: 8/8;
  text-align: start;
  padding-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;
export const GridPaperf8 = styled.div`
  grid-column: 4/12;
  grid-row: 9/9;
  text-align: start;
  padding-top: 20px;
`;

export const GridPhone = styled.div`
  grid-column: 2/4;
  grid-row: 5/5;
  font-size: 25px;
  color: var(--color-principal);
  padding-top: 12px;
`;

export const GridCerrar = styled.div`
  grid-column: 2/4;
  grid-row: 8/8;
  font-size: 25px;
  color: var(--color-principal);
  padding-top: 16px;
`;

export const GridEliminar = styled.div`
  grid-column: 2/4;
  grid-row: 9/9;
  font-size: 25px;
  color: var(--color-principal);
  padding-top: 15px;
`;
export const GridPolitics = styled.div`
  grid-column: 2/4;
  grid-row: 6/6;
  font-size: 25px;
  color: var(--color-principal);
  padding-top: 15px;
`;
export const GridContacus = styled.div`
  grid-column: 2/4;
  grid-row: 7/7;
  font-size: 25px;
  color: var(--color-principal);
  padding-top: 15px;

  &:hover {
    cursor: pointer;
  }
`;
