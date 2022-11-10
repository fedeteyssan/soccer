import "./Header.scss";
import { useRef } from "react";

const Header = () => {

    const scrollSelecciones = useRef();

    const controlScroll1 = () => {
    scrollSelecciones.current?.scrollIntoView({behavior: 'smooth'});
    };



    return (
        <header>
            <div className="header-container">

                <div className="franja"></div>

                <h1>
                    Cada jugador del mundial ya eligió<br/>
                    su botin para potenciar su juego.<br/>
                    <span> AHORA VOS ELEGÍ EL TUYO</span>
                </h1>

                <br/>

                <div className="header-cta">
                    <p>
                       Elegí un camino para empezar tu búsqueda:
                    </p>
                </div>

                <div className="contenedor-imagenes">
                    <img src= {require ("../../Multimedia/inicio-selecciones.png")} alt="" onClick={controlScroll1}/>
                    <img src= {require ("../../Multimedia/inicio-estilos.png")} alt=""/>
                    <img src= {require ("../../Multimedia/inicio-posiciones.png")} alt="" />
                    <img src= {require ("../../Multimedia/inicio-jugador.png")} alt="" />
                </div>

                <p ref={scrollSelecciones} className="ScrollToSelecciones"></p>

            </div>
            
        </header>
    )
}

export default Header;