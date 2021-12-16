import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MainContainer,
  PlantillaCv2,
} from "../styles/PlantillaRenderCv2.style";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PlantillaRenderCv2 = () => {
  const { form1, form2 } = useSelector((state) => state.pdfData);
  // const{name} =form1;
  console.log(form1);
  console.log(form2);
  return (
    <MainContainer>
      <PlantillaCv2 ref={ref}>
        <div className="detalle">
          <div className="img-plantilla">
            <img
              style={{ borderRadius: "50%" }}
              src={form1.image}
              alt="No existe"
            />
          </div>
          <h1 className="name">{form1.name}</h1>
          <h2 className="last-name">{form1.lastName}</h2>
          <h3 className="position">{form1.position}</h3>
          <hr style={{ marginTop: "20px" }} />

          <section className="contact">
            <h1>Contacto</h1>
            <ul className="contact-list">
              <li>{form1.email}</li>

              <li>Ciudad:{form1.place}</li>
            </ul>
          </section>
          <section className="profile">
            <h1>Perfil</h1>
            <p>{form2.perfil}</p>
          </section>
        </div>

        <div className="info">
          <section className="experiencia-profesional">
            <h1>Experiencia Profesional</h1>

            {form2.jobExperiences.map((el) => (
              <article className="list-profesional">
                {form2.skills.map((el) => (
                  <p>{el}</p>
                ))}
              </article>
            ))}
          </section>
          <section className="educacion">
            <h1>Cualidades</h1>
            <article className="list-educacion">
              {form2.qualities.map((el) => (
                <p>{el}</p>
              ))}
            </article>
            <h1>Habilidades</h1>
            <article className="list-educacion">
              {form2.skills.map((el) => (
                <p>{el}</p>
              ))}
            </article>
            <h1>Motivaciones</h1>
            <article className="list-educacion">
              {form2.motivation.map((el) => (
                <p>{el}</p>
              ))}
            </article>
            <h1>Idiomas</h1>
            <article className="list-educacion">
              {form2.language.map((el) => (
                <p>{el}</p>
              ))}
            </article>
          </section>
        </div>
      </PlantillaCv2>
      <Pdf targetRef={ref} filename="plantilla.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="elegir-imagen">
            {" "}
            Descargar Plantilla{" "}
          </button>
        )}
      </Pdf>
    </MainContainer>
  );
};

export default PlantillaRenderCv2;
