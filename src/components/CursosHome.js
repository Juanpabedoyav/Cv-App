import { Link } from "react-router-dom";
import React from "react";
import { CursosContainer } from "../styles/CursosHome.styles";

const CursosHome = () => {
  return (
    <CursosContainer>
      <div className="curso-card">
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/videoseries?list=PLHfF1zjNgCp5ITXzAceDYlfQil1SIDOfI"
          title="3 maneras no tradicionales  en las que te van a pedir tu curriculum"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="curso-card">
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/videoseries?list=PL_kDrU9ou5Pf4sSM1MHJphSWl4dVoduS8"
          title="¿Cual es tu trabajo ideal?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="curso-card">
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/hLyx1ME9DKI"
          title="Taller habilidades blandas"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <Link to="/tutoriales">
        <h5>Ver todo</h5>
      </Link>
      <div className="curso-hidden">Hola mundo</div>
    </CursosContainer>
  );
};

export default CursosHome;
