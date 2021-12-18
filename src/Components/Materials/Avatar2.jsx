import React, { Fragment, useState } from "react";

const Avatar2 = (props) => {

    const { buscarPato } = props
    const llevarDatos = () => {
        let Pato = [{nombre:"PATRICIA", nickname:"CRIATURA DE RUBÍ"}]
        buscarPato(Pato)
    }

    return(
        <Fragment>
            <button onClick={llevarDatos}>
                <div className="avatar2"></div>
                <h3>PATRICIA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita officiis! Vero officiis nobis libero, ratione totam eos at nihil, molestias aut corporis, reiciendis incidunt veritatis deserunt similique magnam neque.</p>
            </button>
        </Fragment>
    )
}

export default Avatar2;