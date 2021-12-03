import React from "react";
import { Link } from "react-router-dom";
import { ContainerVistaPrevia } from "../styles/VistaPreviaCv.styles";

const VistaPreviaCv = () => {
  return (
    <ContainerVistaPrevia>
      <header className="cabecera">
        <Link to="/home">X</Link>
      </header>
      <h1 className=" title">Vista Previa</h1>

      <section className="contenido">
        <img
          src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg"
          alt=""
        />
      </section>
    </ContainerVistaPrevia>
  );
};

export default VistaPreviaCv;
