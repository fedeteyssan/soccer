import "./Carousel.scss";
import React from "react";
import CardSeleccion from "../cardSeleccion/CardSeleccion";
import { Link } from "react-router-dom";



const Carousel = () => {

    return (
        <div>

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
                            <div className="d-flex">
                                <Link to="/team?team=Qatar"><CardSeleccion text="Qatar" img ={require("../../Multimedia/qatar.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Ecuador"><CardSeleccion text="Ecuador" img ={require("../../Multimedia/ecuador.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex">
                                <Link to="/team?team=Senegal"><CardSeleccion text="Senegal" img ={require("../../Multimedia/senegal.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Países-Bajos"><CardSeleccion text="Países Bajos" img ={require("../../Multimedia/holanda.png")}></CardSeleccion></Link>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <div className="d-flex">
                                <Link to="/team?team=Inglaterra"><CardSeleccion text="Inglaterra" img ={require("../../Multimedia/inglaterra.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Irán"><CardSeleccion text="Irán" img ={require("../../Multimedia/iran.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex">
                                <Link to="/team?team=Estados-Unidos"><CardSeleccion text="Estados Unidos" img ={require("../../Multimedia/estadosUnidos.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Gales"><CardSeleccion text="Gales" img ={require("../../Multimedia/gales.png")}></CardSeleccion></Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <div className="d-flex">
                                <Link to="/team?team=Argentina"><CardSeleccion text="Argentina" img ={require("../../Multimedia/argentina.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Arabia-Saudita"><CardSeleccion text="Arabia Saudita" img ={require("../../Multimedia/arabiaSaudita.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex">
                                <Link to="/team?team=México"><CardSeleccion text="México" img ={require("../../Multimedia/mexico.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Polonia"><CardSeleccion text="Polonia" img ={require("../../Multimedia/polonia.png")}></CardSeleccion></Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <div className="d-flex">
                                <Link to="/team?team=Francia"><CardSeleccion text="Francia" img ={require("../../Multimedia/francia.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Australia"><CardSeleccion text="Australia" img ={require("../../Multimedia/australia.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex">
                            <Link to="/team?team=Dinamarca"><CardSeleccion text="Dinamarca" img ={require("../../Multimedia/dinamarca.png")}></CardSeleccion></Link>
                            <Link to="/team?team=Túnez"><CardSeleccion text="Túnez" img ={require("../../Multimedia/tunez.png")}></CardSeleccion></Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <div className="d-flex">
                                <Link to="/team?team=España"><CardSeleccion text="España" img ={require("../../Multimedia/españa.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Costa-Rica"><CardSeleccion text="Costa Rica" img ={require("../../Multimedia/costaRica.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex">
                                <Link to="/team?team=Alemania"><CardSeleccion text="Alemania" img ={require("../../Multimedia/alemania.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Japón"><CardSeleccion text="Japón" img ={require("../../Multimedia/japon.png")}></CardSeleccion></Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <div className="d-flex">    
                                <Link to="/team?team=Bélgica"><CardSeleccion text="Bélgica" img ={require("../../Multimedia/belgica.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Canadá"><CardSeleccion text="Canadá" img ={require("../../Multimedia/canada.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex">   
                                <Link to="/team?team=Marruecos"><CardSeleccion text="Marruecos" img ={require("../../Multimedia/marruecos.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Croacia"><CardSeleccion text="Croacia" img ={require("../../Multimedia/croacia.png")}></CardSeleccion></Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <div className="d-flex">    
                                <Link to="/team?team=Brasil"><CardSeleccion text="Brasil" img ={require("../../Multimedia/brasil.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Serbia"><CardSeleccion text="Serbia" img ={require("../../Multimedia/serbia.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex">
                                <Link to="/team?team=Suiza"><CardSeleccion text="Suiza" img ={require("../../Multimedia/suiza.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Camerún"><CardSeleccion text="Camerún" img ={require("../../Multimedia/camerun.png")}></CardSeleccion></Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="contenedor-cards-selecciones">
                            <div className="d-flex">   
                                <Link to="/team?team=Portugal"><CardSeleccion text="Portugal" img ={require("../../Multimedia/portugal.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Ghana"><CardSeleccion text="Ghana" img ={require("../../Multimedia/ghana.png")}></CardSeleccion></Link>
                            </div>
                            <div className="d-flex"> 
                                <Link to="/team?team=Uruguay"> <CardSeleccion text="Uruguay" img ={require("../../Multimedia/uruguay.png")}></CardSeleccion></Link>
                                <Link to="/team?team=Corea"><CardSeleccion text="Corea" img ={require("../../Multimedia/corea.png")}></CardSeleccion></Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="fondo-blur"></div>
            
            </div>

        </div>
    )
}

export default Carousel;