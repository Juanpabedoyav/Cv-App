import React from 'react'
import { Link } from 'react-router-dom'
import { BotonDesplazar, ContenedorBotones, ContenedorInputs, InputForm, TituloForm } from '../styles/FormCv.style'

const FormCv1 = () => {
    return (
        <>
                <TituloForm>Estos son los datos que estarán en tu hoja de vida.</TituloForm>
                <ContenedorInputs>
                    <InputForm placeholder="Nombre" type="text"/>
                    <InputForm placeholder="Apellido" type="text"/>
                    <InputForm placeholder="Correo Electrónico" type="email"/>
                    <InputForm placeholder="Cargo / Puesto" type="text"/>
                    <InputForm placeholder="Lugar de residencia" type="text" />
                    <InputForm placeholder="Teléfono de Contacto" type="tel" />
                </ContenedorInputs>
                <ContenedorBotones>
                    <Link to="/home"><BotonDesplazar color="rgb(45 74 79)" border="1px solid rgb(45 74 79)">Regresar</BotonDesplazar></Link>
                    <Link to="/formcv2"> <BotonDesplazar color="#fff" backgroundColor="rgb(45 74 79)">Siguiente</BotonDesplazar> </Link>
                </ContenedorBotones>
        </>
    )
}

export default FormCv1
