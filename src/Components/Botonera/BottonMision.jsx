import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const BottonMision = () => {

    let navegate = useNavigate()
    const Misiones = () => {
        navegate("/misiones")
    }

    return(
        <Fragment>
            <button onClick={Misiones}><div className="boton-misiones"></div></button>
        </Fragment>
    )
}

export default BottonMision;