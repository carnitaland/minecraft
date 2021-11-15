import React from 'react';
import Inicio from './Inicio'
import BasesCondiciones from './Base-condiciones';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    BrowserRouter
  } from "react-router-dom";
import { Fragment } from 'react/cjs/react.development';
import Misiones from './Misiones';
import Progreso from './Progreso';
import Premios from './Premios';
import Eventos from './Eventos';
import Registrate from './Registrate';

const Rutas = () => {
    return(
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/basesycondiciones" element={<BasesCondiciones />}/>
                    <Route path="/misiones" element={<Misiones />} />
                    <Route path="/progreso" element={<Progreso />} />
                    <Route path="/premios" element={<Premios />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/registrate" element={<Registrate />} />
                </Routes>
                
            </Router>
        </Fragment>
    )
}

export default Rutas;