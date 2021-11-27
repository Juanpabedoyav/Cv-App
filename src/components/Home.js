import { Box, Heading, HStack, Grid, GridItem  } from '@chakra-ui/layout'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact} from "react-router-dom";
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <HStack spacing={8}>
               <LinkReact to="/formcv1"> <Box
                    p={5}
                    shadow="md"
                    borderWidth="1px"
                    flex="1"
                    borderRadius="md"
                    // {...rest}
                >
                    <Heading fontSize="xl"><FontAwesomeIcon icon={faPlusCircle} /></Heading>
                    
                    <h4>Crear Curriculum </h4>
                    
                </Box>  
                </LinkReact>
            </HStack>
                    
                    <h3>Recomendacione</h3>
                    <LinkReact to="/tutoriales"><h3>Ver todo</h3></LinkReact>

                    <p>Te sugerimos hacer alguno d eestos cursos con el fin de enrriquecer tu Curriculum Vitae</p>
                    <div><FontAwesomeIcon icon={faAngleDoubleDown} /></div>
                   
                
                 <NavBar/>

        </div>
    )
}

export default Home
