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
import { ErrorMessage, Form, Formik } from "formik";
import {useNavigate} from "react-router-dom"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/react'

const FormCv1 = () => {

  
  const navegar = useNavigate();
  
  return (
    <FormCvContainer>
      <TituloForm>
        Estos son los datos que estarán en tu hoja de vida
      </TituloForm>
      <Formik
        initialValues={{
          name:"",
          lastName:"",
          email: "",
          position:"",
          place:"",
          phone:"",
        
        }}
        validate={(valores)=>{

          let fallos ={};
          if(!valores.name){
            fallos.name ="Ingresa el nombre por favor"
          }else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.name)){
            fallos.name="El nombre solo debe tener letras"
          }
          
        
          if(!valores.lastName){
            fallos.lastName ="Ingresa el apellido por favor"
          }else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.lastName)){
            fallos.lastName="El apellido solo debe tener letras"
          }
          
          
          if(!valores.email){
            fallos.email ="Ingresa el email por favor"
          }else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email)){
            fallos.email="El email que ingresaste no es valido"
          }
          
          if(!valores.position){
            fallos.position ="Ingresa el lugar de residencia por favor"
          }else if(!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.position)){
            fallos.position ="Ingresa el lugar de residencia por favor"
          }
          
          
          if(!valores.place){
            fallos.place ="Ingresa la ciudad de residencia por favor"
          }else if(!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.place)){
            fallos.place ="La ciudad de residencia que ingresaste no es valida"
          }
          
          if(!valores.phone){
            fallos.phone ="Ingresa el télofono por favor"
          }else if (!/^\d{10}$/.test(valores.phone)){
            fallos.phone="El télefono que ingresaste no es valido"
          }          

            return fallos

          }
          
        }
        
          onSubmit = {
            () => navegar("/formcv2")
          }
        
        >

      {
        
        ({values, errors,handleChange, handleBlur })=>(

          <Form>
          
            <ContenedorInputs>
              <InputForm 
                placeholder="Nombre" 
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}/>

                <ErrorMessage name="name" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="100%" mb={4} mt={-3}
                      color="#272727">
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.name}</AlertTitle>
                    </Alert>

                )}/>
              <InputForm 
                placeholder="Apellido" 
                type="text"
                name="lastName" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}/>

                <ErrorMessage name="lastName" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="100%" mb={4} mt={-3}
                      color="#272727">
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.lastName}</AlertTitle>
                    </Alert>

                )}/>

              <InputForm 
                placeholder="Correo Electrónico" 
                type="email"
                name="email" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                />

                <ErrorMessage name="email" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="100%" mb={4} mt={-3}
                      color="#272727">
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.email}</AlertTitle>
                    </Alert>

                )}/>

              <InputForm 
                placeholder="Cargo / Puesto" 
                type="text"
                name="position"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.position}
                />
                <ErrorMessage name="position" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="100%" mb={4} mt={-3}
                      color="#272727">
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.position}</AlertTitle>
                    </Alert>

                )}/>

              <InputForm 
                placeholder="Lugar de residencia" 
                type="text"
                name="place"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.place}
                />
                <ErrorMessage name="place" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="100%" mb={4} mt={-3}
                      color="#272727">
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.place}</AlertTitle>
                    </Alert>

                )}/>

              <InputForm 
                placeholder="Teléfono de Contacto" 
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                />
                <ErrorMessage name="phone" component={() => (

                    <Alert 
                      status='warning' 
                      margin="auto"
                      borderRadius="8px" 
                      width="100%" mb={4} mt={-3}
                      color="#272727">
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.phone}</AlertTitle>
                    </Alert>

                )}/>

            </ContenedorInputs>
            <ContenedorBotones>
              <Link to="/home">
                <Button className="button">Regresar</Button>
              </Link>
                              
              <Button className="button" type="submit">Siguiente</Button>{" "}
            
            </ContenedorBotones>
          </Form>

        )
        
      }


      </Formik>
    </FormCvContainer>
  );
};

export default FormCv1;
