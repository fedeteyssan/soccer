
import Header from "../header/Header";
import TituloSeccion from "../tituloSeccion/TituloSeccion";
import Carousel from "../carousel/Carousel";
import "./Home.scss";


const Home = (props) => {

    
    

    return (
        <main className={props.className}>

            <Header></Header>
            <TituloSeccion text="Iniciar juego por selección" className="contenedor-titulo contenedor-titulo-selecciones"/>
            <section  className="seccion-busqueda-selecciones">

                <h3>SELECCIONÁ UN PAIS</h3>

                <Carousel></Carousel>

                <h5 className="titulo-selector-grupos">
                    GRUPOS QATAR 2022
                </h5> 
                
            </section>
           
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


      