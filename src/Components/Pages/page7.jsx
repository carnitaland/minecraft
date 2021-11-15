import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Page7 = () => {

    let navigate = useNavigate();

    const Home = () => {
        navigate("/");
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
        formulario:{
            padding:"10px",
            borderRadius:"5px",
            // backgroundColor:"rgba(0, 0, 0, 0.281)",
            boxShadow:"0 0 20px 0 white"
        }
    }
    return(
        <Fragment>

            <div>
                <h1 style={style.title}>REGISTRATE</h1>
            </div>

            <div>
                <form action="" method="get">
                    <div className="formulario">FORMULARIO</div>
                    <div style={style.formulario}>
                        <div>
                            <input type="text" placeholder="nombre" />
                        </div>
                        <div>
                            <input type="text" placeholder="Apellido" />
                        </div>
                        <div>
                            <input type="text" placeholder="Nick" />
                        </div>
                        <div>
                            <button>ENVIAR</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
            <button style={style.btn} onClick={Home}>INICIO</button>
            </div>
        </Fragment>
    )
}

export default Page7;  