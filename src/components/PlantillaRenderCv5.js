import React from 'react';
import { useSelector } from 'react-redux';


const PlantillaRenderCv = () => {

    const {form1, form2} = useSelector(state => state.pdfData)

    return (
        <div>
            <h2>plantilla render</h2>
            <h1>Hoja de vida </h1>
            <div>
                <img/>
            </div>
            <br/>
            <hr/>
            <p></p>


            
        </div>
    )
}

export default PlantillaRenderCv

