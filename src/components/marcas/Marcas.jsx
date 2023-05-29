import "./Marcas.scss";
import { Link } from "react-router-dom";

const Marcas = () =>{


    return(
        <div className="contenedor-marcas">

            <div className="contenedor-cards-marcas">
                <Link to="/brand?brand=adidas">
                    <img src= {require ("../../Multimedia/card-adidas.png")} alt="" />
                </Link>
               
                <Link to="/brand?brand=Nike">
                    <img src= {require ("../../Multimedia/card-Nike.png")} alt="" />
                </Link>
               
                <Link to="/brand?brand=Puma">
                    <img src= {require ("../../Multimedia/card-Puma.png")} alt="" />
                </Link>     

            </div>
            
        </div>
    )
}

export default Marcas;