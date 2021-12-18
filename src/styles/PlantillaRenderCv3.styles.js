import styled from "styled-components";

export const MainContainer = styled.div`
  .elegir-imagen {
    padding: 1rem;
    border-radius: 4px;
    margin-top: 25px;
    margin-bottom: 1rem;
    width: 90%;
    /* border: 1px solid red; */
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    background-color: var(--color-principal);
    color: var(--color-blanco);
    /* justify-content: left; */
  }
  .elegir-imagen:hover {
    background-color: var(--color-principal);
  }
`;

export const PlantillaCv3Container = styled.div`
  width: 100%;
  height: 100vh;
  /* border: 5px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;

  .plantilla-container {
    width: 100%;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;

    .container-1 {
      width: 60%;
      /* border: 1px solid blue; */
      height: 100vh;
      text-align: left;
      padding: 10px;

      p {
        font-size: 16px;
      }

      .sobre-mi {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 5px;
      }

      .desc {
        font-size: 16px;
      }

      .title-experiencia {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 700;
      }

      .empresa {
        font-weight: 700;
        margin-top: 8px;
      }

      .title-habilidades {
        margin-top: 10px;
        font-weight: 700;
        margin-bottom: 5px;
      }

      .habilidades-container {
        /* border: 1px solid red; */
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
      }
    }

    .container-2 {
      width: 40%;
      height: 100vh;
      /* border: 1px solid black; */
      padding: 10px;
      background-color: #53b8b0;

      img {
        border-radius: 50%;
        width: 130px;
        height: 130px;
        /* border: 1px solid red; */
        margin: 0 auto;
        margin-bottom: 10px;
      }

      .nombre {
        color: white;
        font-size: 20px;
        text-align: left;
        margin-left: 5px;
        font-weight: 700;
      }

      .apellido {
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        margin-left: 5px;
      }

      .cargo {
        color: white;
        font-size: 15px;
        margin-top: 10px;
      }

      .title-contacto {
        text-align: left;
        margin-left: 5px;
        font-weight: 700;
        margin-top: 10px;
      }

      .contacto-container {
        width: 100%;
        /* border: 1px solid red; */
        font-size: 14px;
        height: 90px;
        margin-top: 5px;

        .contacto {
          width: 100%;
          height: 25px;
          /* border: 1px solid green; */
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .numero {
            margin-left: 5px;
            color: white;
            font-size: 12px;
          }

          .ubicacion {
            margin-left: 10px;
            color: white;

            font-size: 12px;
          }

          .correo {
            margin-left: 7px;
            color: white;

            width: 90%;
            margin-top: 0;
            text-align: left;
            /* border: 1px solid black; */
            font-size: 12px;
          }
        }
      }

      .title-motivaciones {
        margin-top: 10px;
        font-weight: 700;
        text-align: left;
        margin-left: 5px;
      }

      .title-cualidades {
        margin-top: 10px;
        font-weight: 700;
        text-align: left;
        margin-left: 5px;
      }

      .titulo {
        font-size: 10px;
        text-align: left;
        margin-left: 5px;
        color: white;
        font-weight: 700;
        margin-top: 5px;
      }

      .universidad {
        font-size: 10px;
        text-align: left;
        margin-left: 5px;
        color: white;
        margin-top: 2px;
      }

      .fecha-universidad {
        font-size: 10px;
        text-align: left;
        margin-left: 5px;
        color: white;
        margin-top: 2px;
      }

      .title-idiomas {
        margin-top: 10px;
        font-weight: 700;
        text-align: left;
        margin-left: 5px;
      }

      .idioma {
        text-align: left;
        margin-left: 5px;
        color: white;
        margin-top: 2px;
      }
    }
  }

  .motivacion {
    text-align: left;
    color: white;
    margin-left: 5px;
  }

  .cualidad {
    text-align: left;
    color: white;
    margin-left: 5px;
  }
`;
