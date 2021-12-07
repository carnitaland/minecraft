import React from "react";
import { Fragment } from "react";
import BotonAvatar from "../Components/Botonera/BotonAvatar";
import BottonCarnita from "../Components/Botonera/BottonCarnita";
import BottonEvento from "../Components/Botonera/BottonEvento";
import BottonMision from "../Components/Botonera/BottonMision";
import BottonReglas from "../Components/Botonera/BottonReglas";
import Inicio from "../Components/Titles/Inicio";

const PageInicio = () => {
   
    return(
        <Fragment>
            <div className="background-Inicio">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonReglas />
                <BottonMision />
                <BottonCarnita />
                <BottonEvento />
                <BotonAvatar />
                <Inicio />
            </div>
        </Fragment>
    )
}

export default PageInicio;