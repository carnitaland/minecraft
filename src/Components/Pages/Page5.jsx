import React from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router";

const Page5 = () => {

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
    
    const Progress =()=>{
        navigate("/progreso")
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
            ackground:"green"
        }
    }

    return(
        <Fragment>

            <div className="logoPremio">
                <div>
                    <img src="" alt="" />
                    <button style={style.btn} onClick={Home}>INICIO</button>
                    <button onClick={Bases}>REGLAMENTOS</button>
                    <button onClick={Mision}>MISIONES</button>
                    <button onClick={Progress}>PROGRESO</button>
                    <button onClick={Events}>EVENTOS</button>
                </div>
                <h1 style={style.title}>PREMIOS CARNITA-LAND</h1>

                <p style={style.borders}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis sit facilis quisquam laboriosam voluptatem officia numquam nemo in maiores facere sed cupiditate necessitatibus eligendi officiis eius, est deleniti expedita?.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos a quo doloremque quod nobis aperiam nemo odio assumenda, rerum enim dolorem corrupti beatae ab vitae quos. Quidem, numquam nam?.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, provident architecto. Suscipit autem quae sit, qui minus laudantium iste corporis, architecto nihil vero perferendis fugit aspernatur ut veniam sapiente in.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum, maiores totam voluptas, rem quisquam non repudiandae sunt, temporibus optio provident. Facere provident rerum amet ullam distinctio iusto ut mollitia?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, molestiae. Quidem, quia optio. Sint expedita, beatae ratione tenetur voluptates voluptas consequatur dolorum, reiciendis dicta incidunt magnam ducimus ad cumque ut.
                </p>
            </div>
        </Fragment>
    )
}

export default Page5;