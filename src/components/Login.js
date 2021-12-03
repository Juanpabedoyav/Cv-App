import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";
import { ImgContainer, ImgLogo } from "../styles/InicioApp.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import {
  ContainerLogin,
  ForgotPassword,
  H1,
  IconUbi,
  Label,
  Label1,
} from "../styles/Login.style";
import {InputForm,ContenedorInputs, TitleRegistro} from "../styles/Login.style";

const Login = () => {
  return (
    <>
      <ContainerLogin>
        <IconUbi>
          <LinkReact to="/">
            <FontAwesomeIcon icon={faReply} />
          </LinkReact>{" "}
        </IconUbi>
        <div>
          <ImgContainer>
            <ImgLogo
              src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg"
              alt=""
            />
          </ImgContainer>
          <TitleRegistro>Ingresar</TitleRegistro>

          <ContenedorInputs>
          <FormControl id="first-name" isRequired>
            <InputForm
            
              placeholder="Telefono celular "
            />
          </FormControl>

          <FormControl id="password" isRequired>
            {/* <Label1 ><FormLabel  >Contraseña</FormLabel></Label1 > */}
            <InputForm 
            placeholder="Contraseña " />
          </FormControl>

          <ForgotPassword>
            <p>
              <i>¿Olvidaste la contraseña?</i>
            </p>
          </ForgotPassword>
          </ContenedorInputs>
          <LinkReact to="/home">
            <Button className='botton-login' >
              Ingresar
            </Button>
          </LinkReact>
        </div>
      </ContainerLogin>
    </>
  );
};

export default Login;
