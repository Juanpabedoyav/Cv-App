import styled from 'styled-components'

export const ContenedorPlantillas = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    margin: 1rem 1rem 1rem 3rem;
`

export const ContenedorPlantilla = styled.article`
    display: flex;
    flex-direction: column;
    width: 7rem;
    /* background-color: rgb(229 233 242); */
`

export const ImagenPlantilla = styled.img`
    height: 100%;
`

export const TextoPlantilla = styled.p`
    font-size: .8rem;
`
export const ContenedorGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`

export const CasillaPlantilla = styled.input`
    position: relative;
    cursor: pointer;
    left: 2px;
    width: 0px;
    height: 0px;

    &:checked:before {
    content: "";
    display: block;
    position: relative;
    width: 34px;
    height: 34px;
    border: none;
    background-color: rgb(49 175 145);
    border-radius: 20px;
    transition: all 0.2s linear;
}
    &:checked:after {
    content: "";
    display: block;
    width: 10px;
    height: 18px;
    border: solid #FFF;
    border-width: 0 5px 5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 13px;
}
&:before {
    content: "";
    display: block;
    position: relative;
    width: 34px;
    height: 34px;
    border: 4px solid rgb(117 119 124);
    border-radius: 20px;
    background-color: transparent;
}


&:after {
  content: "";
    display: block;
    width: 10px;
    height: 18px;
    border: solid rgb(117 119 124);
    border-width: 0 5px 5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 13px;
}
`