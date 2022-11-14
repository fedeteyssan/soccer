import "./Cover.scss";
import { Link } from "react-router-dom";


const Cover = () => {


    return (
        <div className="cover-container">

            <div className="franja"></div>

            <h1>
                Cada jugador del mundial ya eligió<br/>
                su botin para potenciar su juego.<br/>
                <span> AHORA VOS ELEGÍ EL TUYO</span>
            </h1>

            <br/>

            <Link to="/home" ><button>EMPEZAR</button></Link>
               
            

        </div>
    )
}

export default Cover;