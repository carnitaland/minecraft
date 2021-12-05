import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const BottonEvento = () => {
    let navegate = useNavigate()

    const Evento = () => {
        navegate("/eventos")
    }
    return(
        <Fragment>
            <button onClick={Evento}><div className="boton-evento"></div></button>
        </Fragment>
    )
}

export default BottonEvento;