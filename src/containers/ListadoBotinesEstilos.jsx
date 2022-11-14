import "./ListadoBotinesEstilos.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";
import { Link,useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import ScrolltoTop from "../components/ScrollToTop";

const ListadoBotinesEsilos = () => {

    const query = useQuery();

    const estiloID = query.get("estilo");
    const seleccionID = query.get("seleccion");
    const posicionID = query.get("posicion");
    
    const [botines, setBotines] = useState([]);
    const[filteredBotines, setFilteredBotines]= useState([]);

    const [flagPosicion,setFlagPosicion]=useState(false)
    const handleClick =() =>{
        setFlagPosicion(flagPosicion?false:true);
    }

    const [flagSeleccion,setFlagSeleccion]=useState(false)
    const handleClick2 =() =>{
        setFlagSeleccion(flagSeleccion?false:true);
    }

    let history = useHistory();

    function handleChange(value) {
    history.push(`/estilo?estilo=${estiloID}&posicion=${posicionID}&seleccion=${value}`);
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

            <ScrolltoTop />

            <div className="contenedor-titulo-plp">
                <h3>Botines de Jugadores con Estilo {estiloID}</h3>
            </div>

            <aside className="controlador">

                <h4>FILTROS</h4>

                <div className="filtro">
                    <span>POSICION</span>
                    <img className={flagPosicion?"open flecha":"close flecha"}  onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flagPosicion && (<div className="contenedor-tactica">

                    <div className="tactica-sidebar">
                        <img src= {require ("../Multimedia/cancha-sidebar.png")} alt="" />

                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Arquero`}><button className="boton-pos pos-arq">ARQ</button></Link>

                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Defensor`}><button className="boton-pos pos-li">LI</button></Link>
                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Defensor`}><button className="boton-pos pos-dfc">DFC</button></Link>
                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Defensor`}><button className="boton-pos pos-ld">LD</button></Link>

                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Mediocampista`}><button className="boton-pos pos-mcd">MCD</button></Link>
                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Mediocampista`}><button className="boton-pos pos-mi">MI</button></Link>
                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Mediocampista`}><button className="boton-pos pos-md">MD</button></Link>
                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Mediocampista`}><button className="boton-pos pos-mco">MCO</button></Link>

                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Delantero`}><button className="boton-pos pos-ei">EI</button></Link>
                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Delantero`}><button className="boton-pos pos-dc">DC</button></Link>
                        <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=Delantero`}><button className="boton-pos pos-ed">ED</button></Link>
                    </div>

                    <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}`}><button className="reset">TODAS</button></Link>
                    
                </div>
                )}

                <div className="filtro">
                    <span>SELECCION</span>
                    <img className={flagSeleccion?"open":"close"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flagSeleccion && (<div className="contenedor-selector-paises">
                <select size="32"onChange={event => handleChange(event.target.value)}>
                    <option value="null">TODOS</option>
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
                {filteredBotines.length
                ? filteredBotines.map((botin) => <Item item={botin}/>)
                : <div className="error-msg"><p>...No hay jugadores con la combinación elegida ...</p></div>  
                }    
            </div>
           
         </Container>
     );
 };
 
 export default ListadoBotinesEsilos;