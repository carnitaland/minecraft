import React, { Fragment } from "react";
import BottonReglas from "../Components/Botonera/BottonReglas";
import BottonMision from "../Components/Botonera/BottonMision";
import Eventos from "../Components/Titles/Eventos";
import BotonsInicio from "../Components/Botonera/BotonsInicio";
import BottonCarnita from "../Components/Botonera/BottonCarnita";
import BotonAvatar from "../Components/Botonera/BotonAvatar";
const PageEventos = () => {
    return(
        <Fragment>
            <div className="background-evento">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonReglas />
                <BottonMision />
                <BotonsInicio />
                <BottonCarnita />
                <BotonAvatar />
                <Eventos />
            </div>
        </Fragment>
    )
}

export default PageEventos;