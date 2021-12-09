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
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/loginAction";
import { deleteAsync } from "../redux/actions/deleteAction";
import Swal from "sweetalert2";

const Perfil = () => {
  const dispatch = useDispatch();
  // logout()
  const { phone } = useSelector((state) => state.login);
  // console.log(phone)
  const handleLogout = () => dispatch(logout());

  const handleDelete = () => {
    Swal.fire({
      title: "Estas seguro de eliminar tu cuenta?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#629197",
      confirmButtonText: "Eliminar",
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
        <GridCerrar>
          <LinkReact to="/politica">
            <GridPaperf4 className="styles-font-perfil">
              {" "}
              Politica y condiciones
            </GridPaperf4>
            {/* <FontAwesomeIcon icon={faSignOutAlt} />{" "} */}
          </LinkReact>
        </GridCerrar>{" "}
        <GridPaperf5 onClick={handleLogout} className="styles-font-perfil">
          Cerrar sesión
        </GridPaperf5>
        <GridEliminar>
          <LinkReact to="/">
            <FontAwesomeIcon icon={faPowerOff} />
          </LinkReact>{" "}
        </GridEliminar>
        <GridPaperf6 className="styles-font-perfil">
          <LinkReact onClick={handleDelete} to="/perfil">
            Eliminar cuenta{" "}
          </LinkReact>{" "}
        </GridPaperf6>
      </GridAbuperf>

      <NavBar />
    </div>
  );
};

export default Perfil;
