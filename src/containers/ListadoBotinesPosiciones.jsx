import "./ListadoBotinesPosiciones.scss";
import React, { useState, useEffect } from "react";
import { useHistory, Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";
import { useQuery } from "../hooks/useQuery";
import ScrolltoTop from "../components/ScrollToTop";


const ListadoBotinesPosiciones = () => {
    
    const query = useQuery();

    const estiloID = query.get("estilo");
    const seleccionID = query.get("seleccion");
    const posicionID = query.get("posicion");

    const [botines, setBotines] = useState([]);
    const[filteredBotines, setFilteredBotines]= useState([]);

    const [flagSeleccion,setFlagSeleccion]=useState(false)

    const handleClick =() =>{
        setFlagSeleccion(flagSeleccion?false:true);
    }

    const [flagEstilo,setFlagEstilo]=useState(false)
    const handleClick2 =() =>{
        setFlagEstilo(flagEstilo?false:true);
    }

    let history = useHistory();
    function handleChange(value) {
    history.push(`/posicion?posicion=${posicionID}&estilo=${estiloID}&seleccion=${value}`);
    }

    function handleChangeSeleccion(value) {
    history.push(`/posicion?posicion=${posicionID}&estilo=${estiloID}&seleccion=${value}`);
    }

    function handleChangeEstilo(value) {
        history.push(`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=${value}`);
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
        let filteredProducts = botines;

        if(estiloID&&estiloID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.estilo1 === estiloID || product.estilo2 === estiloID); 
        }

        if(seleccionID&&seleccionID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.seleccion === seleccionID);   
        }
        setFilteredBotines(filteredProducts)

    },[botines,seleccionID,estiloID]);


    return (
        <Container fluid className="contenedor-botines-posiciones">

            <ScrolltoTop />

            <div className="contenedor-titulo-plp">
                <div className="banner"></div>
                <h3>Botines de Jugadores con Posicion {posicionID}</h3>
                <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
            </div>

            <div className="drawer">

                <h4>FILTROS</h4>

                <div className="contenedor-selectores">

                    <select onChange={event => handleChangeSeleccion(event.target.value)}>
                        <option value="null">SELECCION</option>
                        <option value="Alemania">Alemania</option>
                        <option value="Arabia-Saudita">Arabia Saudita</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Bélgica">Bélgica</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Camerún">Camerún</option>
                        <option value="Canadá">Canadá</option>
                        <option value="Corea">Corea</option>
                        <option value="Costa-Rica">Costa Rica</option>
                        <option value="Croacia">Croacia</option>
                        <option value="Dinamarca">Dinamarca</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="España">España</option>
                        <option value="Estados-Unidos">Estados Unidos</option>
                        <option value="Francia">Francia</option>
                        <option value="Gales">Gales</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Holanda">Holanda</option>
                        <option value="Inglaterra">Inglaterra</option>
                        <option value="Irán">Irán</option>
                        <option value="Japón">Japón</option>
                        <option value="Marruecos">Marruecos</option>
                        <option value="México">México</option>
                        <option value="Polonia">Polonia</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Suiza">Suiza</option>
                        <option value="Túnez">Túnez</option>
                        <option value="Uruguay">Uruguay</option>
                    </select>  

                    <select onChange={event => handleChangeEstilo(event.target.value)}>
                        <option value="null">ESTILO</option>
                        <option value="Elegante">Elegante</option>
                        <option value="Dominate">Dominante</option>
                        <option value="Imparable">Imparable</option>
                        <option value="Estratega">Estratega</option>
                        <option value="Desafiante">Desafiante</option>
                        <option value="Intuitivo">Intuitivo</option>
                    </select>

                </div>
            </div>

            <aside className="controlador">

                <h4>FILTROS</h4>

                <div className="filtro">
                    <span>ESTILO DE JUEGO</span>
                    <img className={flagEstilo?"open flecha":"close flecha"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flagEstilo && (<div className="contenedor-estilos">

                    <div className="contenedor-botones">
                        <div className="botones-estilo">
                            <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=Elegante`}><input type="button" id="Elegante"></input></Link>
                            <label for="Elegante">ELEGANTE</label>
                        </div>
        
                        <div className="botones-estilo">
                            <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=Dominante`}><input type="button" id="Dominante"></input></Link>
                            <label for="Dominante">DOMINANTE</label>
                        </div>
                        
                        <div className="botones-estilo">
                            <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=Imparable`}><input type="button" id="Imparable"></input></Link>
                            <label for="Imparable">IMPARABLE</label>
                       </div>  
                        
                    </div>

                    <div className="contenedor-botones">
                        <div className="botones-estilo">
                            <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=Estratega`}><input type="button" id="Estratega"></input></Link>
                            <label for="Estratega">ESTRATEGA</label>
                        </div>
        
                        <div className="botones-estilo">
                            <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=Desafiante`}><input type="button" id="Desafiante"></input></Link>
                            <label for="Desafiante">DESAFIANTE</label>
                        </div>
                        
                        <div className="botones-estilo">
                        <   Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=Intuitivo`}><input type="button" id="Intuitivo"></input></Link>
                            <label for="Intuitivo">INTUITIVO</label>
                       </div>  
                        
                    </div>
                    
                    <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}`}><button className="reset">X</button></Link> 


                </div>
                )}

                <div className="filtro">
                    <span>SELECCION</span>
                    <img className={flagSeleccion?"open":"close"} onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flagSeleccion && (<div className="contenedor-selector-paises">
                <select size="32"onChange={event => handleChange(event.target.value)}>
                    <option value="null">TODOS</option>
                    <option value="Alemania">Alemania</option>
                    <option value="Arabia-Saudita">Arabia Saudita</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Australia">Australia</option>
                    <option value="Bélgica">Bélgica</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Camerún">Camerún</option>
                    <option value="Canadá">Canadá</option>
                    <option value="Corea">Corea</option>
                    <option value="Costa-Rica">Costa Rica</option>
                    <option value="Croacia">Croacia</option>
                    <option value="Dinamarca">Dinamarca</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="España">España</option>
                    <option value="Estados-Unidos">Estados Unidos</option>
                    <option value="Francia">Francia</option>
                    <option value="Gales">Gales</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Holanda">Holanda</option>
                    <option value="Inglaterra">Inglaterra</option>
                    <option value="Irán">Irán</option>
                    <option value="Japón">Japón</option>
                    <option value="Marruecos">Marruecos</option>
                    <option value="México">México</option>
                    <option value="Polonia">Polonia</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Suiza">Suiza</option>
                    <option value="Túnez">Túnez</option>
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
 
 export default ListadoBotinesPosiciones;