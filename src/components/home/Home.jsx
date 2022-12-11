import "./Home.scss";
import { Container } from "react-bootstrap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import TituloSeccion from "../tituloSeccion/TituloSeccion";
import Carousel from "../carousel/Carousel";
import Estilos from "../estilos/Estilos";
import Posiciones from "../posiciones/Posiciones";
import Marcas from "../marcas/Marcas";
import ScrollToTop from "../ScrollToTop";


const Home = () => {

    const scrollTop =() =>{
        window.scrollTo(0, 0);
    }

    const scrollSelecciones = useRef();
    const controlScrollSelecciones = () => {
    scrollSelecciones.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollEstilos = useRef();
    const controlScrollEstilos = () => {
    scrollEstilos.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollPosiciones = useRef();
    const controlScrollPosiciones = () => {
    scrollPosiciones.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollMarca = useRef();
    const controlScrollMarca = () => {
    scrollMarca.current?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <Container fluid className="home">

            <ScrollToTop />

            <header>

                <div className="contenedor-banner">
                    <div className="banner"></div>
                    <img className="home" src= {require ("../../Multimedia/home.png")} onClick={scrollTop} alt="" />
                    <img className="logo" src= {require ("../../Multimedia/logo.png")} alt="" />
                </div>

                <div className="cta">
                    <h1>BIENVENIDO A NUESTRO <br/> <span>BUSCADOR DE BOTINES</span></h1>
                    <p>Elegí un camino para empezar </p>
                </div>

                <div className="contenedor-caminos">

                    <div className="contenedor-imagenes">
                        <div className="grupos-imagenes grupo-1">
                            <img src= {require ("../../Multimedia/inicio-selecciones.png")} alt="" onClick={controlScrollSelecciones}/>
                            <img src= {require ("../../Multimedia/inicio-estilos.png")} alt="" onClick={controlScrollEstilos}/>
                        </div>
                        
                        <div className="grupos-imagenes grupo-2">
                            <img src= {require ("../../Multimedia/inicio-posiciones.png")} alt="" onClick={controlScrollPosiciones}/>
                            <img src= {require ("../../Multimedia/inicio-marca.png")} alt="" onClick={controlScrollMarca}/>
                        </div>
                    </div>

                    <div className="contenedor-jugador">
                        <Link to="/jugador"><img src= {require ("../../Multimedia/inicio-jugador2.png")} alt=""/></Link>
                    </div>

                </div>
            </header>
            
            
            <section className="seccion-busqueda-selecciones" ref={scrollSelecciones}>
                <TituloSeccion text="Iniciar búsqueda por equipo" className="contenedor-titulo contenedor-titulo-selecciones"/>

                <h3 className="subtitulo-selecciones">Elegí una selección nacional</h3>

                <Carousel />

                <h5 className="titulo-selector-grupos">
                    GRUPOS QATAR 2022
                </h5> 

                <div className="scrollDown">
                    <p> ¡Scrolleá para ver más! </p>
                    <img src= {require ("../../Multimedia/bouncingBall-scroller.gif")} className="ball" alt="" />
                </div>
                     
            </section>
           
            <section className="seccion-busqueda-estilos" ref={scrollEstilos}>
                <TituloSeccion text="Iniciar búsqueda por estilo de juego" className="contenedor-titulo contenedor-titulo-estilos"/>

                <h3 className="subtitulo-estilos">Elegí tu estilo de juego</h3>

                <Estilos />

                <div className="scrollDown">
                    <p> ¡Scrolleá para ver más! </p>
                    <img src= {require ("../../Multimedia/bouncingBall-scroller.gif")} className="ball" alt="" />
                </div>

            </section>
      
            <section className="seccion-busqueda-posiciones"ref={scrollPosiciones} >
                <TituloSeccion text="Iniciar búsqueda por posición" className="contenedor-titulo contenedor-titulo-posiciones"/>

                <h3>Elegí tu posición en la cancha</h3>

                <Posiciones />

                <div className="scrollDown">
                    <p> ¡Scrolleá para ver más! </p>
                    <img src= {require ("../../Multimedia/bouncingBall-scroller.gif")} className="ball" alt="" />
                </div>

            </section>
      
            
            <section className="seccion-busqueda-marca" ref={scrollMarca}>
                <TituloSeccion text="Iniciar búsqueda por marca" className="contenedor-titulo contenedor-titulo-marca"/>

                <h3 className="subtitulo-marcas">Elegí tu marca preferida</h3>

                <Marcas />
                
            </section>
            
        </Container>
    )
}

export default Home;


      