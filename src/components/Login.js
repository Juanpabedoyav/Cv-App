import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";
import { ImgContainer, ImgLogo } from "../styles/InicioApp.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import {Link as LinkReact } from 'react-router-dom'


const Login = () => {
  return (
    <>
    <div><LinkReact to="/"><FontAwesomeIcon icon={faReply} /></LinkReact> </div>
    <div>
      <ImgContainer><ImgLogo src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg" alt="" /></ImgContainer>
      <h1>Ingresar</h1>

      <FormControl id="first-name" isRequired>
              
          <div className="labe-styles"> <FormLabel>Telefono celular </FormLabel></div>
              <Input placeholder="Telefono celular " />
          </FormControl>

          <FormControl id="password" isRequired>
              <FormLabel  >Contraseña</FormLabel>
              <Input placeholder="Contraseña " />
          </FormControl>

         <p>¿Olvidaste la contraseña?</p>

          <LinkReact to="/home" ><Button colorScheme="teal" size="lg">
            Ingresar
          </Button>
          </LinkReact>
    </div>
    </>
  );
};

export default Login;
