import React, { Fragment } from "react";
import BottonCarnita from "../Components/Botonera/BottonCarnita";
import BottonEvento from "../Components/Botonera/BottonEvento";
import BottonReglas from "../Components/Botonera/BottonReglas";
import BotonsInicio from "../Components/Botonera/BotonsInicio";
import BottonMision from "../Components/Botonera/BottonMision";
import Avatars from "../Components/Titles/Avatars";
import Avatar from "../Components/Materials/Avatar"
import Avatar2 from "../Components/Materials/Avatar2";
import Avatar3 from "../Components/Materials/Avatar3";



const PageAvatar = () => {
    
    return(
        <Fragment>
            <div className="background-avatar">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonCarnita />
                <BottonEvento />
                <BotonsInicio />
                <BottonReglas />
                <BottonMision />

                <Avatars />
                <div className="container-avatar">
                   <Avatar />
                   <Avatar2 />
                   <Avatar3 />
                </div>
            </div>
        </Fragment>
    )
}

export default PageAvatar;