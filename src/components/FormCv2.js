import React from "react";
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
import { Formik , Form, ErrorMessage} from "formik";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/react'

const FormCv2 = () => {
  
const navigate = useNavigate()

  
  return (
    <FormCvContainer>
      <TituloForm>Qué te recomendamos mostrar en tu hoja de vida</TituloForm>
      <Formik 
      initialValues={{
        qualities:"",
        motivation:"",
        jobExperiences:"",
        skills:"",
        language:"",
       
                
      }}      
      
      validate = {
        
        (valores) => {

          let fallos = {};

          if(!valores.qualities){
            fallos.qualities = "Ingresa las cualidades por favor"
          }else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.qualities)){
            fallos.qualities ="Las cualidades solo debe tener letras"
          }
          
          if(!valores.motivation){
            fallos.motivation ="Ingresa el nombre por favor"
          }else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.motivation)){
            fallos.motivation="El nombre solo debe tener letras"
          }
          
          if(!valores.jobExperiences){
            fallos.jobExperiences ="Ingresa el nombre por favor"
          }else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.jobExperiences)){
            fallos.jobExperiences="El nombre solo debe tener letras"
          }
          

          if(!valores.skills){
            fallos.skills = "Ingresa los conocimientos y habilidades por favor"
          }else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.skills)){
            fallos.skills = "Los conocimientos y habilidades solo debe tener letras"
          }

          return fallos
          
        }
      
      }

      onSubmit = {

        () => navigate('/plantillascv')

      }

      >   
      
      {({values, errors, handleChange, handleBlur})=>(
        
       <Form> 

        <ContenedorInputs>
        
          <InputForm
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

          )}/>

        </ContenedorInputs>
          <ContenedorBotones margin="5rem 2rem">
            
            <Link to="/formcv1">
              <Button className="button">Regresar</Button>
            </Link>            
              
            <Button className="button" type="submit">Siguiente</Button>{" "}
            
          </ContenedorBotones>
      </Form>
  )}
      </Formik>
    </FormCvContainer>
  );
};

export default FormCv2;
