import React from "react";
import {
  ContainerPersonalData,
  ContainerPrincipal,
  ContainerProfesionalProfile,
  ContainerprofileImg,
  ContainerTitle,
} from "../styles/PlantillaRenderCv1";
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";

const ref = React.createRef();

const PlantillaRenderCv1 = () => {
  // const { form1, form2 } = useSelector((state) => state.pdfData);
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

    setTimeout(() => {
      navegar("/descargas");
    }, 2000);
  };

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
              <h3>Contacto: {phone.map((el) => el + " ")}</h3>
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
                Experiencias laborales: {jobExperiences.map((el) => el + " ")}
              </h3>
            </li>
            <li>
              <h3>Conocimientos: {skills.map((el) => el + " ")}</h3>
            </li>
            <li>
              <h3>Idiomas: {language.map((el) => el + " ")}</h3>
            </li>
          </ul>
        </ContainerProfesionalProfile>
      </ContainerPrincipal>
      <Pdf targetRef={ref} filename={`Plantilla ${name} ${lastName}.pdf`}>
        {({ toPdf }) => (
          <div onClick={handleDescargar}>
            <button onClick={toPdf} className="elegir-imagen">
              Descargar CV
            </button>
          </div>
        )}
      </Pdf>
    </>
  );
};

export default PlantillaRenderCv1;
