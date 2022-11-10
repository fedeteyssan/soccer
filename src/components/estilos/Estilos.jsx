import "./Estilos.scss";
import { Link } from "react-router-dom";


const Estilos = () =>{


    return(
        <div className="contenedor-estilos">

            <img src= {require ("../../Multimedia/player.gif")} alt="" className="jugador" />

            <div className="contenedor-cards-estilos">

                <div className="columna">
                    <Link to="/estilo?estilo=Elegante"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/elegante.png")} alt="" className="figura-estilo" />
                        <p>ELEGANTE</p>
                    </div></Link>

                    <Link to="/estilo?estilo=Estratega"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/estratega.png")} alt="" className="figura-estilo" />
                        <p>ESTRATEGA</p>
                    </div></Link>
                </div>

                <div className="columna">
                    <Link to="/estilo?estilo=Dominante"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/dominante.png")} alt="" className="figura-estilo" />
                        <p>DOMINANTE</p>
                    </div></Link>

                    <Link to="/estilo?estilo=Desafiante"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/desafiante.png")} alt="" className="figura-estilo" />
                        <p>DESAFIANTE</p>
                    </div></Link>
                </div>

                <div className="columna">
                    <Link to="/estilo?estilo=Imparable"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/imparable.png")} alt="" className="figura-estilo" />
                        <p>IMPARABLE</p>
                    </div></Link>

                    <Link to="/estilo?estilo=Intuitivo"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/intuitivo.png")} alt="" className="figura-estilo" />
                        <p>INTUITIVO</p>
                    </div></Link>
                </div>

            </div>

            
            
        </div>
    )
}

export default Estilos;