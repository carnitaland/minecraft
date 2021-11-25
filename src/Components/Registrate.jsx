import React, { Fragment, useState } from "react";
import Page7 from "./Pages/page7";

const Registrate = (props) => {
    const {todo} = props
    const obtenerdatos = (valor) => {
        todo(valor)
    }
 
    return(
        <Fragment>
            <Page7 traer={obtenerdatos}/>
        </Fragment>
    )
}

export default Registrate;