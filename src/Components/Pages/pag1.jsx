import React from 'react'
import { Fragment } from 'react/cjs/react.development'
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Registrate from '../Registrate';

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

    const Registrate = () => {
        navigate("/registrate")
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
        },
        cuadros:{
            display: "inline-block",
            
            width:"70%",
            color:"white",
            border:"1px solid white",
            padding:"10px",
            margin:"20px",
            background:"rgba(0, 0, 0, 0.452)",
            borderRadius:"10px"
        }
    }

    return(
        <Fragment>
            <div className="logoInicio">
                <div className="logo"></div>
                    <div>
                        <button onClick={Bases}>REGLAMENTOS</button>
                        <button onClick={Mision}>MISIONES</button>
                        <button onClick={Progress}>PROGRESO</button>
                        <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                        <button onClick={Events}>EVENTOS</button>
                    </div>
                    <div>
                        <button onClick={Registrate}>REGISTRATE</button>
                    </div>
                    <div style={style.cuadros}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut officiis. Veniam dolor quidem ex voluptatem adipisci, odit enim, temporibus quam tempore voluptatibus facere ut rem aperiam quaerat porro alias?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum fugit illo omnis quam reprehenderit voluptate assumenda eaque amet atque dolorum repellendus ullam blanditiis animi quia, ex dolorem esse ab.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat aliquam laboriosam similique iste, voluptatibus veritatis minima odio possimus nulla inventore eveniet soluta aspernatur suscipit maiores autem, molestiae sit animi.</p>
                    </div>
                    <div style={style.cuadros}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut officiis. Veniam dolor quidem ex voluptatem adipisci, odit enim, temporibus quam tempore voluptatibus facere ut rem aperiam quaerat porro alias?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum fugit illo omnis quam reprehenderit voluptate assumenda eaque amet atque dolorum repellendus ullam blanditiis animi quia, ex dolorem esse ab.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat aliquam laboriosam similique iste, voluptatibus veritatis minima odio possimus nulla inventore eveniet soluta aspernatur suscipit maiores autem, molestiae sit animi.</p>
                    </div>
                    <div style={style.cuadros}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut officiis. Veniam dolor quidem ex voluptatem adipisci, odit enim, temporibus quam tempore voluptatibus facere ut rem aperiam quaerat porro alias?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum fugit illo omnis quam reprehenderit voluptate assumenda eaque amet atque dolorum repellendus ullam blanditiis animi quia, ex dolorem esse ab.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat aliquam laboriosam similique iste, voluptatibus veritatis minima odio possimus nulla inventore eveniet soluta aspernatur suscipit maiores autem, molestiae sit animi.</p>
                    </div>
            </div>


               
        </Fragment>
    )
}

export default Page1;