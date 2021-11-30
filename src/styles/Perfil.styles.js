import styled from "styled-components";

export const  GridAbuperf = styled.div`
    
    display: grid;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: #EEF5F6;
    .styles-font-perfil{
        font-size: 15px ;
        font-weight: bold  ;
        color: #47525E ;
    
    }
    .styles-imagen{
        border-radius: 100%;
        width: 100%;
    }

`;

export const GridPaperf1 = styled.div`
    grid-column: 2/8;
    grid-row: 2/2;
    padding: 15px 0px ;
    /* border: 2px solid fuchsia; */
    
`;

export const GridPaperf2 = styled.div`
/* border: 2px solid fuchsia; */
    grid-column: 2/8;
    grid-row: 2/4; 
    font-size: 11px ;
    font-weight: bold  ;
    color: #47525E ;
    padding: 35px 0px ;
`;

export const GridPaperf3 = styled.div`
    grid-column: 9/14;
    grid-row: 2/4; 
    border-radius: 100%;

`;

export const GridPaperf4 = styled.div`
    
    grid-column: 3/7;
    grid-row: 4/4; 
    padding: 15px 0px;

`;

export const GridPaperf5 = styled.div`
   
    grid-column: 3/9;
    grid-row: 6/6; 
    padding: 15px 0px;
    
`;

export const GridPaperf6 = styled.div`
   
    grid-column: 2/13;
    grid-row: 8/8; 
    padding: 15px 0px;

`;

export const GridPhone = styled.div`
   
    grid-column: 2/3;
    grid-row: 4/4;
    font-size: 25px;
    color: #4B777E; 
    margin: auto;

`;

export const GridCerrar = styled.div`
   
    grid-column: 2/3;
    grid-row: 6/6; 
    font-size: 25px;
    color: #4B777E;
    margin: auto;

`;

export const GridTerminos = styled.div`
  
    grid-column: 2/3;
    grid-row: 8/8; 
    font-size: 25px;
    color: #4B777E;
    margin: auto;

`;