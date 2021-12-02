import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {
  CasillaPlantilla,
  ContenedorPlantillas,
  ContenedorPlantilla,
  ImagenPlantilla,
  TextoPlantilla,
  ContenedorGrid,
  ContainerAll,
} from "../styles/Plantillas.style";
import { ContenedorBotones } from "../styles/FormCv.style";

const PlantillasCv = () => {
  return (
    <ContainerAll>
      <ContenedorPlantillas>
        <ContenedorPlantilla>
          <ContenedorGrid>
            <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
            <CasillaPlantilla type="checkbox" />
          </ContenedorGrid>
          <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
        </ContenedorPlantilla>{" "}
        {/* .ContenedorPlantilla */}
        <ContenedorPlantilla>
          <ContenedorGrid>
            <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
            <CasillaPlantilla type="checkbox" />
          </ContenedorGrid>
          <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
        </ContenedorPlantilla>{" "}
        {/* .ContenedorPlantilla */}
        <ContenedorPlantilla>
          <ContenedorGrid>
            <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
            <CasillaPlantilla type="checkbox" />
          </ContenedorGrid>
          <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
        </ContenedorPlantilla>{" "}
        {/* .ContenedorPlantilla */}
        <ContenedorPlantilla>
          <ContenedorGrid>
            <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
            <CasillaPlantilla type="checkbox" />
          </ContenedorGrid>
          <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
        </ContenedorPlantilla>{" "}
        {/* .ContenedorPlantilla */}
        <ContenedorPlantilla>
          <ContenedorGrid>
            <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
            <CasillaPlantilla type="checkbox" />
          </ContenedorGrid>
          <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
        </ContenedorPlantilla>{" "}
        {/* .ContenedorPlantilla */}
        <ContenedorPlantilla>
          <ContenedorGrid>
            <ImagenPlantilla src="https://res.cloudinary.com/workshop-principe/image/upload/v1638332668/Demo%20day/template_1_bin4sh.jpg" />
            <CasillaPlantilla type="checkbox" />
          </ContenedorGrid>
          <TextoPlantilla>Seleccionar plantilla</TextoPlantilla>
        </ContenedorPlantilla>{" "}
        {/* .ContenedorPlantilla */}
      </ContenedorPlantillas>
      <ContenedorBotones>
        <Link to="/formcv2">
          <Button className="button">Regresar</Button>
        </Link>
        <Link to="/vistaprevia">
          {" "}
          <Button padding="1rem 3rem" className="button">
            Crear CV
          </Button>{" "}
        </Link>
      </ContenedorBotones>
    </ContainerAll>
  );
};

export default PlantillasCv;
