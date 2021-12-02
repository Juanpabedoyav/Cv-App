import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {
  ContenedorBotones,
  ContenedorInputs,
  FormCvContainer,
  InputForm,
  TituloForm,
} from "../styles/FormCv.style";

const FormCv1 = () => {
  return (
    <FormCvContainer>
      <TituloForm>
        Estos son los datos que estarán en tu hoja de vida
      </TituloForm>
      <ContenedorInputs>
        <InputForm placeholder="Nombre" type="text" />
        <InputForm placeholder="Apellido" type="text" />
        <InputForm placeholder="Correo Electrónico" type="email" />
        <InputForm placeholder="Cargo / Puesto" type="text" />
        <InputForm placeholder="Lugar de residencia" type="text" />
        <InputForm placeholder="Teléfono de Contacto" type="tel" />
      </ContenedorInputs>
      <ContenedorBotones>
        <Link to="/home">
          <Button className="button">Regresar</Button>
        </Link>
        <Link to="/formcv2">
          {" "}
          <Button className="button">Siguiente</Button>{" "}
        </Link>
      </ContenedorBotones>
    </FormCvContainer>
  );
};

export default FormCv1;
