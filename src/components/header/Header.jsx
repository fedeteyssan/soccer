import "./Header.scss";


const Header = () => {


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

            </div>
            
        </header>
    )
}

export default Header;