import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import {
  InputForm,
  ContenedorInputs,
  TitleRegistro,
  ContainerUpdate,
  ImgLogin,
} from "../styles/UpdatePassword.Style";
import { useDispatch } from "react-redux";
import { loginPhoneAndPassword } from "../redux/actions/loginAction";
import { Formik, Form, ErrorMessage } from "formik";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { updatePassword } from "../redux/actions/updateAction";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ContainerUpdate>
      <LinkReact to="/" className="back-container">
        <FontAwesomeIcon icon={faReply} className="back" />
      </LinkReact>{" "}
      <div>
        <ImgLogin>
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1639621482/logo3_igjcpr.png"
            alt="logo"
          />
        </ImgLogin>
        <TitleRegistro>Actualizar contraseña</TitleRegistro>

        <Formik
          initialValues={{
            phone: "",
            password1: "",
            password2: "",
          }}
          validate={(valores) => {
            let fallos = {};

            if (!valores.phone) {
              fallos.phone = "Ingresa un télefono por favor";
            } else if (!/^\d{10}$/.test(valores.phone)) {
              fallos.phone = "El télefono que ingresaste no es valido";
            }

            if (!valores.password1) {
              fallos.password1 = "Ingrese su nueva contraseña por favor";
            } else if (!/^[A-Za-z]\w{4,11}$/.test(valores.password1)) {
              fallos.password1 =
                "La contraseña debe iniciar con letra y tener entre 5 a 10 caracteres con letras y números";
            }

            if (!valores.password2) {
              fallos.password2 = "Ingrese su contraseña por favor ";
            } else if (valores.password1 !== valores.password2) {
              fallos.password2 = "Las contraseñas no coinciden ";
            }

            return fallos;
          }}
          onSubmit={async (valores) => {
            // console.log(valores);
            dispatch(loginPhoneAndPassword(valores.phone, valores.password));
            navigate("/login");
            Swal.fire({
              icon: "success",
              title: "Contraseña Actualizada",
              showConfirmButton: false,
              timer: 1800,
            });

            // console.log('enviado')
          }}
        >
          {({ values, errors, handleChange, handleBlur }) => (
            <Form>
              <ContenedorInputs>
                <FormControl isRequired>
                  <InputForm
                    value={values.phone}
                    placeholder="Teléfono celular"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="phone"
                    component={() => (
                      <Alert
                        status="error"
                        margin="auto"
                        borderRadius="8px"
                        width="92%"
                        mb={4}
                        mt={-3}
                      >
                        <AlertIcon />
                        <AlertTitle mr={4}>{errors.phone}</AlertTitle>
                      </Alert>
                    )}
                  />
                </FormControl>
                <FormControl isRequired>
                  <InputForm
                    value={values.password1}
                    type="password"
                    placeholder="Nueva Contraseña"
                    name="password1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="password1"
                    component={() => (
                      <Alert
                        status="error"
                        margin="auto"
                        borderRadius="8px"
                        width="92%"
                        mb={4}
                        mt={-3}
                      >
                        <AlertIcon />
                        <AlertTitle mr={4}>{errors.password1}</AlertTitle>
                      </Alert>
                    )}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  {/* <Label1 ><FormLabel  >Contraseña</FormLabel></Label1 > */}
                  <InputForm
                    value={values.password2}
                    type="password"
                    placeholder="Confirmar Nueva Contraseña"
                    name="password2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="password2"
                    component={() => (
                      <Alert
                        status="error"
                        margin="auto"
                        borderRadius="8px"
                        width="92%"
                        mb={4}
                        mt={-3}
                      >
                        <AlertIcon />
                        <AlertTitle mr={4}>{errors.password2}</AlertTitle>
                      </Alert>
                    )}
                  />
                </FormControl>
              </ContenedorInputs>

              <Button
                type="submit"
                className="botton-login"
                onClick={() =>
                  dispatch(updatePassword(values.phone, values.password1))
                }
              >
                Actualizar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ContainerUpdate>
  );
};

export default UpdatePassword;
