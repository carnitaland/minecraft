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
                <BotonsInicio />
                <BottonReglas />
                <BotonAvatar />

                <CarnitaGames />

                <div className="container-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni qui sequi cum quas repellat sunt reiciendis, illum beatae laborum deserunt aliquid rem quam asperiores. Assumenda a nihil eius commodi.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis accusantium enim vitae aperiam ipsum iure corporis dicta reprehenderit animi, doloribus omnis alias impedit a et iusto recusandae quo, voluptate odio.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro sint animi, consectetur voluptas illum. Iusto cupiditate maxime reprehenderit possimus, rem tempore ex, quo voluptate nam voluptatem dolore rerum! Recusandae?</p>
                </div>

            </div>
        </Fragment>
    )
}

export default PageCarnita;