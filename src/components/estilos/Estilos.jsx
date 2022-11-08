import "./Estilos.scss";
import { Link } from "react-router-dom";


const Estilos = () =>{
    return(
        <div className="contenedor-cards-estilos">

            <div className="columna">
                <Link to="/estilo?estilo=Elegante"><div className="card-estilos"><p>ELEGANTE</p></div></Link>

                <Link to="/estilo?estilo=Estratega"><div className="card-estilos"><p>ESTRATEGA</p></div></Link>
            </div>

            <div className="columna">
                <Link to="/estilo?estilo=Dominante"><div className="card-estilos"><p>DOMINANTE</p></div></Link>

                <Link to="/estilo?estilo=Desafiante"><div className="card-estilos"><p>DESAFIANTE</p></div></Link>
            </div>

            <div className="columna">
                <Link to="/estilo?estilo=Imparable"><div className="card-estilos"><p>IMPARABLE</p></div></Link>

                <Link to="/estilo?estilo=Intuitivo"><div className="card-estilos"><p>INTUITIVO</p></div></Link>
            </div>
        </div>
    )
}

export default Estilos;