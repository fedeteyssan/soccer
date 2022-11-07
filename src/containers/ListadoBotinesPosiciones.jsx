import "./ListadoBotinesPosiciones.scss";
import React, { useState, useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";

const ListadoBotinesPosiciones = () => {

   
    
    const{ posicionID } = useParams();
    const{ seleccionID } = useParams();

    const [botines, setBotines] = useState([]);
    const[filteredBotines, setFilteredBotines]= useState([]);

    const [flag,setFlag]=useState(false)

    const handleClick =() =>{
        setFlag(true);
    }

    let history = useHistory();

    function handleChange(value) {
    history.push(`/posicion/${posicionID}/${value}`);
  }

    const getbotines = (dataBase) => 
        new Promise((resolve, reject) => {
           
            if (dataBase) {
                resolve(dataBase);
            } else {
                reject("No se han encontrado productos");
            };
            
    });
    useEffect(() => {
        getbotines(baseBotines)
        .then((result) => {
            posicionID
            ? setBotines(result.filter((product) => product.posicion === posicionID))
            : setBotines(baseBotines);
        })
        .catch((err) => console.log(err));
    }, [posicionID]);

    useEffect(() => {
        if (!botines) return;
        if(seleccionID){
            const newFilteredProducts = botines.filter((product)=>product.seleccion === seleccionID );
            setFilteredBotines(newFilteredProducts);
        }
        else {setFilteredBotines(botines)}
    },[botines,seleccionID]);


    return (
        <Container fluid className="contenedor-botines-posiciones">

            <div className="contenedor-titulo-plp">
                <h3>Botines Posición {posicionID}</h3>
            </div>

            <aside className="controlador">

                <h4>FILTROS</h4>

                <div className="filtros">
                    <span>SELECCION</span>
                    <img onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flag && (<div className="contenedor-selector-paises">
                <select size="32"onChange={event => handleChange(event.target.value)}>
                    <option value="">TODOS</option>
                    <option value="Alemania">Alemania</option>
                    <option value="ArabiaSaudita">Arabia Saudita</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Australia">Australia</option>
                    <option value="Belgica">Bélgica</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Camerun">Camerún</option>
                    <option value="Canada">Canadá</option>
                    <option value="Corea">Corea</option>
                    <option value="CostaRica">Costa Rica</option>
                    <option value="Croacia">Croacia</option>
                    <option value="Dinamarca">Dinamarca</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="España">España</option>
                    <option value="EstadosUnidos">Estados Unidos</option>
                    <option value="Francia">Francia</option>
                    <option value="Gales">Gales</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Holanda">Holanda</option>
                    <option value="Inglaterra">Inglaterra</option>
                    <option value="Iran">Iran</option>
                    <option value="Japon">Japón</option>
                    <option value="Marruecos">Marruecos</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Polonia">Polonia</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Suiza">Suiza</option>
                    <option value="Tunez">Tunez</option>
                    <option value="Uruguay">Uruguay</option>
                </select>
                </div>
                )}

            </aside>

            <div className="contenedor-cards">
                {botines.length
                ? filteredBotines.map((botin) => <Item item={botin}/>)
                : <div><p>...No disponible...</p></div>  
                }    
            </div>
           
         </Container>
     );
 };
 
 export default ListadoBotinesPosiciones;