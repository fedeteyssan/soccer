
import { Link } from "react-router-dom";
import Header from "../header/Header";
import TituloSeccion from "../tituloSeccion/TituloSeccion";
import "./Home.scss";


const Home = (props) => {

    const controlClicktoScroll = () => {
    Home.current?.scrollIntoView({block:"start"});
    };
    

    return (
        <main className={props.className}>

            <Header></Header>
            <TituloSeccion text="Iniciar juego por selección" className="contenedor-titulo contenedor-titulo-selecciones"/>
            <section  className="seccion-busqueda-selecciones"></section>
           
            <button onClick={controlClicktoScroll}><Link to="/seleccion/Argentina">Argentina</Link></button>
            <button><Link to="/seleccion/Alemania">Alemania</Link></button> 


            <TituloSeccion text="Iniciar juego por estilos" className="contenedor-titulo contenedor-titulo-estilos"/>
            <section className="seccion-busqueda-estilos"></section>
      
            <TituloSeccion text="Iniciar juego por posición" className="contenedor-titulo contenedor-titulo-posiciones"/>
            <section className="seccion-busqueda-posiciones"></section>
      
            <TituloSeccion text="Iniciar juego por jugador" className="contenedor-titulo contenedor-titulo-jugador"/>
            <section className="seccion-busqueda-jugador"></section>
            
        </main>
    )
}

export default Home;


      