import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { Link as LinkReact } from "react-router-dom";
import {
  ImgRegistro,
  TitleRegistro,
  StyleRegistro,
  InputForm,
  ContenedorInputs,
} from "../styles/Registro.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faUpload } from "@fortawesome/free-solid-svg-icons";
const Registro = () => {
  const elegirImagen = () => document.getElementById("image").click();

  return (
    <StyleRegistro>
      <LinkReact to="/" className="back-container">
        <FontAwesomeIcon icon={faReply} className="back" />
      </LinkReact>

      <ImgRegistro>
        <img
          src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg"
          alt="logo"
        />
      </ImgRegistro>
      <TitleRegistro>Crea tu cuenta</TitleRegistro>
      <form className="formulario">
        <ContenedorInputs>
          <FormControl id="names" isRequired>
            <InputForm className="input" placeholder="Nombre y Apellidos " />
          </FormControl>

          <FormControl id="telephoneNumber" isRequired>
            <InputForm className="input" placeholder="Telefono celular " />
          </FormControl>

          <FormControl id="image" isRequired style={{ display: "none" }}>
            <Input type="file" />
          </FormControl>

          <FormControl id="password" isRequired>
            <InputForm
              type="password"
              className="input"
              placeholder="Contraseña "
            />
          </FormControl>

          <FormControl id="ConfirmPassword" isRequired>
            <InputForm
              type="password"
              className="input"
              placeholder="Confirmar contraseña "
            />
          </FormControl>
        </ContenedorInputs>

        <Button
          leftIcon={
            <FontAwesomeIcon icon={faUpload} className="icono-upload" />
          }
          className="elegir-imagen"
          onClick={elegirImagen}
        >
          Elegir imagen
        </Button>

        <Button className="botton-submit button" size="lg">
          Crear cuenta
        </Button>
      </form>

      <p>
        Si ya tienes una cuenta{" "}
        <LinkReact to="/" className="styles-link-react">
          Ingresar
        </LinkReact>
      </p>
    </StyleRegistro>
  );
};

export default Registro;
