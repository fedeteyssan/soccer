import "./Estilos.scss";
import { Link } from "react-router-dom";


const Estilos = () =>{


    return(
        <div className="contenedor-estilos">

            <img src= {require ("../../Multimedia/player.gif")} alt="" className="jugador" />

            <div className="contenedor-cards-estilos">

                <div className="columna">
                    <Link to="/style?style=Elegant"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/elegante.png")} alt="" className="figura-estilo" />
                        <p>ELEGANT</p>
                    </div></Link>

                    <Link to="/style?style=Strategist"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/estratega.png")} alt="" className="figura-estilo" />
                        <p>STRATEGIST</p>
                    </div></Link>
                </div>

                <div className="columna">
                    <Link to="/style?style=Dominant"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/dominante.png")} alt="" className="figura-estilo" />
                        <p>DOMINANT</p>
                    </div></Link>

                    <Link to="/style?style=Defiant"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/desafiante.png")} alt="" className="figura-estilo" />
                        <p>DEFIANT</p>
                    </div></Link>
                </div>

                <div className="columna">
                    <Link to="/style?style=Unstoppable"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/imparable.png")} alt="" className="figura-estilo" />
                        <p>UNSTOPPABLE</p>
                    </div></Link>

                    <Link to="/style?style=Intuitive"><div className="card-estilos">
                        <img src= {require ("../../Multimedia/intuitivo.png")} alt="" className="figura-estilo" />
                        <p>INTUITIVE</p>
                    </div></Link>
                </div>

            </div>

        </div>
    )
}

export default Estilos;