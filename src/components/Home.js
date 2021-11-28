import { Box, Heading, HStack, Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Link as LinkReact } from "react-router-dom";
import NavBar from "./NavBar";
import { HomeContainer } from "../styles/Home.styles";
import CursosHome from "./CursosHome";

const Home = () => {
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
              <FontAwesomeIcon icon={faPlusCircle} className="icon" />
            </Heading>
            <h4 className="text-create">Crear Curriculum </h4>
          </Box>
        </LinkReact>
      </div>

      <div className="other-container">
        <h3 className="recomendaciones">Recomendaciones</h3>
        <Link to="/tutoriales">
          <h5>Ver todo</h5>
        </Link>
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
