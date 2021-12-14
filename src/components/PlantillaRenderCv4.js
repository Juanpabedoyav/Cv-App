import React from 'react';
import { useSelector } from 'react-redux';
import { ContenedorDetalles, ContenedorInfoPrincipal } from '../styles/PlantillaRenderCv4.styles';


const PlantillaRenderCv = () => {

    const {form1, form2} = useSelector(state => state.pdfData)

    return (
        <>
            <ContenedorInfoPrincipal>
                <img src="https://res.cloudinary.com/workshop-principe/image/upload/v1639442683/M%C3%AD/jonmircha_foto_rtid4k.jpg" alt=" " />
                <h1>Nombre Apellido</h1>   
                <div className='spanDiv'>
                    <span>Puesto Ocupado</span>
                    <span>/</span>
                    <span>Puesto Buscado</span>
                </div>          
                <div>
                    <p>Dirección</p>
                    <p>Email</p>
                    <p>Teléfono</p>
                    <p>Linkedin</p>
                </div>
            </ContenedorInfoPrincipal>
            <ContenedorDetalles>
                <div className="contenedorInformacion">
                    <div className='grid-1'>
                        <section>
                            <h2 className="tituloHabilidades">Perfil</h2>
                            <p className="parrafoPerfil">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non saepe ipsa soluta ex? Fugiat praesentium expedita ipsum at temporibus nemo id nesciunt est nihil quaerat quos, blanditiis facere suscipit.</p>
                        </section>
                        <section>
                            <h2 className="tituloHabilidades">Idiomas</h2>
                            <h4>Español : Nativo</h4>
                            <h4>Alemán : Avanzado</h4>
                            <h4>Español : Intermedio</h4>
                        </section>
                        <section>
                            <h2 className="tituloHabilidades">Habilidades</h2>
                            <p className='textoHabilidades'>Comunicación</p>
                            <div className="habilidadBarra"></div>
                            <p className='textoHabilidades'>Responsabilidad</p>
                            <div className="habilidadBarra"></div>
                            <p className='textoHabilidades'>Xxxxxxx</p>
                            <div className="habilidadBarra"></div>
                            <p className='textoHabilidades'>Xxxxxxxxx</p>
                            <div className="habilidadBarra"></div>
                        </section>
                    </div>           
                    <div className='grid-2'>
                        <section>
                            <h2 className="tituloHabilidades">Experiencia Profesional</h2>
                        </section>
                        <article>
                            <h2 className="tituloExperiencia">Nombre de la empresa | puesto ocupado</h2>
                            <p className="fechaExperienciaProfesional">Sep. 20XX - Jul. 20XX</p>
                            <ul>
                                <li className="listasExperiencia">Donec turpis mauris, auctor vitae solicitudin in, elementum</li>
                                <li className="listasExperiencia">Aenean nec turpis tortor. Ut placerat varius vivera vestibulum eu.</li>
                                <li className="listasExperiencia">Ut lacinia commodo erat id vulputate. Orci varius natoque.</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className="tituloExperiencia">Nombre de la empresa | puesto ocupado</h2>
                            <p className="fechaExperienciaProfesional">Sep. 20XX - Jul. 20XX</p>
                            <ul>
                                <li className="listasExperiencia">Donec turpis mauris, auctor vitae solicitudin in, elementum</li>
                                <li className="listasExperiencia">Aenean nec turpis tortor. Ut placerat varius vivera vestibulum eu.</li>
                                <li className="listasExperiencia">Ut lacinia commodo erat id vulputate. Orci varius natoque.</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className="tituloExperiencia">Nombre de la empresa | puesto ocupado</h2>
                            <p className="fechaExperienciaProfesional">Sep. 20XX - Jul. 20XX</p>
                            <ul>
                                <li className="listasExperiencia">Donec turpis mauris, auctor vitae solicitudin in, elementum</li>
                                <li className="listasExperiencia">Aenean nec turpis tortor. Ut placerat varius vivera vestibulum eu.</li>
                                <li className="listasExperiencia">Ut lacinia commodo erat id vulputate. Orci varius natoque.</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className="tituloExperiencia">Nombre de la empresa | puesto ocupado</h2>
                            <p className="fechaExperienciaProfesional">Sep. 20XX - Jul. 20XX</p>
                            <ul>
                                <li className="listasExperiencia">Donec turpis mauris, auctor vitae solicitudin in, elementum</li>
                                <li className="listasExperiencia">Aenean nec turpis tortor. Ut placerat varius vivera vestibulum eu.</li>
                                <li className="listasExperiencia">Ut lacinia commodo erat id vulputate. Orci varius natoque.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </ContenedorDetalles>
        </>
    )
}

export default PlantillaRenderCv

