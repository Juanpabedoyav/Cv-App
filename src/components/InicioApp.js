import React from 'react'
import FacebookLogin from 'react-facebook-login';
import {Button} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { ImgContainer, ImgLogo } from '../styles/InicioApp.styles';

const Inicio = () => {

    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <div>
            <h1>Inicio</h1>
            <ImgContainer><ImgLogo src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1637968857/mk3ocdc7zaenmvrmaskc.jpg" alt="" /></ImgContainer>
            <h1>Curriculum Vitae App</h1>
            <h4>Creando perfiles profesionale </h4>
            <Button leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />} colorScheme="pink" variant="solid">
                Ingresar con celular
            </Button>

            <FacebookLogin
                appId="924317245136822"
                autoLoad={false}
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook}
                icon="fa-facebook"
                textButton='Ingresar con Facebook'
            />
            
            <p>Si no tienes cuenta {

                <Link to="/registro" >Registrate Aquí</Link>
                
                }  
            </p>

        </div>
    )
}

export default Inicio
