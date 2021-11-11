import React from 'react'
import { Fragment } from 'react/cjs/react.development'
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Page1 = () => {

    let navigate = useNavigate();

    const Bases = () => {
        navigate("/basesycondiciones")
    }

    const Mision = () => {
        navigate("/misiones")
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
            marginTop:"370px",
            borderRadius:"10px",
            boxShadow:"0 0 10px 0 white",
            fontFamily:"verdana"
        },
        title:{
            fontSize:"50px",
            color:"orange",
           
        }
    }

    return(
        <Fragment>

                <div>
                    <img src="" alt="" />
                    
                    <button onClick={Bases}>REGLAMENTOS</button>
                    <button onClick={Mision}>MISIONES</button>
                    <button onClick={Progress}>PROGRESO</button>
                    <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                    <button onClick={Events}>EVENTOS</button>
                </div>
            <div className="logo"></div>



               
        </Fragment>
    )
}

export default Page1;