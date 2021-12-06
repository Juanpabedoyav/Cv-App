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

              <div>{errors.qualities}</div>

            )}/>
            
          <InputForm 
            placeholder="Intereses y Motivaciones" 
            type="text"
            name="motivation"
            value={values.motivation}
            onChange={handleChange}
            onBlur={handleBlur} />

          <ErrorMessage name="motivation" component={() => (

            <div>{errors.motivation}</div>

          )}/>
          
          <InputForm 
            placeholder="Experiencias laborales" 
            type="text"
            name="jobExperiences"
            value={values.jobExperiences}
            onChange={handleChange}
            onBlur={handleBlur} />

          <ErrorMessage name="jobExperiences" component={() => (

            <div>{errors.jobExperiences}</div>

          )}/>
          
          <InputForm 
            placeholder="Conocimientos y habilidades" 
            type="text"
            name="skills"
            value={values.skills}
            onChange={handleChange}
            onBlur={handleBlur} />

          <ErrorMessage name="skills" component={() => (

            <div>{errors.skills}</div>

          )}/>

          <InputForm 
            placeholder="Idiomas" 
            type="text"
            name="language"
            value={values.language}
            onChange={handleChange}
            onBlur={handleBlur}/>

          <ErrorMessage name="language" component={() => (

            <div>{errors.language}</div>

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
