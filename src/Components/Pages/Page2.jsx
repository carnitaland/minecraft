import React, { Fragment } from "react";
import { useNavigate } from "react-router";
import '../../App.css';
import { animateScroll as scroll} from "react-scroll";

const Page2 = () => {

    let navigate = useNavigate();

    const Home = () => {
        navigate("/");
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

    const style ={
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
            float:"flex",
            flexWarp:"warp",
            justifyContent: "space-between",
        },
        borders:{
            // border:"1px solid white",
            background:"rgba(0, 0, 0, 0.452)",
            color:"white",
            width:"74%",
            margin:"auto",
            padding:"20px",
            borderRadius:"10px",
            boxShadow:"0 0 30px 0 white",
            fontFamily:"verdana",
            float:"flex",
            flexWarp:"warp",
            justifyContent: "space-between",
        },
        contenido:{
            // border:"1px solid white",
            background:"rgba(0, 0, 0, 0.452)",
            color:"white",
            width:"70%",
            marginLeft:"auto",
            marginRight: "auto",
            padding:"20px",
            // borderRadius:"10px",
            // boxShadow:"0 0 60px 0 white",
            fontFamily:"verdana",
            float:"flex",
            flexWarp:"warp",
            justifyContent: "space-between",
        },
        btn:{
            background:"green"
        }
    }
    
    return(
        
        <Fragment>
            <div className="logo2">
                
                    <div className="logo"></div>
                        <div>
                            <button style={style.btn} onClick={Home}>INICIO</button>
                            <button onClick={Mision}>MISIONES</button>
                            <button onClick={Progress}>PROGRESO</button>
                            <button onClick={Events}>EVENTOS</button>
                            <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                        </div>   

                    <div className="title-Reglamentos" style={style.reglas}></div>
                
                
                    <p style={style.borders}>
                    <div className="title-title-reglamento"></div>
                    <div className="title-title-reglamento-bis"></div>
                        <div style={style.contenido}>
                            <p>⦁	Con el tiempo se van a habilitar los mercados donde se van a poder comprar diferentes ítems.</p>
                            <p>⦁	Cada tienda va a tener un costo acorde a lo que se venda.</p>
                            <p>⦁	La moneda de menos valor va a ser el lingote de cobre, seguido por el de hierro, el de oro, los diamantes y por último las esmeraldas.</p>
                            <p>⦁	A medida que se van completando las misiones, los jugadores van a recibir una merecida recompensa. </p>
                            <p>⦁	Las misiones de recolección están preparadas para que cada uno aporte lo suyo… No sean vagos!</p>
                            <p>⦁	Hasta que todos  no  hayan puesto su parte la misión no se va a dar por finalizada.(Si alguien quiere hacer la buena obra y ayudar a otro luego de terminar, está mas que permitido)</p>
                            <p>⦁	En el proceso de crear una sociedad equilibrada seguro vamos a ir de tropiezo en tropiezo y las cosas se van a ir modificando sobre la marcha. Y al que no le guste puede ir a jugar a SinglePlayerLand. </p>
                            <p>⦁	Ya que no tenemos forma de reforzar bloques vamos a utilizar el bloque de oro como símbolo de pared reforzada. Pero con uno solo no alcanza. Van a tener que construir bóvedas con un mínimo de 28 bloques de oro. Una vez construida y puestos los cofres dentro deberán colocar una puerta de hierro y un plato de presión de oro. Hecho todo esto, esos cofres son imposibles de abrir. Mientras tanto, a esconderlos.</p>
                            <p>⦁	Al comenzar se hará entrega de un Shulker con un paquete inicial.</p>
                            <p>⦁	Una vez al mes se realizaran los Carnita-Games. Una serie de juegos de destreza destinados únicamente a generar diversión (Y obtener recompensas.) </p>
                            <p>⦁	Una vez por semana se abrirán las puertas del banco donde se podrá realizar el cambio de moneda y la venta de materiales tales como: Piedra, andesita, diorita, granito, tolva volcánica y pizarra abismal. (De no estár el día que el banco se abra, el jugador va a poder solicitar que por favor se abra para hacer sus tramites el día que pueda ingresar.) Solo se va a abrir una vez por semana.</p>                   
                        </div>

                        <div className="title-title-reglamento2"></div>

                        <div style={style.contenido}>
                            <p>⦁	La pena por robar, romper o poner bloques en casa ajena o destruir parte de las mismas va a ser de muerte con pérdida de niveles o será librado a su suerte en la arena de Carnita-Land dependiendo de la gravedad del delito. (Siempre que se pueda probar o que se investigue y se decida por unanimidad quien fue.)</p>
                            <p>⦁	Solo se pueden matar animales salvajes, pero no se pueden criar. (De esta forma hacemos que los alimentos se consigan mediante la recolección de minerales y el funcionamiento de las tiendas).</p>
                            <p>⦁	La armadura de Netherita utilizada para ir al Nether se destruirá al momento de encontrar una fortaleza. Los jugadores van a ir solo con los ítems que hayan encantado ellos mismos.</p>
                            <p>⦁	Los minerales recolectados en las misiones cooperativas van a ser colocados en un cofre comunitario y se van a repartir en partes iguales al finalizar la misma.</p>
                            <p>⦁	Los huertos están permitidos pero limitados. Pueden tener un máximo de 64 bloques y se va a cobrar un impuesto del 50% que va a ser depositado en la reserva del banco de semillas. (De mas está decir que este tipo de normas quedan libradas a la honestidad de cada uno… Por favor sean honestos. Al igual que con la NO cría de animales, esto se hace para darle mas importancia a los mercados, por lo menos al principio.)</p>
                            <p>⦁	Los encantamientos van a estar prohibidos hasta completar la misión que lo permita. Tampoco se pueden utilizar Loots encantados (Si se consigue algo encantado, por favor, tirarlo.) </p>
                            <p>⦁	Tanto los eventos como los Carnita-Games se van a organizar con los participantes con tiempo previo. De acordar una fecha y no poder concurrir, lamentablemente no va a haber recompensa para ese jugador. </p>
                            <p>⦁	Aquel jugador que no concurra a los eventos o a los Carnita-Games va a poder reclamar su recompensa luchando en la arena de Carnita-Land.</p>
                        </div>

                        <div className="title-title-reglamento3"></div>
                    </p>
                    <div>
                            <button style={style.btn} onClick={Home}>INICIO</button>
                            <button onClick={Mision}>MISIONES</button>
                            <button onClick={Progress}>PROGRESO</button>
                            <button onClick={Events}>EVENTOS</button>
                            <button onClick={Premio}>PREMIOS CARNITA-GAMES</button>
                        </div>   
            </div>
        </Fragment>
    )
}

export default Page2;