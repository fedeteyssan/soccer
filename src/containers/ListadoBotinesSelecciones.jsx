import "./ListadoBotinesSelecciones.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";
import { Link } from "react-router-dom";

const ListadoBotinesSelecciones = () => {

    const{ seleccionID } = useParams();
    const{ posicionID } = useParams();
    
    const [botines, setBotines] = useState([]);
    const[filteredBotines, setFilteredBotines]= useState([]);
    

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

    useEffect(() => {
        if (!botines) return;
        if(posicionID){
            const newFilteredProducts = botines.filter((product)=>product.posicion === posicionID);
            setFilteredBotines(newFilteredProducts);
        }
        else{setFilteredBotines(botines)}
        
       },[botines,posicionID]);


    return (
        <Container fluid className="contenedor-botines-selecciones">
            <h3>Botines por selección {seleccionID}</h3>
           <Link to={`/seleccion/${seleccionID}/Arquero`}><button >Arquero</button></Link>
           <Link to={`/seleccion/${seleccionID}/Defensor`}><button >Defensor</button></Link> 
           <Link to={`/seleccion/${seleccionID}/Mediocampista`}><button >Mediocampista</button></Link> 
           <Link to={`/seleccion/${seleccionID}/Delantero`}><button >Delantero</button></Link> 
           
            <div className="contenedor-cards">
                {filteredBotines.length
                ? filteredBotines.map((botin) => <Item item={botin}/>)
                : <div><p>...No disponible...</p></div>  
                }    
            </div>
           
         </Container>
     );
 };
 
 export default ListadoBotinesSelecciones;