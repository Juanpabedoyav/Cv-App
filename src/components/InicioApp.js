import React from "react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  ButtonContainer,
  ImgContainer,
  ImgLogo,
  StylesContainer,
  TextH1,
  TextH4,
} from "../styles/InicioApp.styles";
import { loginGoogle, loginFacebook } from "../redux/actions/loginAction";
import { useDispatch } from "react-redux";

const Inicio = () => {
  const dispatch = useDispatch();

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <StylesContainer>
      <ImgContainer>
        <ImgLogo
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1639621482/logo3_igjcpr.png"
          alt="logo"
        />
      </ImgContainer>

      <TextH1>Curriculum Vitae App</TextH1>

      <TextH4>Creando curriculums profesionales</TextH4>

      <ButtonContainer>
        <LinkReact to="login">
          <Button
            leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />}
            variant="solid"
            className="phone "
          >
            Iniciar con Celular
          </Button>
        </LinkReact>

        <Button
          onClick={handleLoginFacebook}
          style={{ backgroundColor: "#5890FF" }}
          leftIcon={
            <FontAwesomeIcon className="icon-facebook" icon={faFacebook} />
          }
          variant="solid"
          className="button-facebook"
        >
          Iniciar con Facebook
        </Button>
        <Button
          onClick={handleLoginGoogle}
          variant="solid"
          className="button-google"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
          <span> Iniciar con Google</span>
        </Button>
      </ButtonContainer>

      <p className="registro">
        Si no tienes cuenta{" "}
        <LinkReact to="/registro" className="registrate">
          Registrate Aquí
        </LinkReact>
      </p>
    </StylesContainer>
  );
};

export default Inicio;
