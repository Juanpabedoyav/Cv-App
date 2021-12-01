import styled from 'styled-components';


export const TituloForm = styled.h1`
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: 800;
    /* color: rgb(158 170 186); */
`

export const InputForm = styled.input`
    outline: 1px solid rgb(158 170 186);
    padding: 1rem;
    margin-bottom: 1rem;
`

export const BotonDesplazar = styled.button`
    padding: 1rem 2rem;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-radius: 20px;
    color: ${props => props.color};
`

export const ContenedorInputs = styled.article`
    display: flex;
    flex-direction: column;
    margin: 2rem 2rem 1rem 2rem;
`

export const ContenedorBotones = styled.article`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    margin: ${props => props.margin};
`