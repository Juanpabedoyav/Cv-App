import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import {Link as LinkReact } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileDownload, faChalkboardTeacher, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavContainer } from '../styles/NavBar.style';

const NavBar = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <NavContainer>
                <Flex className="nav">

                    <LinkReact to="/home" >
                            <Box className="box" >
                                <FontAwesomeIcon icon={faHome} /><Text className="nav-titulo">Incio</Text>
                            </Box>
                    </LinkReact>
                    <LinkReact to="/descargas">
                            <Box className="box" >
                                <FontAwesomeIcon icon={faFileDownload} /><Text className="nav-titulo">Descargas</Text>
                            </Box>
                    </LinkReact>

                    <LinkReact to="/tutoriales">
                            <Box className="box" >
                                <FontAwesomeIcon icon={faChalkboardTeacher} /><Text className="nav-titulo">Tutoriales</Text>
                            </Box>
                    </LinkReact>
                    <LinkReact to="/perfil">
                            <Box className="box" >
                                <FontAwesomeIcon icon={faUser } /><Text className="nav-titulo">Perfi</Text>
                            </Box>
                    </LinkReact>

                    


                        
                </Flex>
            </NavContainer>
        </div>
    )
}

export default NavBar
