import React from 'react'
import { Link } from 'react-router-dom'
import { CasillaPlantilla, ContenedorPlantillas, ContenedorPlantilla, ImagenPlantilla, TextoPlantilla, ContenedorGrid } from '../styles/Plantillas.style'
import { BotonDesplazar, ContenedorBotones } from '../styles/FormCv.style'

const PlantillasCv = () => {
    return (
        <>
        <ContenedorPlantillas>
            <ContenedorPlantilla>
                <ContenedorGrid>
                    <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
                    <CasillaPlantilla type="checkbox" />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
            </ContenedorPlantilla> {/* .ContenedorPlantilla */}
            <ContenedorPlantilla>
                <ContenedorGrid>
                    <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
                    <CasillaPlantilla type="checkbox" />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
            </ContenedorPlantilla> {/* .ContenedorPlantilla */}
            <ContenedorPlantilla>
                <ContenedorGrid>
                    <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
                    <CasillaPlantilla type="checkbox" />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
            </ContenedorPlantilla> {/* .ContenedorPlantilla */}
            <ContenedorPlantilla>
                <ContenedorGrid>
                    <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
                    <CasillaPlantilla type="checkbox" />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
            </ContenedorPlantilla> {/* .ContenedorPlantilla */}
            <ContenedorPlantilla>
                <ContenedorGrid>
                    <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
                    <CasillaPlantilla type="checkbox" />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
            </ContenedorPlantilla> {/* .ContenedorPlantilla */}
            <ContenedorPlantilla>
                <ContenedorGrid>
                    <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
                    <CasillaPlantilla type="checkbox" />
                </ContenedorGrid>
                <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
            </ContenedorPlantilla> {/* .ContenedorPlantilla */}
            
            
        </ContenedorPlantillas>
                <ContenedorBotones>
                    <Link to="/formcv2"><BotonDesplazar color="rgb(45 74 79)" border="1px solid rgb(45 74 79)">Regresar</BotonDesplazar></Link>
                    <Link to="/vistaprevia"> <BotonDesplazar padding="1rem 3rem" color="#fff" backgroundColor="rgb(45 74 79)">Crear CV</BotonDesplazar> </Link>
                </ContenedorBotones>
        </>
    )
}

export default PlantillasCv
