import React from "react";
import reactlogo from "../img/Logo-K.svg";
import steam from "../img/logo.svg";


export const Heder = () => {
    return (<div className="B Heder" id="H">
        <img src={reactlogo} alt="Logo de React" className="logo B" />
        <div>
            <h1 className="B">Aplicacion Basica de React</h1>
            <h4 className="B">Carrusel de imagenes basico (Creado con React) 🌐</h4>
        </div>
        <img src={steam} alt="Logo de Steam" className="logo B" width={100} />
    </div>)
}