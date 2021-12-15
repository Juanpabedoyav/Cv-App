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

  console.log(form1);
  console.log(form2);

  return (
    <PlantillaCv3Container>
      <div className="plantilla-container">
        <div className="container-1">
          <p className="sobre-mi">SOBRE MI</p>
          <p className="desc">
            {form2.perfil}
          </p>
          <p className="title-experiencia">EXPERIENCIA PROFESIONAL</p>
          {form2.jobExperiences.map((el) => (
            <p>{el}</p>
          ))}

          <p className="title-habilidades">HABILIDADES</p>

          {form2.skills.map((el) => (
            <p>{el}</p>
          ))}
        </div>
        <div className="container-2">
          <img
            src={form1.image}
            alt={form1.name}
          />

          <p className="nombre">{form1.name}</p>
          <p className="apellido">{form1.lastName}</p>
          <p className="cargo">{form1.position}</p>
          <p className="title-contacto">CONTACTO</p>
          <div className="contacto-container">
            <div className="contacto">
              <FontAwesomeIcon icon={faPhoneAlt} className="icono" />
              {form1.phone.map((el) => (
                <span className="numero">{el}</span>
              ))}
            </div>

            <div className="contacto">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icono" />
              <span className="ubicacion">{form1.place}</span>
            </div>

            <div className="contacto">
              <FontAwesomeIcon icon={faEnvelope} className="icono" />
              <span className="correo">{form1.email}</span>
            </div>
          </div>

          <p className="title-motivaciones">MOTIVACIONES</p>

          {form2.motivation.map((el) => (
            <p className="motivacion">{el}</p>
          ))}

          <p className="title-cualidades">CUALIDADES</p>

          {form2.qualities.map((el) => (
            <p className="cualidad">{el}</p>
          ))}

          <p className="title-idiomas">IDIOMAS</p>
          {form2.language.map((el) => (
            <p className="idioma">{el}</p>
          ))}
        </div>
      </div>
    </PlantillaCv3Container>
  );
};

export default PlantillaRenderCv3;
