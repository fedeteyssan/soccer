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

    const [flag,setFlag]=useState(false)

    const handleClick =() =>{
        setFlag(flag?false:true);
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
            seleccionID
            ? setBotines(result.filter((product) => product.seleccion === seleccionID))
            : setBotines(baseBotines);
        })
        .catch((err) => console.log(err));
    }, [seleccionID]);

    useEffect(() => {
        if (!botines) return;
        if(posicionID){
            const newFilteredProducts = botines.filter((product)=>product.posicion === posicionID );
            setFilteredBotines(newFilteredProducts);
        }
        else {setFilteredBotines(botines)}
    },[botines,posicionID]);





    return (
        <Container fluid className="contenedor-botines-selecciones">

            <div className="contenedor-titulo-plp">
                <h3>Botines Selección {seleccionID}</h3>
            </div>

            <aside className="controlador">

                <h4>FILTROS</h4>

                <div className="filtros">
                    <span>POSICION</span>
                    <img className={flag?"open":"close"} onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flag && (<div className="contenedor-tactica">

                    <div className="tactica-sidebar">
                        <img src= {require ("../Multimedia/cancha-sidebar.png")} alt="" />

                        <Link to={`/seleccion/${seleccionID}/Arquero`}><button className="boton-pos pos-arq">ARQ</button></Link>

                        <Link to={`/seleccion/${seleccionID}/Defensor`}><button className="boton-pos pos-li">LI</button></Link>
                        <Link to={`/seleccion/${seleccionID}/Defensor`}><button className="boton-pos pos-dfc">DFC</button></Link>
                        <Link to={`/seleccion/${seleccionID}/Defensor`}><button className="boton-pos pos-ld">LD</button></Link>

                        <Link to={`/seleccion/${seleccionID}/Mediocampista`}><button className="boton-pos pos-mcd">MCD</button></Link>
                        <Link to={`/seleccion/${seleccionID}/Mediocampista`}><button className="boton-pos pos-mi">MI</button></Link>
                        <Link to={`/seleccion/${seleccionID}/Mediocampista`}><button className="boton-pos pos-md">MD</button></Link>
                        <Link to={`/seleccion/${seleccionID}/Mediocampista`}><button className="boton-pos pos-mco">MCO</button></Link>

                        <Link to={`/seleccion/${seleccionID}/Delantero`}><button className="boton-pos pos-ei">EI</button></Link>
                        <Link to={`/seleccion/${seleccionID}/Delantero`}><button className="boton-pos pos-dc">DC</button></Link>
                        <Link to={`/seleccion/${seleccionID}/Delantero`}><button className="boton-pos pos-ed">ED</button></Link>
                    </div>

                    <Link to={`/seleccion/${seleccionID}`}><button className="reset">TODAS</button></Link>
                    
                </div>
                )}

            </aside>

           
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