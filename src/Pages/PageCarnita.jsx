import React, { Fragment } from "react";
import BottonEvento from "../Components/Botonera/BottonEvento";
import BottonMision from "../Components/Botonera/BottonMision";
import BottonReglas from "../Components/Botonera/BottonReglas";
import BotonsInicio from "../Components/Botonera/BotonsInicio";
import BotonAvatar from "../Components/Botonera/BotonAvatar";
import CarnitaGames from "../Components/Titles/CarnitaGames";
const PageCarnita = () => {
    return(
        <Fragment>
            <div className="background-carnita">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonEvento />
                <BottonMision />
                <BottonReglas />
                <BotonAvatar />
                <BotonsInicio />

                <CarnitaGames />

            </div>
        </Fragment>
    )
}

export default PageCarnita;