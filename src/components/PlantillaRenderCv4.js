import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ContenedorDetalles,
  ContenedorInfoPrincipal,
  MainContainer,
} from "../styles/PlantillaRenderCv4.styles";
import Pdf from "react-to-pdf";
import { Link } from "react-router-dom";

const ref = React.createRef();

const PlantillaRenderCv = () => {
  const { form1, form2 } = useSelector((state) => state.pdfData);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("plantillas"))) {
      localStorage.setItem(
        "plantillas",
        JSON.stringify([
          {
            url: "/plantilla1",
            plantilla: `Plantilla ${form1.name} ${form1.lastName}.pdf`,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "plantillas",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("plantillas")),
          {
            url: "/plantilla4",
            plantilla: `Plantilla ${form1.name} ${form1.lastName}.pdf`,
          },
        ])
      );
    }
  }, []);

  return (
    <MainContainer>
      <div className="plantilla-container">
        <ContenedorInfoPrincipal ref={ref}>
          <div
            style={{
              margin: "0 auto 25px auto",
              width: "120px",
              height: "120px",
            }}
          >
            <img src={form1.image} alt={form1.name} />
          </div>
          <h1>
            {form1.name} {form1.lastName}
          </h1>
          <div className="spanDiv">
            <span>{form1.position} </span>
          </div>
          <div>
            <p>Ciudad: {form1.place} </p>
            <p>Correo: {form1.email}</p>
            <p>Teléfono: {form1.phone.map((el) => el + " ")}</p>
          </div>
        </ContenedorInfoPrincipal>
        <ContenedorDetalles>
          <div className="contenedorInformacion">
            <div className="grid-1">
              <section>
                <h2 className="tituloHabilidades">Perfil</h2>
                <p className="parrafoPerfil">{form2.perfil}</p>
              </section>
              <section>
                <h2 className="tituloHabilidades">Idiomas</h2>
                <h4>Idiomas : {form2.language.map((el) => el + " ")}</h4>
              </section>
              <section>
                <h2 className="tituloHabilidades">Habilidades:</h2>
                {/* <div className="habilidadBarra"></div> */}
                {form2.skills.map((el) => {
                  return <p className="textoHabilidades">{el}</p>;
                })}
              </section>
            </div>
            <div className="grid-2">
              <section>
                <h2 className="tituloHabilidades">Experiencia Profesional</h2>
              </section>
              <article>
                {form2.jobExperiences.map((el) => (
                  <p className="experiencia">{el}</p>
                ))}
              </article>
            </div>
          </div>
        </ContenedorDetalles>
      </div>

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

export default PlantillaRenderCv;
