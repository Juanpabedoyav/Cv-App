import React from 'react'
import { Link } from 'react-router-dom'
import { BotonDesplazar, ContenedorBotones, ContenedorInputs, InputForm, TituloForm } from '../styles/FormCv.style'

const FormCv2 = () => {
    return (
        <>
          <TituloForm>Qué te recomendamos mostrar en tu hoja de vida</TituloForm>  
            <ContenedorInputs>
                <InputForm placeholder="¿Cuáles son tus cualidades?      0/200" type="text" />
                <InputForm placeholder="Intereses y Motivaciones" type="text" />
                <InputForm placeholder="Experiencias laborales" type="text" />
                <InputForm placeholder="Conocimientos y habilidades" type="text" />
                <InputForm placeholder="Idiomas" type="text" />
            </ContenedorInputs>
            <ContenedorBotones margin="5rem 2rem">
                <Link to="/formcv1"><BotonDesplazar color="rgb(45 74 79)" border="1px solid rgb(45 74 79)">Regresar</BotonDesplazar></Link>
                <Link to="/plantillascv"> <BotonDesplazar color="#fff" backgroundColor="rgb(45 74 79)">Siguiente</BotonDesplazar> </Link>
            </ContenedorBotones>
        </>
    )
}

export default FormCv2
