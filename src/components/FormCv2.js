import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {
  ContenedorBotones,
  ContenedorInputs,
  FormCvContainer,
  InputForm,
  TituloForm,
} from "../styles/FormCv.style";
import { useNavigate } from "react-router";
import { Formik, Form, ErrorMessage } from "formik";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const FormCv2 = () => {
  const navigate = useNavigate();
  const [tags1, setTags1] = useState([]);
  const [tags2, setTags2] = useState([]);
  const [tags3, setTags3] = useState([]);
  const [tags4, setTags4] = useState([]);
  const [tags5, setTags5] = useState([]);

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
        }}
        validate={(valores) => {
          let fallos = {};

          if (!valores.qualities) {
            fallos.qualities = "Ingresa las cualidades por favor";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.qualities)) {
            fallos.qualities = "Las cualidades solo debe tener letras";
          }

          if (!valores.motivation) {
            fallos.motivation = "Ingresa el nombre por favor";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.motivation)) {
            fallos.motivation = "El nombre solo debe tener letras";
          }

          if (!valores.jobExperiences) {
            fallos.jobExperiences = "Ingresa el nombre por favor";
          } else if (
            !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.jobExperiences)
          ) {
            fallos.jobExperiences = "El nombre solo debe tener letras";
          }

          if (!valores.skills) {
            fallos.skills = "Ingresa los conocimientos y habilidades por favor";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.skills)) {
            fallos.skills =
              "Los conocimientos y habilidades solo debe tener letras";
          }

          return fallos;
        }}
        onSubmit={(valores) => {
          navigate("/plantillascv");
          console.log(valores);
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <Form>
            <ContenedorInputs>
              {/* <InputForm
            placeholder="Cualidades"
            type="text" 
            name="qualities"
            value={values.qualities}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <ErrorMessage name="qualities" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="92%" mb={4} mt={-3}>
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.qualities}</AlertTitle>
                    </Alert>

            )}/>
            
          <InputForm 
            placeholder="Intereses y Motivaciones" 
            type="text"
            name="motivation"
            value={values.motivation}
            onChange={handleChange}
            onBlur={handleBlur} />

          <ErrorMessage name="motivation" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="92%" mb={4} mt={-3}>
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.motivation}</AlertTitle>
                    </Alert>

          )}/>
          
          <InputForm 
            placeholder="Experiencias laborales" 
            type="text"
            name="jobExperiences"
            value={values.jobExperiences}
            onChange={handleChange}
            onBlur={handleBlur} />

          <ErrorMessage name="jobExperiences" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="92%" mb={4} mt={-3}>
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.jobExperiences}</AlertTitle>
                    </Alert>

          )}/>
          
          <InputForm 
            placeholder="Conocimientos y habilidades" 
            type="text"
            name="skills"
            value={values.skills}
            onChange={handleChange}
            onBlur={handleBlur} />

          <ErrorMessage name="skills" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="92%" mb={4} mt={-3}>
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.skills}</AlertTitle>
                    </Alert>

          )}/>

          <InputForm 
            placeholder="Idiomas" 
            type="text"
            name="language"
            value={values.language}
            onChange={handleChange}
            onBlur={handleBlur}/>

          <ErrorMessage name="language" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="92%" mb={4} mt={-3}>
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.language}</AlertTitle>
                    </Alert>

          )}/> */}
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
