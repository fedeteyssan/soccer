import "./Header.scss";
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
                    Jugá con nuestro buscador y encontrá el par de botines<br/>
                    que te hará brillar en tu próximo partido
                </p>

                <button onClick={controlClicktoScroll}>EMPEZAR</button>
            </div>

            <p ref={scrollJuego} className="ScrollToBottom"></p>
           
        </header>
    )
}

export default Header;