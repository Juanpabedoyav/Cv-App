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
import { ErrorMessage, Form, Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {PdfAction} from "../redux/actions/PdfAction"

const FormCv1 = () => {
  const navegar = useNavigate();
const dispatch = useDispatch();
  const [tags, setTags] = useState(["Télefono celular"]);

  return (
    <FormCvContainer>
      <TituloForm>
        Estos son los datos que estarán en tu hoja de vida
      </TituloForm>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          position: "",
          place: "",
          phone: tags,
        }}
        validate={(valores) => {
          let fallos = {};
          if (!valores.name) {
            fallos.name = "Ingresa el nombre por favor";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.name)) {
            fallos.name = "El nombre solo debe tener letras";
          }

          if (!valores.lastName) {
            fallos.lastName = "Ingresa el apellido por favor";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.lastName)) {
            fallos.lastName = "El apellido solo debe tener letras";
          }

          if (!valores.email) {
            fallos.email = "Ingresa el email por favor";
          } else if (
            !/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email)
          ) {
            fallos.email = "El email que ingresaste no es valido";
          }

          if (!valores.position) {
            fallos.position = "Ingresa el lugar de residencia por favor";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.position)) {
            fallos.position = "Ingresa el lugar de residencia por favor";
          }

          if (!valores.place) {
            fallos.place = "Ingresa la ciudad de residencia por favor";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.place)) {
            fallos.place =
              "La ciudad de residencia que ingresaste no es valida";
          }

          return fallos;
        }}
        onSubmit={(valores) => {
          if (tags.length === 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Verifica que todos los campos tengan información correcta!",
            });
          } else {
            navegar("/formcv2");
            dispatch(PdfAction(valores))
            //console.log(valores.phone);
          }
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <Form>
            <ContenedorInputs>
              <InputForm
                placeholder="Nombre"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />

              <ErrorMessage
                name="name"
                component={() => (
                  <Alert
                    status="warning"
                    margin="auto"
                    borderRadius="8px"
                    width="100%"
                    mb={4}
                    mt={-3}
                    color="#272727"
                  >
                    <AlertIcon />
                    <AlertTitle mr={4}>{errors.name}</AlertTitle>
                  </Alert>
                )}
              />
              <InputForm
                placeholder="Apellido"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />

              <ErrorMessage
                name="lastName"
                component={() => (
                  <Alert
                    status="warning"
                    margin="auto"
                    borderRadius="8px"
                    width="100%"
                    mb={4}
                    mt={-3}
                    color="#272727"
                  >
                    <AlertIcon />
                    <AlertTitle mr={4}>{errors.lastName}</AlertTitle>
                  </Alert>
                )}
              />

              <InputForm
                placeholder="Correo Electrónico"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <ErrorMessage
                name="email"
                component={() => (
                  <Alert
                    status="warning"
                    margin="auto"
                    borderRadius="8px"
                    width="100%"
                    mb={4}
                    mt={-3}
                    color="#272727"
                  >
                    <AlertIcon />
                    <AlertTitle mr={4}>{errors.email}</AlertTitle>
                  </Alert>
                )}
              />

              <InputForm
                placeholder="Cargo / Puesto"
                type="text"
                name="position"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.position}
              />
              <ErrorMessage
                name="position"
                component={() => (
                  <Alert
                    status="warning"
                    margin="auto"
                    borderRadius="8px"
                    width="100%"
                    mb={4}
                    mt={-3}
                    color="#272727"
                  >
                    <AlertIcon />
                    <AlertTitle mr={4}>{errors.position}</AlertTitle>
                  </Alert>
                )}
              />

              <InputForm
                placeholder="Lugar de residencia"
                type="text"
                name="place"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.place}
              />
              <ErrorMessage
                name="place"
                component={() => (
                  <Alert
                    status="warning"
                    margin="auto"
                    borderRadius="8px"
                    width="100%"
                    mb={4}
                    mt={-3}
                    color="#272727"
                  >
                    <AlertIcon />
                    <AlertTitle mr={4}>{errors.place}</AlertTitle>
                  </Alert>
                )}
              />

              {/* <InputForm
                placeholder="Teléfono de Contacto"
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <ErrorMessage
                name="phone"
                component={() => (
                  <Alert
                    status="warning"
                    margin="auto"
                    borderRadius="8px"
                    width="100%"
                    mb={4}
                    mt={-3}
                    color="#272727"
                  >
                    <AlertIcon />
                    <AlertTitle mr={4}>{errors.phone}</AlertTitle>
                  </Alert>
                )}
              /> */}

              <ReactTagInput
                tags={tags}
                onChange={(newTags) => setTags(newTags)}
                maxTags={3}
                removeOnBackspace={true}
                placeholder="Teléfono de Contacto"
              />
            </ContenedorInputs>
            <ContenedorBotones>
              <Link to="/home">
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

export default FormCv1;
