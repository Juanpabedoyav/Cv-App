import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    
    --color-background: #EEF5F6;
    --color-buttonPhone: #2D4A4F;
    --color-buttonfacebook: #4B777E;

}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;


}

body{
    background-color: var();
}
`;