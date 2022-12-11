import "./Marcas.scss";
import { Link } from "react-router-dom";

const Marcas = () =>{


    return(
        <div className="contenedor-marcas">

            <div className="contenedor-cards-marcas">
                <Link to="/marca?marca=adidas">
                    <img src= {require ("../../Multimedia/card-adidas.png")} alt="" />
                </Link>
               
                <Link to="/marca?marca=Nike">
                    <img src= {require ("../../Multimedia/card-Nike.png")} alt="" />
                </Link>
               
                <Link to="/marca?marca=Puma">
                    <img src= {require ("../../Multimedia/card-Puma.png")} alt="" />
                </Link>     

            </div>
            
        </div>
    )
}

export default Marcas;