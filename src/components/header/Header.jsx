import "../header/Header.scss";
import { useRef } from "react";

const Header = () => {

    const scrollJuego = useRef();

    const controlClicktoScroll = () => {
    scrollJuego.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <header>

            <hr></hr>
            <h1>
                <span>En este mundial</span><br/>
                Poné La Cancha a Tus Pies
            </h1>

            <div className="header-cta">
                <p>
                    Jugá con nuestro buscador y encontrá el arma<br/>
                    secreta de las figuras de Qatar 2022
                </p>

                <button onClick={controlClicktoScroll}>EMPEZAR</button>
            </div>

            <p ref={scrollJuego} className="auxiliarScroll"></p>
           
        </header>
    )
}

export default Header;