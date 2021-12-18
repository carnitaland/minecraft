import React, { Fragment, useState } from "react";

const Avatar = (props) => {
    
    const {buscar}  = props
    const llevarDatos = () => {
        let Francos = [{nombre:"FRANCO", nickname:"IRON-NEMESIS-47"}];
        buscar(Francos)
    }
    return(
        <Fragment>
            <button onClick={llevarDatos}>
                <div className="avatar1"></div>
                <h3>FRANCO</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita officiis! Vero officiis nobis libero, ratione totam eos at nihil, molestias aut corporis, reiciendis incidunt veritatis deserunt similique magnam neque.</p>
            </button>
        </Fragment>
    )
}

export default Avatar;