import React, { Fragment } from "react";
import BotonAvatar from "../Components/Botonera/BotonAvatar";
import BotonsInicio from '../Components/Botonera/BotonsInicio';
import BottonCarnita from "../Components/Botonera/BottonCarnita";
import BottonEvento from "../Components/Botonera/BottonEvento";
import BottonMision from "../Components/Botonera/BottonMision";
import Reglamento from "../Components/Titles/Reglamento";

const PageReglas = () => {
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
            marginTop:"40px",
            marginBottom:"30px",
            background:"rgba(0, 0, 0, 0.452)",
            color:"white",
            
            padding:"20px",
            borderRadius:"10px",
           
            fontFamily:"verdana",
            float:"flex",
            flexWarp:"warp",
            justifyContent: "space-between",
        },
        contenido:{
            marginTop:"40px",
            background:"rgba(199, 135, 52, 0.728)",
            color:"black",
            width:"77%",
            margin:"auto",
            padding:"20px",
            border:"20px solid black",
            borderRadius:"10px",
            marginBottom:"30px",
            boxShadow:"0 0 60px 0 white",
            fontFamily:"cursive",
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
            <div className="background-Reglas">
                <div className="container-logo">
                    <div className="logo"></div>
                </div>
                <BottonMision />
                <BottonEvento />
                <BotonsInicio />
                <BottonCarnita />
                <BotonAvatar />
                <Reglamento />

                <p style={style.borders}>
                        <div style={style.contenido}>
                            <div className="title-title-reglamento"></div>
                            <p>???	Con el tiempo se van a habilitar los mercados donde se van a poder comprar diferentes ??tems.</p>
                            <p>???	Cada tienda va a tener un costo acorde a lo que se venda.</p>
                            <p>???	La moneda de menos valor va a ser el lingote de cobre, seguido por el de hierro, el de oro, los diamantes y por ??ltimo las esmeraldas.</p>
                            <p>???	A medida que se van completando las misiones, los jugadores van a recibir una merecida recompensa. </p>
                            <p>???	Las misiones de recolecci??n est??n preparadas para que cada uno aporte lo suyo??? No sean vagos!</p>
                            <p>???	Hasta que todos  no  hayan puesto su parte la misi??n no se va a dar por finalizada.(Si alguien quiere hacer la buena obra y ayudar a otro luego de terminar, est?? mas que permitido)</p>
                            <p>???	En el proceso de crear una sociedad equilibrada seguro vamos a ir de tropiezo en tropiezo y las cosas se van a ir modificando sobre la marcha. Y al que no le guste puede ir a jugar a SinglePlayerLand. </p>
                            <p>???	Ya que no tenemos forma de reforzar bloques vamos a utilizar el bloque de oro como s??mbolo de pared reforzada. Pero con uno solo no alcanza. Van a tener que construir b??vedas con un m??nimo de 28 bloques de oro. Una vez construida y puestos los cofres dentro deber??n colocar una puerta de hierro y un plato de presi??n de oro. Hecho todo esto, esos cofres son imposibles de abrir. Mientras tanto, a esconderlos.</p>
                            <p>???	Al comenzar se har?? entrega de un Shulker con un paquete inicial.</p>
                            <p>???	Una vez al mes se realizaran los Carnita-Games. Una serie de juegos de destreza destinados ??nicamente a generar diversi??n (Y obtener recompensas.) </p>
                            <p>???	Una vez por semana se abrir??n las puertas del banco donde se podr?? realizar el cambio de moneda y la venta de materiales tales como: Piedra, andesita, diorita, granito, tolva volc??nica y pizarra abismal. (De no est??r el d??a que el banco se abra, el jugador va a poder solicitar que por favor se abra para hacer sus tramites el d??a que pueda ingresar.) Solo se va a abrir una vez por semana.</p>                   
                        </div>


                        <div style={style.contenido}>
                            <div className="title-title-reglamento2"></div>
                            <p>???	La pena por robar, romper o poner bloques en casa ajena o destruir parte de las mismas va a ser de muerte con p??rdida de niveles o ser?? librado a su suerte en la arena de Carnita-Land dependiendo de la gravedad del delito. (Siempre que se pueda probar o que se investigue y se decida por unanimidad quien fue.)</p>
                            <p>???	Solo se pueden matar animales salvajes, pero no se pueden criar. (De esta forma hacemos que los alimentos se consigan mediante la recolecci??n de minerales y el funcionamiento de las tiendas).</p>
                            <p>???	La armadura de Netherita utilizada para ir al Nether se destruir?? al momento de encontrar una fortaleza. Los jugadores van a ir solo con los ??tems que hayan encantado ellos mismos.</p>
                            <p>???	Los minerales recolectados en las misiones cooperativas van a ser colocados en un cofre comunitario y se van a repartir en partes iguales al finalizar la misma.</p>
                            <p>???	Los huertos est??n permitidos pero limitados. Pueden tener un m??ximo de 64 bloques y se va a cobrar un impuesto del 50% que va a ser depositado en la reserva del banco de semillas. (De mas est?? decir que este tipo de normas quedan libradas a la honestidad de cada uno??? Por favor sean honestos. Al igual que con la NO cr??a de animales, esto se hace para darle mas importancia a los mercados, por lo menos al principio.)</p>
                            <p>???	Los encantamientos van a estar prohibidos hasta completar la misi??n que lo permita. Tampoco se pueden utilizar Loots encantados (Si se consigue algo encantado, por favor, tirarlo.) </p>
                            <p>???	Tanto los eventos como los Carnita-Games se van a organizar con los participantes con tiempo previo. De acordar una fecha y no poder concurrir, lamentablemente no va a haber recompensa para ese jugador. </p>
                            <p>???	Aquel jugador que no concurra a los eventos o a los Carnita-Games va a poder reclamar su recompensa luchando en la arena de Carnita-Land.</p>
                            <div className="title-title-reglamento3"></div>
                        </div>

                    </p>
            </div>
        </Fragment>
    )
}

export default PageReglas;