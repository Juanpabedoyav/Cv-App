import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PlantillaCv2 } from '../styles/PlantillaRenderCv2.style';


const PlantillaRenderCv1 = () => {

    const {form1, form2} = useSelector(state => state.pdfData)
// const{name} =form1;
    return (
        <div>       
             <PlantillaCv2>
            <div className='detalle'>
                <div className='img-plantilla'>
                    {/* <img  src='https://www.hoja-de-vida.co/wp-content/uploads/2021/07/hoja-de-vida-descargar-gratis-word.jpg' alt=''/> */}
                </div>
                 <h1 className='name'>name</h1>
                <h3 className='position'>pusto/cargo</h3>
                <hr style={{marginTop: "20px"}}/>

                <section className='contact'>
                    <h1>Contacto</h1>
                    <ul className='contact-list'>
                    <li>31232121323123</li>

                    <li>correro@corremo.com</li>
                    <li>Ciudad: </li>

                    </ul>
                </section>
                <section className='profile'>
                    <h1>Perfil</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </section>


            </div>
            
        <div className = 'info'>
            <section className='expeciencia-profesional'>
                    <h1>Experiencia Profesional</h1>
                    <article className='list-profesional'>
                        <h2>Nombre de la Empresa</h2>
                        <h3 >pusto/cargo</h3>
                        <h4>Tareas:</h4>
                        <ul>
                            <li>hola</li>
                            <li>hola</li>
                            <li>hola</li>
                        </ul>  
                    </article>
                    <article>
                    <h2>Nombre de la Empresa</h2>
                        <h3 >pusto/cargo</h3>
                        <h4>Tareas:</h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </article> 
            </section>
            <section className='educacion'>
            <h1>Educacion</h1>
            <article className='list-educacion'>
            <h3 >año | ciudad</h3>

                        <h2>Nombre del titulo o diploma</h2>
                        <h3 >Institucion educativa</h3>

                        
                    </article>
            </section> 
        </div>
        

            
        </PlantillaCv2>
        </div>

    )
}

export default PlantillaRenderCv1

