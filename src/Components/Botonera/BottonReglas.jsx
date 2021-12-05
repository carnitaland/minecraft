import React, { Fragment } from "react";
import '../../App.css';
import { useNavigate } from "react-router";

const BottonReglas = () => {
    let navigate = useNavigate()
    const Reglas = () => {
        navigate("/reglamentos")
    }
    return(
        <Fragment>
            <button onClick={Reglas}><div className="boton-reglas"></div></button>
        </Fragment>
    )
}

export default BottonReglas;