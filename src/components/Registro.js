import React from "react";
import {
  FormControl,
  FormLabel,
  Form,
  Input,
  Button
} from "@chakra-ui/react"
import {Link as LinkReact } from 'react-router-dom'
import { ImgLogo } from "../styles/InicioApp.styles";

const Registro = () => {
  
  return (
    <div>
      <h1>Registro</h1>
      <div><ImgLogo src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg" alt="" /></div>
    
          <FormControl id="first-name" isRequired>
              <FormLabel>Telefono celular </FormLabel>
              <Input placeholder="Telefono celular " />
          </FormControl>

          <FormControl id="password" isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input placeholder="Contraseña " />
          </FormControl>

          <FormControl id="password" isRequired>
              <FormLabel>Confirmar contraseña</FormLabel>
              <Input placeholder="Confirmar contraseña " />
          </FormControl>

          <Button colorScheme="teal" size="lg">
            Crear cuenta
          </Button>
      <p>Si ya tines una cuenta <LinkReact to="/" className="styles-link-react">Ingresar </LinkReact >
      </p>



    </div>
  );
};

export default Registro;
