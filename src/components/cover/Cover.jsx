import "./Cover.scss";
import { Link } from "react-router-dom";


const Cover = () => {

    return (
        <div className="cover-container"> 

            <div className="contenedor-banner">
                <div className="banner"></div>
                <img className="logo" src= {require ("../../Multimedia/logo.png")} alt="" />
            </div>

            <div className="cta">
                <h1>JUGÁ <br/> MUNDIAL</h1>
                <p>Cada figura de la Copa del Mundo ya eligió <br/> los botines que potencian su juego</p>
                <h2>Ahora buscá vos tu par</h2>
                <Link to="/home"><button>EMPEZAR</button></Link>
            </div>
            

        </div>
    )
}

export default Cover;