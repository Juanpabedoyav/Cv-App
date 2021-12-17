import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ContainerPersonalData,
  ContainerPrincipal,
  ContainerProfesionalProfile,
  ContainerprofileImg,
  ContainerTitle,
} from "../styles/PlantillaRenderCv1";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PlantillaRenderCv1 = () => {
  // const { form1, form2 } = useSelector((state) => state.pdfData);
  /* console.log(form1);
  console.log(form2); */

  const { name, lastName, email, image, phone, place, position } = JSON.parse(
    localStorage.getItem("formcv1")
  );

  const { qualities, motivation, jobExperiences, skills, language, perfil } =
    JSON.parse(localStorage.getItem("formcv2"));

  const [bandera, setBandera] = useState(0);

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
            url: "/plantilla1",
            plantilla: `Plantilla ${name} ${lastName}.pdf`,
          },
        ])
      );
    }
  }, []);

  return (
    <>
      <ContainerPrincipal ref={ref}>
        <h1 className="principal-title">Hoja de vida </h1>

        <ContainerprofileImg src={image} />

        <ContainerPersonalData>
          <ContainerTitle>
            <h2> DATOS PERSONALES </h2>
          </ContainerTitle>
          <ul>
            <li>
              <h3>Nombre: {name}</h3>
            </li>
            <li>
              <h3>Apellido: {lastName}</h3>
            </li>
            <li>
              <h3>E-mail: {email}</h3>
            </li>
            <li>
              <h3>Cargo: {position}</h3>
            </li>
            <li>
              <h3>Ubicacion: {place}</h3>
            </li>
            <li>
              <h3>Telefono: {phone.map((el) => el + " ")}</h3>
            </li>
          </ul>
        </ContainerPersonalData>

        <ContainerProfesionalProfile>
          <ContainerTitle>
            <h2> PERFIL PROFESIONAL </h2>
          </ContainerTitle>
          <ul>
            <li>
              {/*{form2.perfil.map((el) => el + " ")} */}
              <h3>Sobre mi: {perfil} </h3>
            </li>
            <li>
              <h3>Cualidades: {qualities.map((el) => el + " ")}</h3>
            </li>
            <li>
              <h3>Motivaciones: {motivation.map((el) => el + " ")}</h3>
            </li>
            <li>
              <h3>
                Experincias laborales: {jobExperiences.map((el) => el + " ")}
              </h3>
            </li>
            <li>
              <h3>Habilidades blandas: {skills.map((el) => el + " ")}</h3>
            </li>
            <li>
              <h3>Idiomas: {language.map((el) => el + " ")}</h3>
            </li>
          </ul>
        </ContainerProfesionalProfile>
        <Pdf targetRef={ref} filename={`Plantilla ${name} ${lastName}.pdf`}>
          {({ toPdf }) => (
            <button onClick={toPdf} className="elegir-imagen">
              Descargar Plantilla
              {console.log(toPdf(this))}
            </button>
          )}
        </Pdf>
      </ContainerPrincipal>
    </>
  );
};

export default PlantillaRenderCv1;
