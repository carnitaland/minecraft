import React, { Fragment } from "react";
import BottonCarnita from "../Components/Botonera/BottonCarnita";
import BottonEvento from "../Components/Botonera/BottonEvento";
import BottonReglas from "../Components/Botonera/BottonReglas";
import BotonsInicio from "../Components/Botonera/BotonsInicio";
import Avatar from "../Components/Titles/Avatar";
import BottonMision from "../Components/Botonera/BottonMision";

const PageAvatar = () => {
    return(
        <Fragment>
            <div className="background-avatar">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonCarnita />
                <BottonEvento />
                <BottonReglas />
                <BottonMision />
                <BotonsInicio />
                <Avatar />

            </div>
        </Fragment>
    )
}

export default PageAvatar;