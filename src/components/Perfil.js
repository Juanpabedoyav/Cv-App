import React from "react";
import {
  GridAbuperf,
  GridCerrar,
  GridContacus,
  GridEliminar,
  GridPaperf1,
  GridPaperf2,
  GridPaperf3,
  GridPaperf4,
  GridPaperf5,
  GridPaperf6,
  GridPaperf7,
  GridPaperf8,
  GridPhone,
  GridPolitics,
} from "../styles/Perfil.styles";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPowerOff,
  faSignOutAlt,
  faShieldAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/loginAction";
import { deleteAsync } from "../redux/actions/deleteAction";
import Swal from "sweetalert2";

const Perfil = () => {
  const dispatch = useDispatch();
  // logout()
  const { phone, name, email, image } = useSelector((state) => state.login);
  // console.log(phone)

  const handleLogout = () => dispatch(logout());

  const handleDelete = () => {
    Swal.fire({
      title: "Estas seguro de eliminar tu cuenta?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      color: "var(--color-principal)",
      confirmButtonColor: "#d33",
      cancelButtonColor: "var(--color-principal)",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAsync(phone));
        Swal.fire("Eliminada!", "Tu información ha sido eliminada", "success");
      }
    });
  };

  return (
    <div>
      <GridAbuperf>
        <GridPaperf1 className="styles-font-name">
          {name}
          <br />
        </GridPaperf1>
        <GridPaperf2 className="styles-font-correo">
          {email}
          {/* ¿por qué no se esta capturando el email?  */}
        </GridPaperf2>
        <GridPaperf3 className="styles-font-perfil">
          <img
            className="styles-imagen"
            src={image} // aqui deberia ser image pero se esta almacenando la url de coudinary en el emain y no en image image
            alt=""
          />{" "}
        </GridPaperf3>
        <GridPhone
          style={phone === null ? { display: "none" } : { display: "block" }}
        >
          <FontAwesomeIcon icon={faPhone} />
        </GridPhone>{" "}
        <GridPaperf4 className="styles-font-perfil"> {phone} </GridPaperf4>
        <GridCerrar>
          <LinkReact to="/" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />{" "}
          </LinkReact>
        </GridCerrar>{" "}
        <GridPaperf5 className="styles-font-perfil">
          <LinkReact to="/politica"> Politicas y condiciones</LinkReact>
        </GridPaperf5>
        <GridPolitics>
          <LinkReact to="/politica">
            <FontAwesomeIcon icon={faShieldAlt} />{" "}
          </LinkReact>
        </GridPolitics>
        <GridPaperf6 className="styles-font-perfil">
          {" "}
          <a href="https://linktr.ee/CvApp" target="_blank" rel="noreferrer">
            Contactanos
          </a>
        </GridPaperf6>
        <GridContacus>
          <a href="https://linktr.ee/CvApp" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </a>
        </GridContacus>
        <GridPaperf7 onClick={handleLogout} className="styles-font-perfil">
          Cerrar sesión
        </GridPaperf7>
        <GridEliminar
          style={phone === null ? { display: "none" } : { display: "block" }}
        >
          <LinkReact to="/perfil" onClick={handleDelete}>
            <FontAwesomeIcon icon={faPowerOff} />
          </LinkReact>{" "}
        </GridEliminar>
        <GridPaperf8
          className="styles-font-perfil"
          style={phone === null ? { display: "none" } : { display: "block" }}
        >
          <LinkReact onClick={handleDelete} to="/perfil">
            Eliminar cuenta{" "}
          </LinkReact>{" "}
        </GridPaperf8>
      </GridAbuperf>

      <NavBar />
    </div>
  );
};

export default Perfil;
