import React from "react";
import FacebookLogin from "react-facebook-login";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import {
  ButtonContainer,
  ImgContainer,
  ImgLogo,
  TextH1,
  TextH4,
} from "../styles/InicioApp.styles";

const Inicio = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <ImgContainer>
        <ImgLogo
          src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg"
          alt=""
        />
      </ImgContainer>

      <TextH1>Curriculum Vitae App</TextH1>

      <TextH4>Creando perfiles profesionales</TextH4>

      <ButtonContainer>
        <LinkReact to="/login" className="link">
          <Button
            leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />}
            variant="solid"
            className="phone"
          >
            INGRESAR CON CELULAR
          </Button>
        </LinkReact>

        <FacebookLogin
          appId="924317245136822"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook"
          textButton="Ingresar con Facebook"
        />
      </ButtonContainer>

      <p>
        Si no tienes cuenta{" "}
        <LinkReact to="/registro" className="registrate">
          Registrate Aquí
        </LinkReact>
      </p>
    </div>
  );
};

export default Inicio;
