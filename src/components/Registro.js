import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react"
// import {Form} from 'formik'
import {Link as LinkReact } from 'react-router-dom'
import {ImgRegistro, TitleRegistro, StyleRegistro } from "../styles/Registro.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const Registro = () => {
  
  return (
    <StyleRegistro>
        <LinkReact  className='back'to="/"><FontAwesomeIcon icon={faReply} /></LinkReact> 

      <ImgRegistro>
        <img src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg" alt="logo" />

        </ImgRegistro>
        <TitleRegistro>Crear tu cuenta</TitleRegistro>
<form className='formulario' >
          <FormControl  id="first-name" isRequired>
              <FormLabel className='label'>Telefono celular </FormLabel>
              <Input placeholder="Telefono celular " />
          </FormControl>

          <FormControl id="password" isRequired>
              <FormLabel className='label'>Contraseña</FormLabel>
              <Input placeholder="Contraseña " />
          </FormControl>

          <FormControl id="password" isRequired>
              <FormLabel className='label'>Confirmar contraseña</FormLabel>
              <Input placeholder="Confirmar contraseña " />
          </FormControl>

          <Button className='botton-submit' colorScheme="teal" size="lg">
            Crear cuenta
          </Button>
          </form>

      <p>Si ya tines una cuenta  
        <LinkReact 
        to="/" 
        className="styles-link-react">INGRESAR 
        </LinkReact >
      </p>


    </StyleRegistro>
  );
};

export default Registro;
