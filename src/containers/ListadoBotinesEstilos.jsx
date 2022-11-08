import "./ListadoBotinesEstilos.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";
import { Link } from "react-router-dom";

const ListadoBotinesEsilos = () => {

    const{ estiloID } = useParams();
    const{ posicionID } = useParams();
    const{ seleccionID } = useParams();
    
    const [botines, setBotines] = useState([]);
    const[filteredBotines1, setFilteredBotines1]= useState([]);
    const[filteredBotines2, setFilteredBotines2]= useState([]);
    

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
            estiloID
            ? setBotines(result.filter((product) => product.estilo1 === estiloID || product.estilo2 === estiloID))
            : setBotines(baseBotines);
        })
        .catch((err) => console.log(err));
    }, [estiloID]);

    useEffect(() => {
        if (!botines) return;
        if(posicionID){
            const FilteredProducts = botines.filter((product)=>product.posicion === posicionID);
            setFilteredBotines1(FilteredProducts);
        }
        else {setFilteredBotines1(botines)}
    },[botines,posicionID]);

    useEffect(() => {
        if (!filteredBotines1) return;
        if(seleccionID){
            const newFilteredProducts = filteredBotines1.filter((product)=>product.seleccion === seleccionID );
            setFilteredBotines2(newFilteredProducts);
        }
        else {setFilteredBotines2(filteredBotines1)}
    },[filteredBotines1, seleccionID]);



    return (
        <Container fluid className="contenedor-botines-estilos">

            <div className="contenedor-titulo-plp">
                <h3>Botines estilo {estiloID}</h3>
            </div>

            <Link to={`/estilo/${estiloID}/Delantero`}><button>Delantero</button></Link>
            <Link to={`/estilo/${estiloID}/${posicionID}/Argentina`}><button>Argentina</button></Link>
            
           
            <div className="contenedor-cards">
                {filteredBotines2.length
                ? filteredBotines2.map((botin) => <Item item={botin}/>)
                : <div><p>...No disponible...</p></div>  
                }    
            </div>
           
         </Container>
     );
 };
 
 export default ListadoBotinesEsilos;