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
                <p>Divertite con nuestro buscador. <br/> Elegí la forma de juego que más te guste 
                    <br/> y descubrí los botines de las figuras <br/>del mundial de Qatar 2022.
                </p>
                <Link to="/home"><button>EMPEZAR</button></Link>
            </div>
            

        </div>
    )
}

export default Cover;