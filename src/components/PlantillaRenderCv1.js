import React from "react";
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
  const { form1, form2 } = useSelector((state) => state.pdfData);
  /* console.log(form1);
  console.log(form2); */

  return (
    <>
      <ContainerPrincipal ref={ref}>
        <h1 className="principal-title">Hoja de vida </h1>

        <ContainerprofileImg src={form1.image} />

        <ContainerPersonalData>
          <ContainerTitle>
            <h2> DATOS PERSONALES </h2>
          </ContainerTitle>
          <ul>
            <li>
              <h3>Nombre: {form1.name}</h3>
            </li>
            <li>
              <h3>Apellido: {form1.lastName}</h3>
            </li>
            <li>
              <h3>E-mail: {form1.email}</h3>
            </li>
            <li>
              <h3>Cargo: {form1.position}</h3>
            </li>
            <li>
              <h3>Ubicacion: {form1.place}</h3>
            </li>
            <li>
              <h3>Telefono: {form1.phone.map((el) => el + " ")}</h3>
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
              <h3>Sobre mi: {form2.perfil} </h3>
            </li>
            <li>
              <h3>Cualidades: {form2.qualities.map((el) => el + " ")}</h3>
            </li>
            <li>
              <h3>Motivaciones: {form2.motivation.map((el) => el + " ")}</h3>
            </li>
            <li>
              <h3>
                Experincias laborales:{" "}
                {form2.jobExperiences.map((el) => el + " ")}
              </h3>
            </li>
            <li>
              <h3>Habilidades blandas: {form2.skills.map((el) => el + " ")}</h3>
            </li>
            <li>
              <h3>Idiomas: {form2.language.map((el) => el + " ")}</h3>
            </li>
          </ul>
        </ContainerProfesionalProfile>
        <Pdf targetRef={ref} filename="plantilla.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="elegir-imagen">
              Descargar Plantilla
            </button>
          )}
        </Pdf>
      </ContainerPrincipal>
    </>
  );
};

export default PlantillaRenderCv1;
