import React, { Fragment } from "react";
import Page5 from "./Pages/Page5";

const Premios = (props) => {
    const { datass } = props;
    console.log(datass)
    return(
        <Fragment>
            <Page5 datasfinal={datass} />
        </Fragment>
    )
}

export default Premios;