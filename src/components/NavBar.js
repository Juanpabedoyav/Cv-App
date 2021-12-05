import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileDownload,
  faChalkboardTeacher,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavContainer } from "../styles/NavBar.style";

const NavBar = () => {
  const links = [
    { name: "Inicio", to: "/home", ico: faHome },
    { name: "Descargas", to: "/descargas", ico: faFileDownload },
    { name: "Tutoriales", to: "/tutoriales", ico: faChalkboardTeacher },
    { name: "Perfil", to: "/perfil", ico: faUser },
  ];

  return (
    <>
      <NavContainer>
        <Flex className="nav">
          {links.map((el, i) => {
            return (
              <NavLink
                to={el.to}
                activeClassName="active"
                key={el.name + i}
                className="nav-item"
              >
                <Box className="box" activeClassName="box-active">
                  <FontAwesomeIcon icon={el.ico} />
                  <Text className="nav-titulo" activeClassName="box-active">
                    {el.name}
                  </Text>
                </Box>
              </NavLink>
            );
          })}
        </Flex>
      </NavContainer>
    </>
  );
};

export default NavBar;
