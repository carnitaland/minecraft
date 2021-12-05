import React, { Fragment } from "react";
import '../../App.css';
import { useNavigate } from "react-router";

const BotonsAtras = () => {
    let navegate = useNavigate();
    const Atras = () => {
        navegate("/")
    }
    return(
        <Fragment>
            <button onClick={Atras}>PRINCIPIO</button>
        </Fragment>
    )
}

export default BotonsAtras;