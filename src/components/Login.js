import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import {
  ContainerLogin,
  ForgotPassword,
  ImgLogin,
} from "../styles/Login.style";
import {
  InputForm,
  ContenedorInputs,
  TitleRegistro,
} from "../styles/Login.style";
import { useDispatch } from "react-redux";
import { loginPhoneAndPassword } from "../redux/actions/loginAction";
import { useForm } from "../hooks/useForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <>
      <ContainerLogin>
        <LinkReact to="/" className="back-container">
          <FontAwesomeIcon icon={faReply} className="back" />
        </LinkReact>{" "}
        <div>
          <ImgLogin>
            <img
              src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1638466378/wx5nvjktake1qgprm4da.jpg"
              alt="logo"
            />
          </ImgLogin>
          <TitleRegistro>Ingresar</TitleRegistro>

          <Formik
            initialValues={{
              phone: "",
              password: "",
            }}
            validate={(valores) => {
              let fallos = {};
              if (!valores.phone) {
                fallos.phone = "Ingresa un télefono por favor";
              } else if (!/^\d{10}$/.test(valores.phone)) {
                fallos.phone = "El télefono que ingresaste no es valido";
              }

              if (!valores.password) {
                fallos.password = "Ingrese su contraseña por favor ";
              } else if (!/^[A-Za-z]\w{4,11}$/.test(valores.password)) {
                fallos.password =
                  "La contraseña debe iniciar con letra y tener entre 5 a 10 caracteres con letras y números";
              }

              return fallos;
            }}
            onSubmit={async (valores) => {
              console.log(valores);
              const resp = await dispatch(
                loginPhoneAndPassword(valores.phone, valores.password)
              );
              setTimeout(() => (resp, 1900));
              Swal.fire({
                icon: "success",
                title: "Bienvenido",
                showConfirmButton: false,
                timer: 1500,
              });

              // console.log('enviado')
            }}
          >
            {({ values, errors, handleChange, handleBlur }) => (
              <Form>
                <ContenedorInputs>
                  <FormControl id="first-name" isRequired>
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
                  <FormControl id="password" isRequired>
                    {/* <Label1 ><FormLabel  >Contraseña</FormLabel></Label1 > */}
                    <InputForm
                      value={values.password}
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="password"
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
                          <AlertTitle mr={4}>{errors.password}</AlertTitle>
                        </Alert>
                      )}
                    />
                  </FormControl>

                  <ForgotPassword>
                    <p>
                      <LinkReact to="/actualizar">
                        <i>¿Olvidaste la contraseña?</i>
                      </LinkReact>
                    </p>
                  </ForgotPassword>
                </ContenedorInputs>

                <Button type="submit" className="botton-login">
                  Ingresar
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </ContainerLogin>
    </>
  );
};

export default Login;
