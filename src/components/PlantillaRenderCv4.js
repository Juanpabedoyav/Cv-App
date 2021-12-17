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

const PlantillaRenderCv4 = () => {
  // const { form1, form2 } = useSelector((state) => state.pdfData);

  const { name, lastName, email, image, phone, place, position } = JSON.parse(
    localStorage.getItem("formcv1")
  );

  const { qualities, motivation, jobExperiences, skills, language, perfil } =
    JSON.parse(localStorage.getItem("formcv2"));

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("plantillas"))) {
      localStorage.setItem(
        "plantillas",
        JSON.stringify([
          {
            url: "/plantilla1",
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
            url: "/plantilla4",
            plantilla: `Plantilla ${name} ${lastName}.pdf`,
          },
        ])
      );
    }
  }, []);

  return (
    <>
    <MainContainer ref={ref}>
      <div className="plantilla-container">
        <ContenedorInfoPrincipal >
          <div
            style={{
              margin: "0 auto 25px auto",
              width: "120px",
              height: "120px",
            }}
          >
            <img src={image} alt={name} />
          </div>
          <h1>
            {name} {lastName}
          </h1>
          <div className="spanDiv">
            <span>{position} </span>
          </div>
          <div>
            <p>Ciudad: {place} </p>
            <p>Correo: {email}</p>
            <p>Teléfono: {phone.map((el) => el + " ")}</p>
          </div>
        </ContenedorInfoPrincipal>
        <ContenedorDetalles>
          <div className="contenedorInformacion">
            <div className="grid-1">
              <section>
                <h2 className="tituloHabilidades">Perfil</h2>
                <p className="parrafoPerfil">{perfil}</p>
              </section>
              <section>
                <h2 className="tituloHabilidades">Idiomas</h2>
                <h4>Idiomas : {language.map((el) => el + " ")}</h4>
              </section>
              <section>
                <h2 className="tituloHabilidades">Habilidades:</h2>
                {/* <div className="habilidadBarra"></div> */}
                {skills.map((el) => {
                  return <p className="textoHabilidades">{el}</p>;
                })}
              </section>
            </div>
            <div className="grid-2">
              <section>
                <h2 className="tituloHabilidades">Experiencia Profesional</h2>
              </section>
              <article>
                {jobExperiences.map((el) => (
                  <p className="experiencia">{el}</p>
                ))}
              </article>
            </div>
          </div>
        </ContenedorDetalles>
      </div> 
    </MainContainer>
  
     <Pdf targetRef={ref} filename="plantilla.pdf">
     {({ toPdf }) => (
       <button onClick={toPdf} className="elegir-imagen">
         {" "}
         Descargar Plantilla{" "}
       </button>
     )}
   </Pdf>
   </>
  );
};

export default PlantillaRenderCv4;
