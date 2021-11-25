import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Page7 = (props) => {

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
    }
    const [dataNombre, setDataNombre] = useState("");
    const [dataApellido, setDataApellido] = useState("");
    const [dataNick, setDataNick] = useState("");
    const [dataMail, setDataMail] = useState("");

    const {traer} = props

    const handleChangeNombre =(e)=>{
        setDataNombre(e.target.value)
    }
    const handleChangeApellido = (e) => {
        setDataApellido(e.target.value)
    }
    const handleChangeNick = (e) => {
        setDataNick(e.target.value)
    }
    const handleChangeMail = (e) => {
        setDataMail(e.target.value)
    }

    let Datos = []
    Datos.push(dataNombre, dataApellido, dataNick, dataMail)

    
    const validarDatos= () => {
        traer(Datos)
    }

    return(
        <Fragment>
            <div className="logoRegistrarse">
                <div className="logo"></div>
                <div className="title-Registro"></div>
               
                <div>
                    <form>
                        <div className="formulario"></div>
                            <div>
                                <div className="contenedor-input">
                                    <input type="text" placeholder="nombre" name="nombre" onChange={handleChangeNombre} />
                                </div>
                                <div className="contenedor-input">
                                    <input type="text" placeholder="Apellido" name="apellido"onChange={handleChangeApellido} />
                                </div>
                                <div className="contenedor-input">
                                    <input type="text" placeholder="Nick" name="nick" onChange={handleChangeNick}/>
                                </div>
                                <div className="contenedor-input">
                                    <input type="text" placeholder="E-mail" name="mail" onChange={handleChangeMail}/>
                                </div>
                                <div>
                                    <button  type="button" style={style.btnEnviar} onClick={validarDatos}>PARTICIPAR</button>
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