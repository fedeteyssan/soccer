import "./ListadoBotinesSelecciones.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";

const ListadoBotinesSelecciones = () => {

   
    
    const{ seleccionID } = useParams();
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
            seleccionID
            ? setBotines(result.filter((product) => product.seleccion === seleccionID))
            : setBotines(baseBotines);
        })
        .catch((err) => console.log(err));
    }, [seleccionID]);

    return (
        <Container fluid className="contenedor-botines-selecciones">
            <h3>Botines por selección {seleccionID}</h3>
            <div className="contenedor-cards">
                {botines.length
                ? botines.map((botin) => <Item item={botin}/>)
                : <div className="loader"><p>...Buscando jugadores...</p></div>  
                }    
            </div>
           
         </Container>
     );
 };
 
 export default ListadoBotinesSelecciones;