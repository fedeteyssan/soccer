import "./Carousel.scss";
import React from "react";
import CardSeleccion from "../cardSeleccion/CardSeleccion";
import { Link } from "react-router-dom";



const Carousel = () => {

    return (
        <div className="">

            <div id="carouselGrupos" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">A</button>
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="1" aria-label="Slide 2">B</button>
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="2" aria-label="Slide 3">C</button>
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="3" aria-label="Slide 4">D</button>
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="4" aria-label="Slide 5">E</button>
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="5" aria-label="Slide 6">F</button>
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="6" aria-label="Slide 7">G</button>
                    <button type="button" data-bs-target="#carouselGrupos" data-bs-slide-to="7" aria-label="Slide 8">H</button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="contenedor-cards-selecciones">
                            <Link to="/seleccion/Qatar"><CardSeleccion text="Qatar" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Ecuador"><CardSeleccion text="Ecuador" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Senegal"><CardSeleccion text="Senegal" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Holanda"><CardSeleccion text="Holanda" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <Link to="/seleccion/Inglaterra"><CardSeleccion text="Inglaterra" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Iran"><CardSeleccion text="Irán" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Estados-Unidos"><CardSeleccion text="Estados Unidos" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Gales"><CardSeleccion text="Gales" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <Link to="/seleccion/Argentina"><CardSeleccion text="Argentina" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Arabia-Saudita"><CardSeleccion text="Arabia Saudita" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Mexico"><CardSeleccion text="México" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                            <Link to="/seleccion/Polonia"><CardSeleccion text="Polonia" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                        <Link to="/seleccion/Francia"><CardSeleccion text="Francia" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Australia"><CardSeleccion text="Australia" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Dinamarca"><CardSeleccion text="Dinamarca" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Tunez"><CardSeleccion text="Túnez" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                        <Link to="/seleccion/España"><CardSeleccion text="España" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Costa-Rica"><CardSeleccion text="Costa Rica" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Alemania"><CardSeleccion text="Alemania" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Japon"><CardSeleccion text="Japón" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                        <Link to="/seleccion/Belgica"><CardSeleccion text="Bélgica" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Canada"><CardSeleccion text="Canadá" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Marruecos"><CardSeleccion text="Marruecos" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Croacia"><CardSeleccion text="Croacia" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                        <Link to="/seleccion/Brasil"><CardSeleccion text="Brasil" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Serbia"><CardSeleccion text="Serbia" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Suiza"><CardSeleccion text="Suiza" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Camerun"><CardSeleccion text="Camerún" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                        <Link to="/seleccion/Portugal"><CardSeleccion text="Portugal" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Ghana"><CardSeleccion text="Ghana" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Uruguay"> <CardSeleccion text="Uruguay" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        <Link to="/seleccion/Corea-del-Sur"><CardSeleccion text="Corea del Sur" img ={require("../../Multimedia/EscudoQatar.png")}></CardSeleccion></Link>
                        </div>
                    </div>

                </div>
            
            </div>

        </div>
    )
}

export default Carousel;