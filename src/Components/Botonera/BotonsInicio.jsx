import React from "react";
import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';

const Botons = () => {
    let navegator = useNavigate()
    const Inicio = () => {
        navegator("/inicio")
    }
    return(
        <Fragment>
            
            <button onClick={Inicio}><div className="boton-inicio"></div></button>
            
        </Fragment>
    )
}

export default Botons;