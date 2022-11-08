import "./Estilos.scss";
import { Link } from "react-router-dom";


const Estilos = () =>{
    return(
        <div className="contenedor-cards-estilos">

            <div className="columna">
                <Link to="/estilo/Elegante"><div className="card-estilos"><p>ELEGANTE</p></div></Link>

                <Link to="/estilo/Estratega"><div className="card-estilos"><p>ESTRATEGA</p></div></Link>
            </div>

            <div className="columna">
                <Link to="/estilo/Dominante"><div className="card-estilos"><p>DOMINANTE</p></div></Link>

                <Link to="/estilo/Desafiante"><div className="card-estilos"><p>DESAFIANTE</p></div></Link>
            </div>

            <div className="columna">
                <Link to="/estilo/Imparable"><div className="card-estilos"><p>IMPARABLE</p></div></Link>

                <Link to="/estilo/Intuitivo"><div className="card-estilos"><p>INTUITIVO</p></div></Link>
            </div>
        </div>
    )
}

export default Estilos;