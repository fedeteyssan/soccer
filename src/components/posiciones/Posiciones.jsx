import "./Posiciones.scss";
import { Link } from "react-router-dom";

const Posiciones = () =>{


    return(
        <div className="formacion">

        <Link to="/posicion?posicion=Arquero">
            <div className="contenedor-posicion contenedor-arq">
                <div className="contenedor-hover">
                    <p>ARQUERO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">ARQ</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Lateral-izquierdo">
            <div className="contenedor-posicion contenedor-li">
                <div className="contenedor-hover">
                    <p>LATERAL IZQUIERDO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">LI</button>
                </div>
        </Link>

        <Link to="/posicion?posicion=Defensor-central">
            <div className="contenedor-posicion contenedor-dfc">
                <div className="contenedor-hover">
                    <p>DEFENSOR CENTRAL</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">DFC</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Lateral-derecho">
            <div className="contenedor-posicion contenedor-ld">
                <div className="contenedor-hover">
                    <p>LATERAL DERECHO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>            
                <button className="boton-posicion">LD</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Volante-defensivo">
            <div className="contenedor-posicion contenedor-mcd">
                <div className="contenedor-hover">
                    <p>MEDIOCAMPO DEFENSIVO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>              
                <button className="boton-posicion">MCD</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Mediocampista">
            <div className="contenedor-posicion contenedor-mi">
                <div className="contenedor-hover">
                    <p>MEDIOCAMPO IZQUIERDO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">MI</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Mediocampista">
            <div className="contenedor-posicion contenedor-md">
                <div className="contenedor-hover">
                    <p>MEDIOCAMPO DERECHO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">MD</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Volante-ofensivo">
            <div className="contenedor-posicion contenedor-mco">
                <div className="contenedor-hover">
                    <p>MEDIOCAMPO OFENSIVO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">MCO</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Extremo-Izquierdo">
            <div className="contenedor-posicion contenedor-ei">
                <div className="contenedor-hover">
                    <p>EXTREMO IZQUIERDO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">EI</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Delantero">
            <div className="contenedor-posicion contenedor-dc">
                <div className="contenedor-hover">
                    <p>DELANTERO CENTRAL</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">DC</button>
            </div>
        </Link>

        <Link to="/posicion?posicion=Extremo-Derecho">
            <div className="contenedor-posicion contenedor-ed">
                <div className="contenedor-hover">
                    <p>EXTREMO DERECHO</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">ED</button>
            </div>
        </Link>

        <div className="contenedor-cancha">
            <img className="cancha-desktop" src= {require ("../../Multimedia/cancha-desktop.png")} alt="" />
            <img className="cancha-mobile" src= {require ("../../Multimedia/cancha-mobile.png")} alt="" />
        </div>            
        </div>
    )


}

export default Posiciones;