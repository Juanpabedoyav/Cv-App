import React from "react";
import { useSelector } from "react-redux";
import { PlantillaCv3Container } from "../styles/PlantillaRenderCv3.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PlantillaRenderCv3 = () => {
  const { form1, form2 } = useSelector((state) => state.pdfData);

  return (
    <PlantillaCv3Container>
      <div className="plantilla-container">
        <div className="container-1">
          <p className="sobre-mi">SOBRE MI</p>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            nobis ipsum exercitationem quidem voluptatibus libero! Minima, sed
            asperiores placeat cum blanditiis repellat unde, commodi fuga ipsam,
            maxime dolores magnam sunt?
          </p>
          <p className="title-experiencia">EXPERIENCIA PROFESIONAL</p>
          <p className="empresa">Empresa | Cargo</p>
          <p className="fecha-empresa">Junio 2018 - Octubre 2021</p>
          <p className="tareas">Tareas realizadas</p>
          <ul className="tareas-container">
            <li>Tarea 1</li>
            <li>Tarea 2</li>
            <li>Tarea 3</li>
            <li>Tarea 4</li>
          </ul>
          <p className="empresa">Empresa | Cargo</p>
          <p className="fecha-empresa">Junio 2018 - Octubre 2021</p>
          <p className="tareas">Tareas realizadas</p>
          <ul className="tareas-container">
            <li>Tarea 1</li>
            <li>Tarea 2</li>
            <li>Tarea 3</li>
            <li>Tarea 4</li>
          </ul>
          <p className="title-habilidades">HABILIDADES</p>
          <div className="habilidades-container">
            <p>Habilidad 1</p>
            <p>Habilidad 2</p>
          </div>
          <div className="habilidades-container">
            <p>Habilidad 3</p>
            <p>Habilidad 4</p>
          </div>
        </div>
        <div className="container-2">
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1639448025/Foto_2021_jy49m8.jpg"
            alt="Imagen"
          />

          <p className="nombre">Santiago</p>
          <p className="apellido">Montoya Cano</p>
          <p className="cargo">Desarrollador frontend</p>
          <p className="title-contacto">CONTACTO</p>
          <div className="contacto-container">
            <div className="contacto">
              <FontAwesomeIcon icon={faPhoneAlt} className="icono" />
              <span className="numero">3004499476</span>
            </div>

            <div className="contacto">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icono" />
              <span className="ubicacion">Medellín</span>
            </div>

            <div className="contacto">
              <FontAwesomeIcon icon={faEnvelope} className="icono" />
              <span className="correo">santiagomontoya98@hotmail.com</span>
            </div>

            {/* <div className="iconos">
              <FontAwesomeIcon icon={faPhoneAlt} className="icono" />
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icono" />
              <FontAwesomeIcon icon={faEnvelope} className="icono" />
            </div>
            <div className="texto">
              <p>3004499476</p>
              <p className="ubicacion">Medellín</p>
              <p className="correo">santiagomontoya98@hotmail.com</p>
            </div> */}
          </div>

          <p className="title-educacion">EDUCACIÓN</p>
          <p className="titulo">Tecnólogo en Sistemas</p>
          <p className="universidad">
            <em>Institucion Universitaria ITM</em>
          </p>
          <p className="fecha-universidad">Agosto 2018 - Agosto 2021</p>

          <p className="titulo">Desarrollador frontend</p>
          <p className="universidad">
            <em>Academia Geek</em>
          </p>
          <p className="fecha-universidad">Octubre 2021 - Diciembre 2021</p>

          <p className="title-idiomas">IDIOMAS</p>
          <p className="idioma">Ingles B1</p>
          <p className="idioma">Español nativo</p>
        </div>
      </div>
    </PlantillaCv3Container>
  );
};

export default PlantillaRenderCv3;
