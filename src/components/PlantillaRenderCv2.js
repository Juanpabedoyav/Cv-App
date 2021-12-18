import React from "react";
import {
  MainContainer,
  PlantillaCv2,
} from "../styles/PlantillaRenderCv2.style";
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";

const ref = React.createRef();

const PlantillaRenderCv2 = () => {
  //const { form1, form2 } = useSelector((state) => state.pdfData);
  // const{name} =form1;
  /* console.log(form1);
  console.log(form2); */

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
            url: "/plantilla2",
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
            url: "/plantilla2",
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
      <PlantillaCv2 ref={ref}>
        <div className="detalle">
          <div className="img-plantilla">
            <img style={{ borderRadius: "50%" }} src={image} alt="No existe" />
          </div>
          <h1 className="name">{name}</h1>
          <h2 className="last-name">{lastName}</h2>
          <h3 className="position">{position}</h3>
          <hr style={{ marginTop: "20px" }} />

          <section className="contact">
            <h1>Contacto</h1>
            <ul className="contact-list">
              <li>{email}</li>
              <li>Ciudad: {place}</li>
              {phone.map((el) => (
                <li>Télefono: {el}</li>
              ))}
            </ul>
          </section>
          <section className="profile">
            <h1>Perfil</h1>
            <p>{perfil}</p>
          </section>
        </div>

        <div className="info">
          <section className="experiencia-profesional">
            <h1>Experiencia Profesional</h1>

            <article className="list-profesional">
              {jobExperiences.map((el) => (
                <p>{el}</p>
              ))}
            </article>
          </section>
          <section className="educacion">
            <h1>Cualidades</h1>
            <article className="list-educacion">
              {qualities.map((el) => (
                <p>{el}</p>
              ))}
            </article>
            <h1>Habilidades</h1>
            <article className="list-educacion">
              {skills.map((el) => (
                <p>{el}</p>
              ))}
            </article>
            <h1>Motivaciones</h1>
            <article className="list-educacion">
              {motivation.map((el) => (
                <p>{el}</p>
              ))}
            </article>
            <h1>Idiomas</h1>
            <article className="list-educacion">
              {language.map((el) => (
                <p>{el}</p>
              ))}
            </article>
          </section>
        </div>
      </PlantillaCv2>
      <Pdf targetRef={ref} filename={`Plantilla ${name} ${lastName}.pdf`}>
        {({ toPdf }) => (
          <div onClick={handleDescargar}>
            <button onClick={toPdf} className="elegir-imagen">
              Descargar cv
            </button>
          </div>
        )}
      </Pdf>
    </MainContainer>
  );
};

export default PlantillaRenderCv2;
