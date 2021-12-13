import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {  
  ContenedorPlantillas,
  ContenedorPlantilla,
  ImagenPlantilla,
  TextoPlantilla,
  ContenedorGrid,
  ContainerAll,
} from "../styles/Plantillas.style";
import { ContenedorBotones } from "../styles/FormCv.style";
import { Field, Formik, Form } from "formik";
import {useNavigate} from "react-router-dom"

const PlantillasCv = () => {

  const navigate = useNavigate();

  return (
    <ContainerAll>
      
      
      <Formik  
      initialValues={{

        plantilla: ""        

      }}
      onSubmit={(values)=>{
        /* e.preventDefault()*/
        //alert('enviado')        
        navigate('/vistaprevia')
      }}
  >

  {({values})=>(

    <Form>
      <ContenedorPlantillas>
              <ContenedorPlantilla>
                <ContenedorGrid>
                  
                  <ImagenPlantilla src="https://www.hoja-de-vida.co/wp-content/uploads/2021/02/formato-hoja-de-vida-basica-y-formal-X5-p1.jpg" />
                  <Field
                    name="plantilla"
                    className="plantillas" 
                    type="radio"
                    value="plantilla1"
                  />
                  
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
              </ContenedorPlantilla>{" "}
              {/* .ContenedorPlantilla */}
              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="  " />
                  
                  <Field 
                    name="plantilla"
                    className='plantillas' 
                    type="radio"
                    value="plantilla2"
                  />

                </ContenedorGrid>

                <TextoPlantilla>Seleccionar Plantilla</TextoPlantilla>
                
              </ContenedorPlantilla>{" "}
              {/* .ContenedorPlantilla */}
              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="https://www.hoja-de-vida.co/wp-content/uploads/2019/09/96-hoja-de-vida-auxiliar-de-enfermeria.jpg" />
                  
                  <Field 
                    name="plantilla"
                    className='plantillas' 
                    type="radio" 
                    value='plantilla3'
                  />
                  
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
              </ContenedorPlantilla>{" "}
              {/* .ContenedorPlantilla */}
              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="https://www.hoja-de-vida.co/wp-content/uploads/2021/07/hoja-de-vida-laboral.jpg" />
                  
                  <Field 
                    name="plantilla" 
                    className='plantillas' 
                    type="radio" 
                    value="plantilla4"
                  />
                  
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
              </ContenedorPlantilla>{" "}
              {/* .ContenedorPlantilla */}
              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="https://www.hoja-de-vida.co/wp-content/uploads/2021/07/hoja-de-vida-para-llenar-e-imprimir.jpg" />
                  <Field 
                    name="plantilla" 
                    className='plantillas' 
                    type="radio"
                    value="plantilla5" 
                  />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
              </ContenedorPlantilla>{" "}
              {/* .ContenedorPlantilla */}
              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
                  <Field 
                    name="plantilla" 
                    className='plantillas' 
                    type="radio"
                    value="plantilla6"
                  />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
              </ContenedorPlantilla>{" "}        
            </ContenedorPlantillas>

            <ContenedorBotones>
              <Link to="/formcv2">                
                <Button className="button">Regresar</Button>
              </Link>
                {" "}


              <Button padding="1rem 3rem" className="button" type="submit">
                <Link to="/plantillaRender">Crear CV</Link> 
              </Button>{" "}
            </ContenedorBotones>
    </Form>

)}
      
      </Formik>
    </ContainerAll>
  );
};

export default PlantillasCv;
