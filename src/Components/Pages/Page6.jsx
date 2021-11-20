import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const Page6 = () => {

    let navigate = useNavigate();

    const Bases = () => {
        navigate("/basesycondiciones")
    }

    const Mision = () => {
        navigate("/misiones")
    }

    const Home =()=>{
        navigate("/")
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
            <div className="logoProgreso">
                <div className="logo"></div>
                <div>
                    <button style={style.btn} onClick={Home}>INICIO</button>
                    <button onClick={Bases}>REGLAMENTOS</button>
                    <button onClick={Mision}>MISIONES</button>
                    <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                    <button onClick={Events}>EVENTOS</button>
                </div>

                <div className="title-Progreso"></div>

                <div style={style.borders}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut accusantium illo perferendis consequatur repudiandae deleniti, illum consequuntur reiciendis cupiditate placeat itaque ratione, recusandae delectus cum quisquam ipsam quam, vel porro?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ullam voluptatem consectetur maiores atque minima non officia earum cum! Voluptatum voluptas obcaecati dicta expedita sequi rerum minima, eligendi impedit tempora.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam illo nemo non molestias esse porro voluptate. Quibusdam facilis, dolores quod placeat repellat eveniet, quasi fuga expedita quo facere ducimus doloremque.</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut accusantium illo perferendis consequatur repudiandae deleniti, illum consequuntur reiciendis cupiditate placeat itaque ratione, recusandae delectus cum quisquam ipsam quam, vel porro?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ullam voluptatem consectetur maiores atque minima non officia earum cum! Voluptatum voluptas obcaecati dicta expedita sequi rerum minima, eligendi impedit tempora.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam illo nemo non molestias esse porro voluptate. Quibusdam facilis, dolores quod placeat repellat eveniet, quasi fuga expedita quo facere ducimus doloremque.</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut accusantium illo perferendis consequatur repudiandae deleniti, illum consequuntur reiciendis cupiditate placeat itaque ratione, recusandae delectus cum quisquam ipsam quam, vel porro?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ullam voluptatem consectetur maiores atque minima non officia earum cum! Voluptatum voluptas obcaecati dicta expedita sequi rerum minima, eligendi impedit tempora.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam illo nemo non molestias esse porro voluptate. Quibusdam facilis, dolores quod placeat repellat eveniet, quasi fuga expedita quo facere ducimus doloremque.</p>
                </div>
                <div>
                    <button style={style.btn} onClick={Home}>INICIO</button>
                    <button onClick={Bases}>REGLAMENTOS</button>
                    <button onClick={Mision}>MISIONES</button>
                    <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                    <button onClick={Events}>EVENTOS</button>
                </div>
            </div>

        </Fragment>
    )
}

export default Page6;