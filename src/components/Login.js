import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";
import { ImgContainer, ImgLogo } from "../styles/InicioApp.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import {Link as LinkReact } from 'react-router-dom'
import { ContainerLogin, ForgotPassword, IconUbi, Label, Label1  } from "../styles/login.styles";


const Login = () => {
  return (
    <>
    <ContainerLogin>
    <IconUbi ><LinkReact to="/"><FontAwesomeIcon icon={faReply} /></LinkReact> </IconUbi >
    <div>
      <ImgContainer><ImgLogo src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg" alt="" /></ImgContainer>
      <h1>Ingresar</h1>

      <FormControl id="first-name" isRequired>
              
      <Label><FormLabel >Telefono celular </FormLabel></Label>
              <Input bg = ' #62919936 ' w={250} placeholder="Telefono celular " />
          </FormControl>

          <FormControl id="password" isRequired>
              <Label1 ><FormLabel  >Contraseña</FormLabel></Label1 >
              <Input bg = ' #62919936 ' w={250}  placeholder="Contraseña " />
          </FormControl>

         <ForgotPassword><p><i>¿Olvidaste la contraseña?</i></p></ForgotPassword>

          <LinkReact to="/home" >
            <Button colorScheme="teal" size="lg">
              Ingresar
            </Button>
          </LinkReact>
    </div>
    </ContainerLogin>
    </>
  );
};

export default Login;
