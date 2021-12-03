import { Box, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link as LinkReact } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../styles/Descargas.style.css";
import { DescargasContainer } from "../styles/Descargas.styles";
import NavBar from '../components/NavBar'

const Descargas = () => {
  const { onOpen, onClose } = useDisclosure();
  const [placement] = useState("left");

  return (
    <DescargasContainer onClose={onClose} >
      <Drawer placement={placement}   isOpen={onOpen}>
      
      <DrawerContent className='contaniner'>

          {/* cabecera */}
          <DrawerHeader className="header-descargas" borderBottomWidth="2px">
            <h1 className="color">Descargas</h1>
            <LinkReact to="/home" className="color">
              X
            </LinkReact>
          </DrawerHeader>

          <DrawerBody p={2} className="body-descargas">
            <LinkReact to="/vistaprevia">
              <Box className="card" p={4} shadow="lg" borderWidth="2px">
                <Heading className="header-box" fontSize="xm">
                  <h1 className="color"> Plantilla Administrador</h1>
                  <FontAwesomeIcon icon={faEye} className="color" />
                </Heading>
                <Text mt={4} className="color">
                  Curriculum Descargado
                </Text>
              </Box>
            </LinkReact>

            <LinkReact to="/vistaprevia">
              <Box className="card" p={4} shadow="md" borderWidth="2px">
                <Heading className="header-box" fontSize="xm">
                  <h1 className="color"> Plantilla Administrador</h1>
                  <FontAwesomeIcon icon={faEye} className="color" />
                </Heading>
                <Text mt={4} className="color">
                  Curriculum Descargado
                </Text>
              </Box>
            </LinkReact>

            <LinkReact to="/vistaprevia">
              <Box className="card" p={4} shadow="md" borderWidth="2px">
                <Heading className="header-box" fontSize="xm">
                  <h1 className="color"> Plantilla Administrador</h1>
                  <FontAwesomeIcon icon={faEye} className="color" />
                </Heading>
                <Text mt={4} className="color">
                  Curriculum Descargado
                </Text>
              </Box>
            </LinkReact>

            <LinkReact to="/vistaprevia">
              <Box className="card" p={4} shadow="md" borderWidth="2px">
                <Heading className="header-box" fontSize="xm">
                  <h1 className="color"> Plantilla Administrador</h1>
                  <FontAwesomeIcon icon={faEye} className="color" />
                </Heading>
                <Text mt={4} className="color">
                  Curriculum Descargado
                </Text>
              </Box>
            </LinkReact>

          </DrawerBody>



          <DrawerFooter className="footer">
            <LinkReact to="/home">
              <Button
                style={{
                  backgroundColor: "var(--color-principal)",
                  color: "var(--color-blanco)",
                }}
                mb={4}
                mr={3}
                onClick={onClose}
              >
                Volver
              </Button>
            </LinkReact>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
      <NavBar />

    </DescargasContainer>
  );
};

export default Descargas;
