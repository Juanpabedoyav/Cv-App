import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {
  ContenedorBotones,
  ContenedorInputs,
  FormCvContainer,
  TituloForm,
} from "../styles/FormCv.style";
import { useNavigate } from "react-router";
import { Formik, Form } from "formik";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import Swal from "sweetalert2";

const FormCv2 = () => {
  const navigate = useNavigate();
  const [tags1, setTags1] = useState(["Responsabilidad"]);
  const [tags2, setTags2] = useState(["Aprendizaje continuo"]);
  const [tags3, setTags3] = useState(["Microsoft"]);
  const [tags4, setTags4] = useState(["Excel avanzado"]);
  const [tags5, setTags5] = useState(["Español"]);

  return (
    <FormCvContainer>
      <TituloForm>Qué te recomendamos mostrar en tu hoja de vida</TituloForm>
      <Formik
        initialValues={{
          qualities: tags1,
          motivation: tags2,
          jobExperiences: tags3,
          skills: tags4,
          language: tags5,
          perfil: "",
        }}
        onSubmit={(valores) => {
          if (
            tags1.length === 0 ||
            tags2.length === 0 ||
            tags3.length === 0 ||
            tags4.length === 0 ||
            tags5.length === 0
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Verifica que todos los campos tengan información!",
            });
          } else {
            valores.qualities = tags1;
            valores.motivation = tags2;
            valores.jobExperiences = tags3;
            valores.skills = tags4;
            valores.language = tags5;
            //console.log(valores);
            navigate("/plantillascv");
            localStorage.setItem("formcv2", JSON.stringify(valores));
          }
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <Form>
            <ContenedorInputs>
              <ReactTagInput
                tags={tags1}
                onChange={(newTags) => setTags1(newTags)}
                removeOnBackspace={true}
                placeholder="Cualidades"
              />
              <ReactTagInput
                tags={tags2}
                onChange={(newTags) => setTags2(newTags)}
                removeOnBackspace={true}
                placeholder="Intereses y motivaciones"
              />
              <ReactTagInput
                tags={tags3}
                onChange={(newTags) => setTags3(newTags)}
                removeOnBackspace={true}
                placeholder="Experiencias laborales"
              />
              <ReactTagInput
                tags={tags4}
                onChange={(newTags) => setTags4(newTags)}
                removeOnBackspace={true}
                placeholder="Conocimientos y habilidades"
              />
              <ReactTagInput
                tags={tags5}
                onChange={(newTags) => setTags5(newTags)}
                removeOnBackspace={true}
                placeholder="Idiomas"
              />
              <textarea
                className="perfil"
                name="perfil"
                cols="10"
                rows="8"
                placeholder="Perfil"
                maxlength="300"
                minlength="5"
                onChange={handleChange}
              ></textarea>
            </ContenedorInputs>
            <ContenedorBotones margin="5rem 2rem">
              <Link to="/formcv1">
                <Button className="button">Regresar</Button>
              </Link>
              <Button className="button" type="submit">
                Siguiente
              </Button>{" "}
            </ContenedorBotones>
          </Form>
        )}
      </Formik>
    </FormCvContainer>
  );
};

export default FormCv2;
