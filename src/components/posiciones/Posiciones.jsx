import "./Posiciones.scss";
import { Link } from "react-router-dom";

const Posiciones = () =>{


    return(
        <div className="formacion">

        <Link to="/position?position=Goalkeeper">
            <div className="contenedor-posicion contenedor-arq">
                <div className="contenedor-hover">
                    <p>GOALKEEPER</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">GK</button>
            </div>
        </Link>

        <Link to="/position?position=Left-Back">
            <div className="contenedor-posicion contenedor-li">
                <div className="contenedor-hover">
                    <p>LEFT BACK</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">LB</button>
                </div>
        </Link>

        <Link to="/position?position=Central-Back">
            <div className="contenedor-posicion contenedor-dfc1">
                <div className="contenedor-hover">
                    <p>CENTRAL BACK</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">CB</button>
            </div>
        </Link>

        <Link to="/position?position=Central-Back">
            <div className="contenedor-posicion contenedor-dfc2">
                <div className="contenedor-hover">
                    <p>CENTRAL BACK</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">CB</button>
            </div>
        </Link>

        <Link to="/position?position=Right-Back">
            <div className="contenedor-posicion contenedor-ld">
                <div className="contenedor-hover">
                    <p>RIGHT BACK</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>            
                <button className="boton-posicion">RB</button>
            </div>
        </Link>

        <Link to="/position?position=Defensive-Midfielder">
            <div className="contenedor-posicion contenedor-mcd">
                <div className="contenedor-hover">
                    <p>DEFENSIVE MIDFIELDER</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>              
                <button className="boton-posicion">CDM</button>
            </div>
        </Link>

        

        <Link to="/position?position=Central-Midfielder">
            <div className="contenedor-posicion contenedor-mc">
                <div className="contenedor-hover">
                    <p>CENTRAL MIDFIELDER</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">CM</button>
            </div>
        </Link>

        <Link to="/position?position=Attacking-Midfielder">
            <div className="contenedor-posicion contenedor-mco">
                <div className="contenedor-hover">
                    <p>ATTACKING MIDFIELDER</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">CAM</button>
            </div>
        </Link>

        <Link to="/position?position=Left-Winger">
            <div className="contenedor-posicion contenedor-ei">
                <div className="contenedor-hover">
                    <p>LEFT WINGER</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">LW</button>
            </div>
        </Link>

        <Link to="/position?position=Striker">
            <div className="contenedor-posicion contenedor-dc">
                <div className="contenedor-hover">
                    <p>STRIKER</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">ST</button>
            </div>
        </Link>

        <Link to="/position?position=Right-Winger">
            <div className="contenedor-posicion contenedor-ed">
                <div className="contenedor-hover">
                    <p>RIGHT WINGER</p>
                    <img src= {require ("../../Multimedia/cursor.png")} alt="" className="cursor" />
                    <img src= {require ("../../Multimedia/camiseta.png")} alt="" className="camiseta"/>
                </div>
                <button className="boton-posicion">RW</button>
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