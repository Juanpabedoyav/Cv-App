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

export const PlantillaCv2 = styled.div`
    /* border: 1px solid red; */
    height: 95vh;
    width : 100%;
    display: flex;
    flex-direction:columns;
    margin-top:20px;
    /* margin: 0 auto; */

.detalle{
    /* border: 1px solid green; */
    width : 43%;
    padding: 30px 10px;
    color: white;
    background-color:#464e5e;
    .img-plantilla{
    // border: 1px solid red;
    border-radius: 50%;
    width: 120px;
    height: 120px;
        img{
            width: 100%;
            height:100%;
            }
    }
    .name{
        font-weight: 800;
        margin-top: 20px;
        font-size: 1.3rem;
        text-align: left;
        margin-bottom: 0;
    }
    .last-name{
      font-weight: 800;
      margin-top: 0;
      font-size: 1.3rem;
      text-align: left;
      margin-bottom: 0;
    }
    .position{
        font-size: .9rem;
        text-align: left;   
    }
    .contact{
        h1{
        font-weight: 800;
        margin-top: 20px;
        font-size: 1rem;
        text-align: left;
        }

        .contact-list{
            list-style:none;
            text-align: left;
            li{
            margin: 10px 0px;
             }
        }
    }
    .profile{
        h1{
        font-weight: 800;
        margin-top: 20px;
        font-size: 1rem;
        text-align: left;
        }
        p{
        margin-top:10px;
        text-align: left;

        }
    }
}

.info{
padding: 30px 8px;
/* border: 1px solid red; */
width: 100%;

p{
  text-align: left;
  margin-bottom: 10px;
}
.experiencia-profesional{
    h1{
        font-weight: 800;
        background-color: #b8dce8;
        width: 100%;
        margin-bottom: 15px;
    }
    h2{
        text-align:left;
        font-weight: 800;
    }
    h3{
        text-align:left;
        font-weight: 600;
        color:gray;
    }
    h4{
        text-align:left;
        font-weight: 600;
        margin-top: 10px;

    }
    ul{
        /* border: 1px solid red; */
        text-align:left;
        margin-bottom:10px;
    }
    li{
        /* border: 1px solid red; */
        margin-left: 15px;
        padding-left: 0px;
    }

    }
}
.educacion{
    ul{
        /* border: 1px solid red; */
        text-align:left;
        margin-bottom:10px;
    }
    li{
        /* border: 1px solid red; */
        margin-left: 15px;
        padding-left: 0px;
    }
 h1{
        font-weight: 800;
        background-color: #b8dce8;
        width: 100%;
        margin-bottom: 15px;

    } 
    h2{
        text-align:left;
        font-weight: 800;
    }
    h3{
        text-align:left;
        font-weight: 600;
        color:gray;

    }
    h4{
        text-align:left;
        font-weight: 600;
        margin-top: 10px;


    }
}
}

.list-profesional{
  margin-bottom: 10px;
}

`;
