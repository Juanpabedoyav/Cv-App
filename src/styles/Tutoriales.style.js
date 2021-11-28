import styled from "styled-components";


export const GridGranp = styled.div`
    /* border: 2px solid fuchsia; */
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-template-rows: 20px 167px 40px 250px 40px 43px 22px;
    
  
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
    .tutorials-styles{
        text-align : start ;
        padding: 0px 10px;
        color: #47525E;
    &:hover{
        color: #19b6ce;
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
    grid-column: 10/14;
    grid-row: 6/6; 
`;





