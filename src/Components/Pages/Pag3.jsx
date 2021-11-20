import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';

const Page3 = () => {
    let navigate = useNavigate();

    const Home = () => {
        navigate("/");
    }
    const Bases = () => {
        navigate("/basesycondiciones")
    } 
    const Progress =()=>{
        navigate("/progreso")
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
            marginTop:"",
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
        }
    }
    return(
        
        <Fragment>

            <div className="logoMisiones">
                <div className="logo"></div>
                
                <button style={style.btn} onClick={Home}>INICIO</button>
                <button onClick={Bases}>REGLAMENTOS</button>
                <button onClick={Progress}>PROGRESO</button>
                <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                <button onClick={Events}>EVENTOS</button>

                <div className="title-Misiones"></div>

                <p style={style.borders}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi, dolorem saepe architecto fugit voluptatem magnam expedita cumque possimus laboriosam placeat dignissimos eius numquam molestiae maxime. Odit rerum labore fuga?</p>
                <p style={style.borders}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi, dolorem saepe architecto fugit voluptatem magnam expedita cumque possimus laboriosam placeat dignissimos eius numquam molestiae maxime. Odit rerum labore fuga?</p>
                <p style={style.borders}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi, dolorem saepe architecto fugit voluptatem magnam expedita cumque possimus laboriosam placeat dignissimos eius numquam molestiae maxime. Odit rerum labore fuga?</p>
                <p style={style.borders}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi, dolorem saepe architecto fugit voluptatem magnam expedita cumque possimus laboriosam placeat dignissimos eius numquam molestiae maxime. Odit rerum labore fuga?</p>
                <p style={style.borders}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi, dolorem saepe architecto fugit voluptatem magnam expedita cumque possimus laboriosam placeat dignissimos eius numquam molestiae maxime. Odit rerum labore fuga?</p>
                <p style={style.borders}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi, dolorem saepe architecto fugit voluptatem magnam expedita cumque possimus laboriosam placeat dignissimos eius numquam molestiae maxime. Odit rerum labore fuga?</p>

                <button style={style.btn} onClick={Home}>INICIO</button>
                <button onClick={Bases}>REGLAMENTOS</button>
                <button onClick={Progress}>PROGRESO</button>
                <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                <button onClick={Events}>EVENTOS</button>
            </div>

        </Fragment>
    )
}

export default Page3;