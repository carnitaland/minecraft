
import React, { Fragment } from "react";
import BottonReglas from "../Components/Botonera/BottonReglas";
import BotonsInicio from '../Components/Botonera/BotonsInicio';
import BottonEvento from "../Components/Botonera/BottonEvento";
import Misiones from "../Components/Titles/Misiones";
import BottonCarnita from "../Components/Botonera/BottonCarnita";
import BotonAvatar from "../Components/Botonera/BotonAvatar";

const PageMisiones = () => {
    return(
        <Fragment>
            <div className="background-misiones">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonReglas/>
                <BottonEvento />
                <BotonsInicio />
                <BottonCarnita />
                <BotonAvatar />
                <Misiones />
            </div>
        </Fragment>
    )
}

export default PageMisiones;