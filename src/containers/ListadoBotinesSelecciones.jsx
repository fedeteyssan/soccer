import "./ListadoBotinesSelecciones.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import ScrolltoTop from "../components/ScrollToTop";

const ListadoBotinesSelecciones = () => {

    const query = useQuery();
  
    const seleccionID = query.get("seleccion");
    const posicionID = query.get("posicion");
    const estiloID = query.get("estilo");
 
    
    const [botines, setBotines] = useState([]);
    const[filteredBotines, setFilteredBotines]= useState([]);

    const [flagPosicion,setFlagPosicion]=useState(false)
    const handleClick =() =>{
        setFlagPosicion(flagPosicion?false:true);
    }

    const [flagEstilo,setFlagEstilo]=useState(false)
    const handleClick2 =() =>{
        setFlagEstilo(flagEstilo?false:true);
    }

    let history = useHistory();

    function handleChangePosicion(value) {
    history.push(`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=${value}`);
    }

    function handleChangeEstilo(value) {
        history.push(`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}&estilo=${value}`);
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
        let filteredProducts = botines;

        if(posicionID&&posicionID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.posicion === posicionID); 
        }

        if(estiloID&&estiloID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.estilo1 === estiloID || product.estilo2 === estiloID);   
        }
        setFilteredBotines(filteredProducts)

    },[botines,posicionID, estiloID]);


    return (
        <Container fluid className="contenedor-botines-selecciones">

            <ScrolltoTop />

            <div className="contenedor-titulo-plp">
                <div className="banner"></div>
                <h3>Botines de Jugadores Selección {seleccionID}</h3>
                <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
            </div>
    
            <div className="drawer">

                <h4>FILTROS</h4>

                <div className="contenedor-selectores">

                    <select onChange={event => handleChangePosicion(event.target.value)}>
                        <option value="null">POSICION</option>
                        <option value="Arquero">Arquero</option>
                        <option value="Defensor">Defensor</option>
                        <option value="Mediocampista">Mediocampista</option>
                        <option value="Delantero">Delantero</option>
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
                    <span>POSICION</span>
                    <img className={flagPosicion?"open":"close"} onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flagPosicion && (<div className="contenedor-tactica">

                    <div className="tactica-sidebar">
                        <img src= {require ("../Multimedia/cancha-sidebar.png")} alt="" />

                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}`}><button className="reset">X</button></Link> 

                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Arquero`}><button className="boton-pos pos-arq">ARQ</button></Link>

                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Defensor`}><button className="boton-pos pos-li">LI</button></Link>
                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Defensor`}><button className="boton-pos pos-dfc">DFC</button></Link>
                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Defensor`}><button className="boton-pos pos-ld">LD</button></Link>

                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Mediocampista`}><button className="boton-pos pos-mcd">MCD</button></Link>
                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Mediocampista`}><button className="boton-pos pos-mi">MI</button></Link>
                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Mediocampista`}><button className="boton-pos pos-md">MD</button></Link>
                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Mediocampista`}><button className="boton-pos pos-mco">MCO</button></Link>

                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Delantero`}><button className="boton-pos pos-ei">EI</button></Link>
                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Delantero`}><button className="boton-pos pos-dc">DC</button></Link>
                        <Link to={`/seleccion?seleccion=${seleccionID}&estilo=${estiloID}&posicion=Delantero`}><button className="boton-pos pos-ed">ED</button></Link>
                    </div>
                    
                </div>
                )}

                <div className="filtro">
                    <span>ESTILO DE JUEGO</span>
                    <img className={flagEstilo?"open flecha":"close flecha"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                </div>

                {flagEstilo && (<div className="contenedor-estilos">

                    <div className="contenedor-botones">
                        <div className="botones-estilo">
                            <Link to={`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}&estilo=Elegante`}><input type="button" id="Elegante"></input></Link>
                            <label for="Elegante">ELEGANTE</label>
                        </div>
        
                        <div className="botones-estilo">
                            <Link to={`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}&estilo=Dominante`}><input type="button" id="Dominante"></input></Link>
                            <label for="Dominante">DOMINANTE</label>
                        </div>
                        
                        <div className="botones-estilo">
                            <Link to={`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}&estilo=Imparable`}><input type="button" id="Imparable"></input></Link>
                            <label for="Imparable">IMPARABLE</label>
                       </div>  
                        
                    </div>

                    <div className="contenedor-botones">
                        <div className="botones-estilo">
                            <Link to={`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}&estilo=Estratega`}><input type="button" id="Estratega"></input></Link>
                            <label for="Estratega">ESTRATEGA</label>
                        </div>
        
                        <div className="botones-estilo">
                            <Link to={`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}&estilo=Desafiante`}><input type="button" id="Desafiante"></input></Link>
                            <label for="Desafiante">DESAFIANTE</label>
                        </div>
                        
                        <div className="botones-estilo">
                        <   Link to={`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}&estilo=Intuitivo`}><input type="button" id="Intuitivo"></input></Link>
                            <label for="Intuitivo">INTUITIVO</label>
                       </div>  
                        
                    </div>
                    
                    <Link to={`/seleccion?seleccion=${seleccionID}&posicion=${posicionID}`}><button className="reset">X</button></Link> 


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
 
 export default ListadoBotinesSelecciones;