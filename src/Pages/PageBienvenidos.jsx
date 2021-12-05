import React, { Fragment } from "react";
import Botons from "../Components/Botonera/BotonsInicio";
import Bienvenidos from "../Components/Titles/Bienvenidos";
import '../../src/App.css'

const PageBienvenidos = () => {
    return(
        <Fragment >
            <div className="background">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <Botons />
                <Bienvenidos />
            </div>
        </Fragment>
    )
}

export default PageBienvenidos;