import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { Link as LinkReact } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileDownload,
  faChalkboardTeacher,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavContainer } from "../styles/NavBar.style";

const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <NavContainer>
        <Flex className="nav">
          <LinkReact to="/home" className="nav-item active">
            <Box className="box box-active">
              <FontAwesomeIcon icon={faHome} />
              <Text className="nav-titulo box-active">Incio</Text>
            </Box>
          </LinkReact>

          <LinkReact to="/descargas" className="nav-item">
            <Box className="box">
              <FontAwesomeIcon icon={faFileDownload} />
              <Text className="nav-titulo">Descargas</Text>
            </Box>
          </LinkReact>

          <LinkReact to="/tutoriales" className="nav-item">
            <Box className="box">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              <Text className="nav-titulo">Tutoriales</Text>
            </Box>
          </LinkReact>

          <LinkReact to="/perfil" className="nav-item">
            <Box className="box">
              <FontAwesomeIcon icon={faUser} />
              <Text className="nav-titulo">Perfi</Text>
            </Box>
          </LinkReact>
        </Flex>
      </NavContainer>
    </div>
  );
};

export default NavBar;
