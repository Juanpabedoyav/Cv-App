import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { Link as LinkReact } from "react-router-dom";
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
// import {useFormik} from 'formik'
import { register, registerAction } from "../redux/actions/registerAction";
import { useForm } from "../hooks/useForm";

const Registro = () => {
  const elegirImagen = () => document.getElementById("image").click();


const dispatch = useDispatch();
// uso de formik no funciona
// const formik = useFormik({
//     initialValues:{

//         name: "",
//         number:"",
//         password:"",
//         password2: ""
       
//     },
//     onSubmit: () => {

//       console.log("Ejecuto")
//       console.log(formik.initialValues)
     
//       dispatch(register(formik.initialValues.name,
//         formik.initialValues.number,
//         formik.initialValues.password
//         ))
      
//     }

// });

  const [form, handleInputChange, reset] = useForm({
    name: "",
    phone:"",
    password:"",
    password2: ""
  })

  const {name, phone, password, password2 }= form  

  const handleSubmit = e =>{
    e.preventDefault()
    // console.log(e)
  if(password === password2){
    dispatch(registerAction({name, phone, password}))
  
  } else {
    alert('Las contraseñas no son iguales.')
  }
}


  return (
    <StyleRegistro>
      <LinkReact to="/" className="back-container">
        <FontAwesomeIcon icon={faReply} className="back" />
      </LinkReact>

      <ImgRegistro>
        <img
          src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg"
          alt="logo"
        />
      </ImgRegistro>
      <TitleRegistro>Crea tu cuenta</TitleRegistro>
      <form onSubmit={handleSubmit} className="formulario">
        <ContenedorInputs>
          <FormControl isRequired>
            <InputForm
            name="name"
            onChange={handleInputChange}
            className="input" 
            placeholder="Nombre y Apellidos "
            value={name} />
            
          </FormControl>

          <FormControl  isRequired>
            <InputForm 
            name="phone"
            onChange={handleInputChange}
            className="input" 
            placeholder="Telefono celular "
            value={phone} />
            
          </FormControl>

          <FormControl  style={{ display: "none" }}>
            <Input
            type="file"/>
          </FormControl>

          <FormControl isRequired>
            <InputForm
              onChange={handleInputChange}
              type="password"
              className="input"
              placeholder="Contraseña "
              name='password'
              value={password}

            />
          </FormControl>

          <FormControl isRequired>
            <InputForm
              onChange={handleInputChange}
              type="password"
              className="input"
              placeholder="Confirmar contraseña"
              name="password2"
              value={password2}

            />
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

        <Button
          type='submit'
          className="botton-submit button" 
          size="lg">
          Crear cuenta
        </Button>
      </form>

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
