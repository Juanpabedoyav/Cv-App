import React from "react";
import { Link as LinkReact } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";

import NavBar from "./NavBar";
import {
  ButtonBack,
  GridGranp,
  GridUncleList,
  GridUncleVideo,
  Tutorial1,
  Tutorial2,
  Tutorial3,
  Tutorial4,
  Tutorial5,
  Tutorial6,
  Tutorial7,
} from "../styles/Tutoriales.style";

const Tutoriales = () => {
  return (
    <div>
      <GridGranp>
        <GridUncleVideo
          src="https://www.youtube.com/embed/gpl8MLZyYDo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></GridUncleVideo>
        {/* Grid tio sin hijo  */}

        <GridUncleList>
          {/* la idea es que cada vez que presionemos sobre uno
           de los tutoriales cabien el ultimo componente de la url 
           de youtube asi concidira el video presentado con el tutorial
            selecionado "como lo hicimos en block master" */}

          <Tutorial1 className="tutorials-styles">
            <FontAwesomeIcon icon={faPlay} /> ¿Comó utilizar tu App?
          </Tutorial1>
          <Tutorial2 className="tutorials-styles">
            <FontAwesomeIcon icon={faPlay} /> Cualidades...
          </Tutorial2>
          <Tutorial3 className="tutorials-styles">
            <FontAwesomeIcon icon={faPlay} /> Intereses y narraciones...
          </Tutorial3>
          <Tutorial4 className="tutorials-styles">
            <FontAwesomeIcon icon={faPlay} /> Experiencias laborales...
          </Tutorial4>
          <Tutorial5 className="tutorials-styles">
            <FontAwesomeIcon icon={faPlay} /> Conocimientos y habilidades...
          </Tutorial5>
          <Tutorial6 className="tutorials-styles">
            <FontAwesomeIcon icon={faPlay} /> Idiomas...
          </Tutorial6>
          <Tutorial7 className="tutorials-styles">
            <FontAwesomeIcon icon={faPlay} /> Imagen...
          </Tutorial7>
        </GridUncleList>

        <ButtonBack>
          <LinkReact to="/home">
            <Button colorScheme="teal" size="md" className="regresar">
              Regresar
            </Button>
          </LinkReact>
        </ButtonBack>
      </GridGranp>
      <NavBar />
    </div>
  );
};

export default Tutoriales;
