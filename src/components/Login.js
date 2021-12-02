import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";
import { ImgContainer, ImgLogo } from "../styles/InicioApp.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import { LoginContainer } from "../styles/Login.styles";

const Login = () => {
  return (
    <LoginContainer>
      <div>
        <LinkReact to="/">
          <FontAwesomeIcon icon={faReply} />
        </LinkReact>{" "}
      </div>
      <div>
        <ImgContainer>
          <ImgLogo
            src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg"
            alt=""
          />
        </ImgContainer>
        <h1>Ingresar</h1>

        <FormControl id="first-name" isRequired>
          <Input placeholder="Telefono celular" className="input" />
        </FormControl>

        <FormControl id="password" isRequired>
          <Input placeholder="Contraseña " className="pass" />
        </FormControl>

        <p>¿Olvidaste la contraseña?</p>

        <LinkReact to="/home">
          <Button className="botton-submit button" size="lg">
            Ingresar
          </Button>
        </LinkReact>
      </div>
    </LoginContainer>
  );
};

export default Login;
