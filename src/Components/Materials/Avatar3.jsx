import React, { Fragment } from "react";

const Avatar3 = (props) => {

    const { buscarNicov } = props
    const llevarDatos = () => {
        let NicoV = [{nombre:"NICOLAS", nickname:"NICOVARGASVEGA"}]
        buscarNicov(NicoV)
    }
    return(
        <Fragment>
            <button onClick={llevarDatos}>
                <div className="avatar3"></div>
                <h3>NICOLAS</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita officiis! Vero officiis nobis libero, ratione totam eos at nihil, molestias aut corporis, reiciendis incidunt veritatis deserunt similique magnam neque.</p>
            </button>
        </Fragment>
    )
}

export default Avatar3;