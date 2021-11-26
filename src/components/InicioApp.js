import React from 'react'
import FacebookLogin from 'react-facebook-login';

const Inicio = () => {

    const responseFacebook = (response) => {
        console.log(response);
      }
    return (
        <div>
            <h1>Inicio</h1>

            <FacebookLogin
                appId="1088597931155576"
                autoLoad={false}
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook}
            />

            
        </div>
    )
}

export default Inicio
