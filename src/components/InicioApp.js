import React from "react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import btnGoogle from "../assets/btnGoogle.png";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import {
  ButtonContainer,
  ImgContainer,
  ImgLogo,
  StylesContainer,
  TextH1,
  TextH4,
} from "../styles/InicioApp.styles";

const Inicio = () => {
  return (
    <StylesContainer>
      <ImgContainer>
        <ImgLogo
          src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg"
          alt=""
        />
      </ImgContainer>

      <TextH1>Curriculum Vitae App</TextH1>

      <TextH4>Creando perfiles profesionales</TextH4>

      <ButtonContainer>
        <LinkReact to="/login">
          <Button
            leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />}
            variant="solid"
            className="phone "
          >
            Iniciar sesion
          </Button>
        </LinkReact>
        {/* <FontAwesomeIcon icon={fabFacebook}/> */}
        {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} /> */}

        <Button
          style={{backgroundColor:'#5890FF'}}
            leftIcon={<FontAwesomeIcon className="icon-facebook"icon={faFacebook} /> }
            variant="solid"
            className="button-facebook"
          >
            Iniciar Con Facebook
          </Button>
          <Button
            variant="solid"
            className="button-google"
          >
<img src={btnGoogle} alt="" />
<span> Iniciar con Google</span>
           
          </Button>
       
        
      </ButtonContainer>

      <p className="registro">
        Si no quieres registrarte{" "}
        <LinkReact to="/registro" className="registrate">
          Registrate Aquí
        </LinkReact>
      </p>
    </StylesContainer>
  );
};

export default Inicio;
