import { Box, Heading,  Text } from '@chakra-ui/layout';
import React, { useState } from 'react'
import NavBar from "./NavBar";
import {Link as LinkReact } from 'react-router-dom'
import { useDisclosure } from "@chakra-ui/react"
import {Drawer, DrawerBody, DrawerHeader , DrawerContent ,DrawerFooter} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import '../styles/Descargas.style.css'

const Descargas = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState("left")
  
 return (

  <div > 
<Drawer  className='drawer'placement={placement} onClose={onClose} isOpen={onOpen}>

<DrawerContent  className='container-descargas'>
  <DrawerHeader  className='header-descargas' borderBottomWidth="2px">
      <h1>Descargas</h1>
    <LinkReact  to="/home">X</LinkReact> 
  </DrawerHeader>

  <DrawerBody p={2}className='body-descargas'>
<LinkReact 
to="/vistaprevia"> 
  
            <Box className="card" p={4} shadow="lg" borderWidth="2px" >
                    <Heading className='header-box' fontSize="xm">
                       <h1> Plantilla Administrador</h1>
                        <FontAwesomeIcon icon={faEye} / >
                        </Heading>
                    <Text mt={4}>Curriculum Descargado</Text>
</Box>
</LinkReact > 
<LinkReact 
to="/vistaprevia"> 
        <Box className="card" p={4} shadow="md" borderWidth="2px" >
                <Heading className='header-box'fontSize="xm">
                <h1> Plantilla Administrador</h1>
                        <FontAwesomeIcon icon={faEye} / >
                       
                </Heading>
                    <Text mt={4}>Curriculum Descargado</Text>
        </Box>
</LinkReact>
<LinkReact 
to="/vistaprevia"> 
        <Box className="card" p={4} shadow="md" borderWidth="2px" >
              <Heading className='header-box' fontSize="xm">
              <h1> Plantilla Administrador</h1>
                        <FontAwesomeIcon icon={faEye} / >
                       
              </Heading>
                <Text mt={4}>Curriculum Descargado</Text>
        </Box>
</LinkReact> 
<LinkReact 
to="/vistaprevia"> 
        <Box className="card" p={4} shadow="md" borderWidth="2px" >
              <Heading className='header-box' fontSize="xm">
              <h1> Plantilla Administrador</h1>
                        <FontAwesomeIcon icon={faEye} / >

                                     </Heading>
                <Text mt={4}>Curriculum Descargado</Text>
        </Box>
</LinkReact>   
</DrawerBody>
<DrawerFooter>
       <LinkReact   className='back'to="/home"> 

            <Button className='volver' variant='outline' colorScheme="teal" mb={4} mr={3} onClick={onClose}>
            Volver

            </Button>
             </LinkReact>

          </DrawerFooter>



</DrawerContent>

</Drawer>

 </div>

    )
}

export default Descargas
