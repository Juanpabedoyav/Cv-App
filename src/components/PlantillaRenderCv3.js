import React from "react";
import {
  MainContainer,
  PlantillaCv3Container,
} from "../styles/PlantillaRenderCv3.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";

const ref = React.createRef();

const PlantillaRenderCv3 = () => {
  // const { form1, form2 } = useSelector((state) => state.pdfData);
  const navegar = useNavigate();

  const { name, lastName, email, image, phone, place, position } = JSON.parse(
    localStorage.getItem("formcv1")
  );

  const { qualities, motivation, jobExperiences, skills, language, perfil } =
    JSON.parse(localStorage.getItem("formcv2"));

  const handleDescargar = () => {
    if (!JSON.parse(localStorage.getItem("plantillas"))) {
      localStorage.setItem(
        "plantillas",
        JSON.stringify([
          {
            url: "/plantilla3",
            plantilla: `Plantilla ${name} ${lastName}.pdf`,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "plantillas",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("plantillas")),
          {
            url: "/plantilla3",
            plantilla: `Plantilla ${name} ${lastName}.pdf`,
          },
        ])
      );
    }
    setTimeout(() => {
      navegar("/descargas");
    }, 2000);
  };

  return (
    <MainContainer>
      <PlantillaCv3Container ref={ref}>
        <div className="plantilla-container">
          <div className="container-1">
            <p className="sobre-mi">SOBRE MI</p>
            <p className="desc">{perfil}</p>
            <p className="title-experiencia">EXPERIENCIA PROFESIONAL</p>
            {jobExperiences.map((el) => (
              <p>{el}</p>
            ))}

            <p className="title-habilidades">CONOCIMIENTOS</p>

            {skills.map((el) => (
              <p>{el}</p>
            ))}
          </div>
          <div className="container-2">
            <img src={image} alt={name} />

            <p className="nombre">{name}</p>
            <p className="apellido">{lastName}</p>
            <p className="cargo">{position}</p>
            <p className="title-contacto">CONTACTO</p>
            <div className="contacto-container">
              <div className="contacto">
                <FontAwesomeIcon icon={faPhoneAlt} className="icono" />
                {phone.map((el) => (
                  <span className="numero">{el}</span>
                ))}
              </div>

              <div className="contacto">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icono" />
                <span className="ubicacion">{place}</span>
              </div>

              <div className="contacto">
                <FontAwesomeIcon icon={faEnvelope} className="icono" />
                <span className="correo">{email}</span>
              </div>
            </div>

            <p className="title-motivaciones">MOTIVACIONES</p>

            {motivation.map((el) => (
              <p className="motivacion">{el}</p>
            ))}

            <p className="title-cualidades">CUALIDADES</p>

            {qualities.map((el) => (
              <p className="cualidad">{el}</p>
            ))}

            <p className="title-idiomas">IDIOMAS</p>
            {language.map((el) => (
              <p className="idioma">{el}</p>
            ))}
          </div>
        </div>
      </PlantillaCv3Container>
      <Pdf targetRef={ref} filename={`Plantilla ${name} ${lastName}.pdf`}>
        {({ toPdf }) => (
          <div onClick={handleDescargar}>
            <button onClick={toPdf} className="elegir-imagen">
              Descargar CV
            </button>
          </div>
        )}
      </Pdf>
    </MainContainer>
  );
};

export default PlantillaRenderCv3;
