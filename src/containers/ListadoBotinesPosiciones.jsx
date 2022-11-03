import "./ListadoBotinesPosiciones.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";

const ListadoBotinesPosiciones = () => {

   
    
    const{ posicionID } = useParams();
    const [botines, setBotines] = useState([]);

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


    return (
        <Container fluid className="contenedor-botines-posiciones">
            <h3>Botines por posición {posicionID}</h3>
            <div className="contenedor-cards">
                {botines.length
                ? botines.map((botin) => <Item item={botin}/>)
                : <div><p>...No disponible...</p></div>  
                }    
            </div>
           
         </Container>
     );
 };
 
 export default ListadoBotinesPosiciones;