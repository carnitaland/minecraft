import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    BrowserRouter
  } from "react-router-dom";
import '../../src/App.css'
import PageInicio from "../Pages/PageInicio";
import PageBienvenidos from "../Pages/PageBienvenidos";
import PageReglas from "../Pages/PageReglas";
import PageMisiones from "../Pages/PageMisiones";
import PageEventos from "../Pages/PageEventos";
import PageCarnita from "../Pages/PageCarnita";
import PageAvatar from "../Pages/PageAvatar";

const Ruts = () => {
    const [avatar1, setAvatar1] = useState("")
    const TraerAvatar = (dato) => {
        setAvatar1(dato)
    }
    console.log(avatar1)
    return(
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<PageBienvenidos />} />
                    <Route path="/inicio" element={<PageInicio />} />
                    <Route path="/reglamentos" element={<PageReglas />} />
                    <Route path="/misiones" element={<PageMisiones />} />
                    <Route path="/eventos" element={<PageEventos />} />
                    <Route path="/carnita-games" element={<PageCarnita go={avatar1} />} />
                    <Route path="/avatar" element={<PageAvatar dato={TraerAvatar} />} />
                </Routes>
            </Router>
        </Fragment>
    )
}

export default Ruts;