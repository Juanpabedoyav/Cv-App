import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import NavBar from "./NavBar";
import { HomeContainer } from "../styles/Home.styles";
import CursosHome from "./CursosHome";
import Swal from "sweetalert2";

const Home = () => {
  const alerta = async () => {
    /* inputOptions can be an object or Promise */
    /*  const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          analista: "Analista",
          desarrollador: "Desarrollador",
          diseñador: "Diseñador",
        });
      }, 1000);
    }); */

    const { value: campo } = await Swal.fire({
      title: "Ingresa tu campo de interes",
      color: "var(--color-principal)",
      input: "text",
      inputPlaceholder: "Ejemplo: diseño, programación, marketing, etc",
      /* inputOptions: inputOptions, */
      inputValidator: (value) => {
        if (!value) {
          return "Debes seleccionar un opción ";
        }
      },
    });

    if (campo) {
      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 3000,
        html: `Tus plantillas han sido configuradas con éxito`,
      });
    }
  };

  if (!JSON.parse(localStorage.getItem("bandera"))) {
    localStorage.setItem("bandera", true);
    alerta();
  }

  return (
    <HomeContainer>
      <h2 className="text-h2">Inicio</h2>

      <div className="create">
        <LinkReact to="/formcv1">
          {" "}
          <Box
            className="box"
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Heading fontSize="xl">
              <FontAwesomeIcon icon={faFilePdf} className="icon" />
            </Heading>
            <h4 className="text-create">Crear Curriculum </h4>
          </Box>
        </LinkReact>
      </div>

      <div className="recomendaciones-container">
        <h3 className="recomendaciones">Recomendaciones</h3>
      </div>

      <p className="text-p">
        Te sugerimos hacer alguno de estos cursos con el fin de enriquecer tu
        Curriculum Vitae
      </p>

      <div className="arrow">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>

      <CursosHome />

      <NavBar />
    </HomeContainer>
  );
};

export default Home;
