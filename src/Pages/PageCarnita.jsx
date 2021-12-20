import React, { Fragment } from "react";
import BottonEvento from "../Components/Botonera/BottonEvento";
import BottonMision from "../Components/Botonera/BottonMision";
import BottonReglas from "../Components/Botonera/BottonReglas";
import BotonsInicio from "../Components/Botonera/BotonsInicio";
import BotonAvatar from "../Components/Botonera/BotonAvatar";
import CarnitaGames from "../Components/Titles/CarnitaGames";
import Table from "../Components/Tabla/Table";
import Avatar from "../Components/Materials/Avatar"
import Avatar2 from "../Components/Materials/Avatar2";
import Avatar3 from "../Components/Materials/Avatar3";

const PageCarnita = (props) => {
   const { user, user2, user3, buscar, buscarPato , buscarNicov} = props;
   
    return(
        <Fragment>
            <div className="background-carnita">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonEvento />
                <BottonMision />
                <BotonsInicio />
                <BottonReglas />
                <BotonAvatar />

                <CarnitaGames />

                <div className="container-avatar">
                   <Avatar buscar={buscar} />
                   <Avatar2 buscarPato={buscarPato}/>
                   <Avatar3 buscarNicov={buscarNicov} />
                </div>

                <div className="container-description">
                   <Table franco={user} pato={user2} nicov={user3} />
                </div>

            </div>
        </Fragment>
    )
}

export default PageCarnita;