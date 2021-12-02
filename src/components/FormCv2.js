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

const FormCv2 = () => {
  return (
    <FormCvContainer>
      <TituloForm>Qué te recomendamos mostrar en tu hoja de vida</TituloForm>
      <ContenedorInputs>
        <InputForm placeholder="Cualidades" type="text" />
        <InputForm placeholder="Intereses y Motivaciones" type="text" />
        <InputForm placeholder="Experiencias laborales" type="text" />
        <InputForm placeholder="Conocimientos y habilidades" type="text" />
        <InputForm placeholder="Idiomas" type="text" />
      </ContenedorInputs>
      <ContenedorBotones margin="5rem 2rem">
        <Link to="/formcv1">
          <Button className="button">Regresar</Button>
        </Link>
        <Link to="/plantillascv">
          {" "}
          <Button className="button">Siguiente</Button>{" "}
        </Link>
      </ContenedorBotones>
    </FormCvContainer>
  );
};

export default FormCv2;
