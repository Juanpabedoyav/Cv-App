import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {
  ContenedorPlantillas,
  ContenedorPlantilla,
  ImagenPlantilla,
  ContenedorGrid,
  ContainerAll,
  ContenedorBotones,
} from "../styles/Plantillas.style";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const PlantillasCv = () => {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");

  const handleClick = ({ target }) => {
    //console.log(target.checked);
    if (target.checked && target.value === "plantilla1") {
      //console.log("plantilla 1 seleccionada");
      setUrl("/plantilla1");
    }

    if (target.checked && target.value === "plantilla2") {
      //console.log("plantilla 2 seleccionada");
      setUrl("/plantilla2");
    }

    if (target.checked && target.value === "plantilla3") {
      //console.log("plantilla 3 seleccionada");
      setUrl("/plantilla3");
    }

    if (target.checked && target.value === "plantilla4") {
      //console.log("plantilla 4 seleccionada");
      setUrl("/plantilla4");
    }
  };

  return (
    <ContainerAll>
      <Formik
        initialValues={{
          plantilla: "",
        }}
        onSubmit={(values) => {
          /* e.preventDefault()*/
          //alert('enviado')
          navigate("/vistaprevia");
        }}
      >
        {({ values }) => (
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
                    onClick={handleClick}
                  />
                </ContenedorGrid>
              </ContenedorPlantilla>
              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="https://www.hoja-de-vida.co/wp-content/uploads/2021/07/hoja-de-vida-descargar-gratis-word.jpg" />

                  <Field
                    name="plantilla"
                    className="plantillas"
                    type="radio"
                    value="plantilla2"
                    onClick={handleClick}
                  />
                </ContenedorGrid>
              </ContenedorPlantilla>
            </ContenedorPlantillas>

            <ContenedorPlantillas>
              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="https://www.hoja-de-vida.co/wp-content/uploads/2019/09/96-hoja-de-vida-auxiliar-de-enfermeria.jpg" />

                  <Field
                    name="plantilla"
                    className="plantillas"
                    type="radio"
                    value="plantilla3"
                    onClick={handleClick}
                  />
                </ContenedorGrid>
              </ContenedorPlantilla>

              <ContenedorPlantilla>
                <ContenedorGrid>
                  <ImagenPlantilla src="https://www.hoja-de-vida.co/wp-content/uploads/2021/07/hoja-de-vida-laboral.jpg" />

                  <Field
                    name="plantilla"
                    className="plantillas"
                    type="radio"
                    value="plantilla4"
                    onClick={handleClick}
                  />
                </ContenedorGrid>
              </ContenedorPlantilla>
            </ContenedorPlantillas>

            <ContenedorBotones>
              <Link to="/formcv2">
                <Button className="button">Regresar</Button>
              </Link>
              <Link to={url}>
                <Button padding="1rem 3rem" className="button" type="submit">
                  Crear CV
                </Button>
              </Link>
            </ContenedorBotones>
          </Form>
        )}
      </Formik>
    </ContainerAll>
  );
};

export default PlantillasCv;
