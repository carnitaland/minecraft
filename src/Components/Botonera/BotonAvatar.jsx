import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const BotonAvatar = () => {
    let navegate = useNavigate()
    const Avatars = () => {
        navegate("/avatar")
    }
    return(
        <Fragment>
            <button onClick={Avatars}><div className="boton-avatar"></div></button>
        </Fragment>
    )
}

export default BotonAvatar;