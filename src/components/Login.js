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
/* import {useFormik} from 'formik' */
import { registerAction } from "../redux/actions/registerAction";
import { loginPhoneAndPassword } from "../redux/actions/loginAction";
import {useForm} from  '../hooks/useForm'

const Login = () => {

  const [form, handleInputChange, reset] = useForm({
    phone: "",
    password: ""
  })

  const {phone, password}= form
  
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();    

    dispatch(loginPhoneAndPassword())
  }
  
  // const formik = useFormik({
  //     initialValues:{
  
  //         phone:"",
  //         password:""
         
  //     },
  //     onSubmit: () => {
  //         /* (login(registerAction(data)) */
  //         dispatch(loginPhoneAndPassword())
            
  
  //     }
  
  // });

 

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

          <form onSubmit={handleSubmit}>
            <ContenedorInputs>
              <FormControl id="first-name" isRequired>
                <InputForm 
                value={phone}
                placeholder="Teléfono celular"
                name="phone"
                onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                {/* <Label1 ><FormLabel  >Contraseña</FormLabel></Label1 > */}
                <InputForm 
                value={password}
                type="password" 
                placeholder="Contraseña"
                name="password"
                onChange={handleInputChange}
                 />
              </FormControl>

              <ForgotPassword>
                <p>
                  <i>¿Olvidaste la contraseña?</i>
                </p>
              </ForgotPassword>
            </ContenedorInputs>
            {/* <LinkReact to="/home">  */}
              <Button type="submit" className="botton-login">Ingresar</Button>
           {/* </LinkReact> */}
           
          </form>
          
        </div>
        
      </ContainerLogin>
    </>
  );
};

export default Login;
