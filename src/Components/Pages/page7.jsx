import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Page7 = () => {

    let navigate = useNavigate();

    const Home = () => {
        navigate("/");
    }
    const Bases = () => {
        navigate("/basesycondiciones")
    }

    const Mision = () => {
        navigate("/misiones")
    }

    const Premio =()=>{
        navigate("/premios")
    }

    const Events =()=>{
        navigate("/eventos")
    }

    const style = {
        borders:{
            border:"1px solid white",
            background:"rgba(0, 0, 0, 0.452)",
            color:"white",
            width:"70%",
            marginLeft:"auto",
            marginRight: "auto",
            padding:"20px",
            marginTop:"60px",
            borderRadius:"10px",
            boxShadow:"0 0 10px 0 white",
            fontFamily:"verdana"
        },
        title:{
            fontSize:"50px",
            padding:"20px",
            color:"orange",
            borderRight:"3px solid orange",
            borderBottom:"3px solid orange",
            borderRadius:"10px",
            width:"70%",
            marginLeft:"auto",
            marginRight:"auto",
            background:"rgba(0, 0, 0, 0.352)",
        },
        btn:{
            background:"green"
        },
        btnEnviar:{
            margin:"auto",
            width: "245px",
        }
        // formulario:{
        //     padding:"10px",
        //     borderRadius:"5px",
        //     // backgroundColor:"rgba(0, 0, 0, 0.281)",
        //     // boxShadow:"0 0 20px 0 white"
        // }
    }
    return(
        <Fragment>
            <div className="logoRegistrarse">
                <div className="logo"></div>
                <div className="title-Registro"></div>
               
                <div>
                    <form action="" method="get">
                        <div className="formulario"></div>
                            <div>
                                <div className="contenedor-input">
                                    <input type="text" placeholder="nombre" />
                                </div>
                                <div className="contenedor-input">
                                    <input type="text" placeholder="Apellido" />
                                </div>
                                <div className="contenedor-input">
                                    <input type="text" placeholder="Nick" />
                                </div>
                                <div>
                                    <button style={style.btnEnviar}>ENVIAR</button>
                                </div>
                            </div>
                    </form>
                </div>

                <div >
                    <button style={style.btn} onClick={Home}>INICIO</button>
                    <button onClick={Bases}>REGLAMENTOS</button>
                    <button onClick={Mision}>MISIONES</button>
                    <button onClick={Premio}>CARNITA-GAMES</button>
                    <button onClick={Events}>EVENTOS</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Page7;  