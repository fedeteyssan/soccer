import "./Home.scss";
import Header from "../header/Header";
import TituloSeccion from "../tituloSeccion/TituloSeccion";
import Carousel from "../carousel/Carousel";
import Posiciones from "../posiciones/Posiciones";
import Estilos from "../estilos/Estilos";
import { Container } from "react-bootstrap";
import ListadoBotinesJugador from "../../containers/ListadoBotinesJugador";



const Home = (props) => {

    
    

    return (
        <Container fluid className={props.className}>

            <Header></Header>
            <TituloSeccion text="Iniciar juego por selección" className="contenedor-titulo contenedor-titulo-selecciones"/>
            <section  className="seccion-busqueda-selecciones" id="seleccion">



                <h3>Elegí una selección nacional</h3>

                <Carousel></Carousel>

                <h5 className="titulo-selector-grupos">
                    GRUPOS QATAR 2022
                </h5> 
                
            </section>
           
            <TituloSeccion text="Iniciar juego por estilos" className="contenedor-titulo contenedor-titulo-estilos"/>
            <section className="seccion-busqueda-estilos">

                <h3 className="subtitulo-estilos">Elegí tu estilo para afrontar un partido</h3>

                <Estilos></Estilos>

            </section>
      
            <TituloSeccion text="Iniciar juego por posición" className="contenedor-titulo contenedor-titulo-posiciones"/>
            <section className="seccion-busqueda-posiciones">

                <h3>Elegí tu posición en la cancha</h3>

                <Posiciones></Posiciones>

            </section>
      
            <TituloSeccion text="Iniciar juego por jugador" className="contenedor-titulo contenedor-titulo-jugador"/>
            <section className="seccion-busqueda-jugador">

                <ListadoBotinesJugador></ListadoBotinesJugador>
            </section>
            
        </Container>
    )
}

export default Home;


      