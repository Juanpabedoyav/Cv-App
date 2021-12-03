import React from "react";
import {
  GridAbuperf,
  GridCerrar,
  GridEliminar,
  GridPaperf1,
  GridPaperf2,
  GridPaperf3,
  GridPaperf4,
  GridPaperf5,
  GridPaperf6,
  GridPhone,
} from "../styles/Perfil.styles";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPowerOff,
  faQuestion,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Perfil = () => {
  return (
    <div>
      <GridAbuperf>
        <GridPaperf1 className="styles-font-name">
          Nombre Usuario
          <br />
        </GridPaperf1>
        <GridPaperf2 className="styles-font-correo">
          correo@electronico.com
        </GridPaperf2>
        <GridPaperf3 className="styles-font-perfil">
          <img
            className="styles-imagen"
            src="https://eslamoda.com/wp-content/uploads/sites/2/2017/07/selfie-instagram.jpg"
            alt=""
          />{" "}
        </GridPaperf3>
        <GridPhone>
          <FontAwesomeIcon icon={faPhone} />
        </GridPhone>{" "}
        <GridPaperf4 className="styles-font-perfil"> Telefono</GridPaperf4>
        <GridCerrar>
          <LinkReact to="/login">
            <FontAwesomeIcon icon={faSignOutAlt} />{" "}
          </LinkReact>
        </GridCerrar>{" "}
        <GridPaperf5 className="styles-font-perfil">
          <LinkReact to="/login"> Cerrar sesión </LinkReact>{" "}
        </GridPaperf5>
        <GridEliminar>
          <LinkReact to="/">
            <FontAwesomeIcon icon={faPowerOff} />
          </LinkReact>{" "}
        </GridEliminar>
        <GridPaperf6 className="styles-font-perfil">
          <LinkReact to="/">Eliminar cuenta </LinkReact>{" "}
        </GridPaperf6>
        {/*  <GridButtonDelete>
          <LinkReact to="/">
        <Button bg= '#4b777e'  size='md'>
        Eliminar cuenta
        </Button>
        </LinkReact>

        </GridButtonDelete> */}
      </GridAbuperf>

      <NavBar />
    </div>
  );
};

export default Perfil;
