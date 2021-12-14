import React from 'react';
import { useSelector } from 'react-redux';
import { ContainerPersonalData, ContainerPrincipal, ContainerProfesionalProfile, ContainerStudies, ContainerprofileImg, ContainerTitle} from '../styles/PlantillaRenderCv1';


const PlantillaRenderCv1 = () => {

    const {form1, form2} = useSelector(state => state.pdfData)
    // console.log(form1);

    return (
        <>

        <ContainerPrincipal>
              <h1 className='principal-title'>Hoja de vida </h1>
                
                    
                        <ContainerprofileImg src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1636073658/nmpby4t80lq3gvqjaosu.png" />
                   
            
                        {/* {form1.map((item) => ( */}
                <ContainerPersonalData>
                    
                    <ContainerTitle><h2> DATOS PERSONALES </h2></ContainerTitle>
                    <ul>
                        <li><h3>Nombre: {"item.name"}</h3></li>
                        <li><h3>Apellido: {"item.lastName"}</h3></li>
                        <li><h3>E-mail: {"item.email"}</h3></li>
                        <li><h3>Cargo: {"item.position"}</h3></li>
                        <li><h3>Ubicacion: {"item.place"}</h3></li>
                        <li><h3>Telefono: {"item.tags"}</h3></li>
                    </ul> 
                </ContainerPersonalData>
                {/* ))} */}
                {/* {form2.map((item2) => ( */}
                <ContainerProfesionalProfile>
                    <ContainerTitle><h2> PERFIL PROFESIONAL </h2></ContainerTitle>
                    <ul>
                        <li><h3>Cualidades: {"item2.tags1"}</h3></li>
                        <li><h3>Motivaciones: {"item2.tags2"}</h3></li>
                        <li><h3>Experincias laborales: {"item2.tags3"}</h3></li>
                        <li><h3>Habilidades blandas: {"item2.tags4"}</h3></li>
                        <li><h3>Idiomas: {"item2.tags5"}</h3></li>
                       
                    </ul>
                    
                    
                    
                    
                </ContainerProfesionalProfile>
                {/* ))} */}

            </ContainerPrincipal>
            
        </>
    )
}

export default PlantillaRenderCv1

// <CheckoutProduct
                // key={item.name}
                // id={item.lastName}
                // title={item.email}
                // image={item.position}
                // price={item.place}
                // rating={item.phone}
                // />

                      {/* {form1.map((item) => (
                        <></>
                    // console.log(item.name)



                
                    ))} */}