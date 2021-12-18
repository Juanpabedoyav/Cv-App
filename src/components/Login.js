import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkReact } from "react-router-dom";
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
import { Formik, Form, ErrorMessage } from "formik";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const Login = () => {
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
              src="https://res.cloudinary.com/da6fz1omm/image/upload/v1639621482/logo3_igjcpr.png"
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
              //console.log(valores);
              dispatch(loginPhoneAndPassword(valores.phone, valores.password));
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
