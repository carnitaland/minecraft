import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const BottonCarnita = () => {
    let navegate = useNavigate()
    const CarnitaGames = () => {
        navegate("/carnita-games")
    }
    return(
        <Fragment>
            <button onClick={CarnitaGames}><div className="boton-carnita"></div></button>
        </Fragment>
    )
}

export default BottonCarnita;