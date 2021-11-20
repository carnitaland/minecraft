import { Fragment, ReactFragment } from "react";
import { useNavigate } from "react-router";

const Page4 = () => {

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
    
    const Premio =()=>{
        navigate("/premios")
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
            <div className="logoEventos">
                <div className="logo"></div>
                <div>
                    
                    <button style={style.btn} onClick={Home}>INICIO</button>
                    <button onClick={Bases}>REGLAMENTOS</button>
                    <button onClick={Mision}>MISIONES</button>
                    <button onClick={Progress}>PROGRESO</button>
                    <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                    
                </div>

                <div className="title-Eventos"></div>

                <div style={style.borders}>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis sit facilis quisquam laboriosam voluptatem officia numquam nemo in maiores facere sed cupiditate necessitatibus eligendi officiis eius, est deleniti expedita?.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos a quo doloremque quod nobis aperiam nemo odio assumenda, rerum enim dolorem corrupti beatae ab vitae quos. Quidem, numquam nam?.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, provident architecto. Suscipit autem quae sit, qui minus laudantium iste corporis, architecto nihil vero perferendis fugit aspernatur ut veniam sapiente in.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum, maiores totam voluptas, rem quisquam non repudiandae sunt, temporibus optio provident. Facere provident rerum amet ullam distinctio iusto ut mollitia?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, molestiae. Quidem, quia optio. Sint expedita, beatae ratione tenetur voluptates voluptas consequatur dolorum, reiciendis dicta incidunt magnam ducimus ad cumque ut.
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque porro, atque alias deleniti non, labore natus eaque recusandae distinctio incidunt consequatur nihil eveniet praesentium! Corrupti repellat cupiditate quia in tenetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil cumque nesciunt aspernatur molestias natus cupiditate pariatur. Vitae dolorem, quisquam ullam atque placeat optio quos labore quidem, animi itaque nam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur natus non omnis aut asperiores nostrum corporis dolor sed doloremque ea! Quae debitis provident fuga ratione distinctio? Officiis atque ut ipsam?</p>
                    </p>
                </div>

                <div>
                    <button style={style.btn} onClick={Home}>INICIO</button>
                    <button onClick={Bases}>REGLAMENTOS</button>
                    <button onClick={Mision}>MISIONES</button>
                    <button onClick={Progress}>PROGRESO</button>
                    <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                </div>

            </div>
        </Fragment>
    )
}

export default Page4;