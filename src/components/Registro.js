import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import {
  ImgRegistro,
  TitleRegistro,
  StyleRegistro,
  InputForm,
  ContenedorInputs,
} from "../styles/Registro.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fileUpload } from "../helpers/fileUpload";
import { registerAction } from "../redux/actions/registerAction";
import { Formik, Form, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const Registro = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const elegirImagen = () => document.getElementById("image").click();

  let img = "";

  const handleFileChangeImg = ({ target }) => {
    const file = target.files[0];

    //console.log(file);

    fileUpload(file)
      .then((url) => {
        img = url;
        //console.log(img);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <StyleRegistro>
      <LinkReact to="/" className="back-container">
        <FontAwesomeIcon icon={faReply} className="back" />
      </LinkReact>

      <ImgRegistro>
        <img
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1639621482/logo3_igjcpr.png"
          alt="logo"
        />
      </ImgRegistro>
      <TitleRegistro>Crea tu cuenta</TitleRegistro>

      <Formik
        initialValues={{
          name: "",
          phone: "",
          password: "",
          password2: "",
          image: "",
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
          if (!valores.password2) {
            fallos.password2 = "Ingrese su contraseña por favor";
          } else if (valores.password !== valores.password2) {
            fallos.password2 = "Las contraseñas no coinciden ";
          }

          if (!valores.name) {
            fallos.name = "Ingrese su nombre";
          } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.name)) {
            fallos.name = "Ingrese un nombre valido ";
          }

          return fallos;
        }}
        onSubmit={(valores) => {
          if (valores.password === valores.password2) {
            dispatch(
              registerAction({
                name: valores.name,
                phone: valores.phone,
                password: valores.password,
                image: img,
              })
            );

            Swal.fire({
              icon: "success",
              title: "Registro Exitoso",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => navigate("/login"), 1850);

            //alert("Registro Exitoso");
          } else {
            alert("Las contraseñas no son iguales.");
          }
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <Form className="formulario">
            <ContenedorInputs>
              <FormControl isRequired>
                <InputForm
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input"
                  placeholder="Nombre y Apellidos "
                  value={values.name}
                />
                <ErrorMessage
                  name="name"
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
                      <AlertTitle mr={4}>{errors.name}</AlertTitle>
                    </Alert>
                  )}
                />
              </FormControl>

              <FormControl isRequired>
                <InputForm
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input"
                  placeholder="Telefono celular "
                  value={values.phone}
                />
                <ErrorMessage
                  name="phone"
                  component={() => (
                    <Alert
                      status="error"
                      margin="auto"
                      width="92%"
                      borderRadius="8px"
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  className="input"
                  placeholder="Contraseña "
                  name="password"
                  value={values.password}
                />

                <ErrorMessage
                  name="password"
                  component={() => (
                    <Alert
                      status="error"
                      margin="auto"
                      width="92%"
                      mb={4}
                      mt={-3}
                      borderRadius="8px"
                    >
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.password}</AlertTitle>
                    </Alert>
                  )}
                />
              </FormControl>

              <FormControl isRequired>
                <InputForm
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  className="input"
                  placeholder="Confirmar contraseña"
                  name="password2"
                  value={values.password2}
                />
                <ErrorMessage
                  name="password2"
                  component={() => (
                    <Alert
                      status="error"
                      margin="auto"
                      width="92%"
                      mb={4}
                      mt={-3}
                      borderRadius="8px"
                    >
                      <AlertIcon />
                      <AlertTitle mr={4}>{errors.password2}</AlertTitle>
                    </Alert>
                  )}
                />
              </FormControl>

              <FormControl style={{ display: "none" }}>
                <Input id="image" type="file" onChange={handleFileChangeImg} />
              </FormControl>
            </ContenedorInputs>

            <Button
              leftIcon={
                <FontAwesomeIcon icon={faUpload} className="icono-upload" />
              }
              className="elegir-imagen"
              onClick={elegirImagen}
            >
              Elegir imagen
            </Button>

            <Button type="submit" className="botton-submit button" size="lg">
              Crear cuenta
            </Button>
          </Form>
        )}
      </Formik>
      <p>
        Si ya tienes una cuenta{" "}
        <LinkReact to="/" className="styles-link-react">
          Ingresar
        </LinkReact>
      </p>
    </StyleRegistro>
  );
};

export default Registro;
