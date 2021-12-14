import styled from 'styled-components';

export const ContenedorInfoPrincipal = styled.article`
    background-color: #07343a;
    color: white;
    font-size: 1rem;
    img {
        display: inline;
        text-align: center;
        width: 25%;
        border-radius: 50%;
        border: 3px solid white;
        margin-top: 1.5rem;
    }
    h1 {
        font-size: .85rem;
        font-weight: 600;
        color: white;
    }
    .spanDiv {
        gap: .5rem;
        text-transform: uppercase;
        span {
            font-weight: 600;
            font-size: .7rem;
        }
    }
    div {
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: .6rem;
        p {
            font-size: .6rem;
            border-right: 1px solid white;
            padding-right: .7rem;
            margin: .4rem 0;
            &:nth-child(4) {
                border-right: 0;
            }
        }
    }
`

export const ContenedorDetalles = styled.article`
    margin: 0 auto;
    padding-top: 1.5rem;
    width: 90%;   
    h4 {
        font-size: .6rem;
        text-align: left;
        font-weight: 600;
        &:nth-child(4) {
            margin-bottom: 1rem;
        }
    }
    .contenedorInformacion {
        display: flex;
        gap: 1rem;
    }
    .tituloHabilidades {
        font-size: .6rem;
        text-align: left;
        font-weight: 900;
        background-color: #d9d9d9;
        margin-bottom: .6rem;
    }
    .textoHabilidades {
        text-align: left;
        font-size: .7rem;
    }
    .parrafoPerfil {
        font-size: .6rem;
        font-weight: 600;
        text-align: left;
        margin-bottom: 1rem;
    }
    .grid-1 {
        width: 35%;
    }
    .grid-2 {
        width: 55%;
    }
    .habilidadBarra {
        width: 40px;
        height: 100%;
        padding: 3px 50px;
        border-radius: 8px;
        margin-bottom: .6rem;
        background-color: #000;
    }
    .tituloExperiencia {
        font-size: .57rem;
        text-align: left;
        font-weight: 800;
    }
    .fechaExperienciaProfesional {
        font-weight: 400;
        font-size: .45rem;
        text-align: left;
    }
    .listasExperiencia {
        font-size: .5rem;
        font-weight: 600;
        text-align: initial;
        margin-left: .7rem;
        &:nth-child(3) {
            margin-bottom: 1rem;
        }
    }
`