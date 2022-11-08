import "./ListadoBotinesEstilos.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";
import { Link } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const ListadoBotinesEsilos = () => {

    const query = useQuery();

    const estiloID = query.get("estilo");
    const seleccionID = query.get("seleccion");
    const posicionID = query.get("posicion");
    
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
            estiloID
            ? setBotines(result.filter((product) => product.estilo1 === estiloID || product.estilo2 === estiloID))
            : setBotines(baseBotines);
        })
        .catch((err) => console.log(err));
    }, [estiloID]);

    useEffect(() => {
        if (!botines) return;
        let filteredProducts = botines;

        if(posicionID&&posicionID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.posicion === posicionID); 
        }

        if(seleccionID&&seleccionID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.seleccion === seleccionID);   
        }
        setFilteredBotines(filteredProducts)
        
    },[botines,posicionID,seleccionID]);



    return (
        <Container fluid className="contenedor-botines-estilos">

            <div className="contenedor-titulo-plp">
                <h3>Botines estilo {estiloID}</h3>
            </div>

            <Link to={`/estilo?estilo=${estiloID}&seleccion=Argentina&posicion=${posicionID}`}><button>Argentina</button></Link>

            <Link to={`/estilo?estilo=${estiloID}&posicion=Delantero&seleccion=${seleccionID}`}><button>Delantero</button></Link>

            <Link to={`/estilo?estilo=${estiloID}&seleccion=Argentina`}><button>Argentina</button></Link>

            <Link to={`/estilo?estilo=${estiloID}&posicion=Delantero`}><button>Delantero</button></Link>
            
           
            <div className="contenedor-cards">
                {filteredBotines.length
                ? filteredBotines.map((botin) => <Item item={botin}/>)
                : <div><p>...No disponible...</p></div>  
                }    
            </div>
           
         </Container>
     );
 };
 
 export default ListadoBotinesEsilos;