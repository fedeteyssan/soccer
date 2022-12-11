import "./ListadoBotinesEstilos.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseFinal from "../baseFinal.json";
import Item from "../components/item/Item";
import { Link,useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import ScrollToTop from "../components/ScrollToTop";

const ListadoBotinesEstilos = () => {

    const query = useQuery();

    const estiloID = query.get("estilo");
    const seleccionID = query.get("seleccion");
    const posicionID = query.get("posicion");
    const marcaID = query.get("marca");

    const [botines, setBotines] = useState([]);
    const[filteredBotines, setFilteredBotines]= useState([]);

    const [flagPosicion,setFlagPosicion]=useState(false);
    const handleClick =() =>{
        setFlagPosicion(flagPosicion?false:true);
    }

    const [flagSeleccion,setFlagSeleccion]=useState(false);
    const handleClick2 =() =>{
        setFlagSeleccion(flagSeleccion?false:true);
    }

    const [flagMarca,setFlagMarca]=useState(false);
    const handleClick3 =() =>{
        setFlagMarca(flagMarca?false:true);
    }

    let history = useHistory();

    function handleChange(value) {
    history.push(`/estilo?estilo=${estiloID}&posicion=${posicionID}&marca=${marcaID}&seleccion=${value}`);
    window.scrollTo(0, 0);
    }

    function handleChangeSeleccion(value) {
        history.push(`/estilo?estilo=${estiloID}&posicion=${posicionID}&marca=${marcaID}&seleccion=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangePosicion(value) {
        history.push(`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeMarca(value) {
        history.push(`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=${posicionID}&marca=${value}`);
        window.scrollTo(0, 0);
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
        getbotines(baseFinal)
        .then((result) => {
            estiloID
            ? setBotines(result.filter((product) => product.estilo1 === estiloID || product.estilo2 === estiloID))
            : setBotines(baseFinal);
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

        if(marcaID&&marcaID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.marca === marcaID);   
        }

        setFilteredBotines(filteredProducts)
        
    },[botines,posicionID,seleccionID,marcaID]);


    return (
        <div>
            
            <ScrollToTop /> 

            <div className="fondo"></div>
            
            <Container fluid className="contenedor-botines-estilos">  

                <div className="contenedor-titulo-plp">
                    <div className="banner"></div>
                    <h3>Botines de Jugadores con Estilo {estiloID}</h3>
                    <Link to="/home"><img className="home" src= {require ("../Multimedia/home.png")} alt="" /></Link>
                    <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
                </div>

                <div className="drawer">

                    <h4>FILTROS <img className="filter-icon" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-selectores">

                        <select onChange={event => handleChangeSeleccion(event.target.value)}>
                            <option value="null">SELECCIÓN</option>
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
                            <option value="Países-Bajos">Países Bajos</option>
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

                        <select onChange={event => handleChangePosicion(event.target.value)}>
                            <option value="null">POSICIÓN</option>
                            <option value="Arquero">Arquero</option>
                            <option value="Lateral-izquierdo">Lateral izquierdo</option>
                            <option value="Defensor-central">Defensor central</option>
                            <option value="Lateral-derecho">Lateral derecho</option>
                            <option value="Volante-defensivo">Volante defensivo</option>
                            <option value="Volante-central">Volante central</option>
                            <option value="Volante-ofensivo">Volante ofensivo</option>
                            <option value="Extremo-Izquierdo">Extremo izquierdo</option>
                            <option value="Delantero">Delantero</option>
                            <option value="Extremo-Derecho">Extremo derecho</option>
                        </select>

                        <select onChange={event => handleChangeMarca(event.target.value)}>
                            <option value="null">MARCA</option>
                            <option value="adidas">adidas</option>
                            <option value="Nike">Nike</option>
                            <option value="Puma">Puma</option>
                        </select>  

                    </div>
                </div>

                <aside className="controlador">

                    <h4>FILTROS <img className="ms-3" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-filtros">

                        <div className="filtro filtro1">
                            <span>POSICIÓN</span>
                            <img className={flagPosicion?"open flecha1":"close flecha1"}  onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagPosicion && (<div className="contenedor-tactica">

                            <div className="tactica-sidebar">
                                <img src= {require ("../Multimedia/cancha-sidebar.png")} alt="" />

                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}`} onClick={handleClick}><button className="reset">{posicionID!=="null"?posicionID:""} X</button></Link> 

                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Arquero`}><button className="boton-pos pos-arq">ARQ</button></Link>

                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Lateral-izquierdo`}><button className="boton-pos pos-li">LI</button></Link>
                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Defensor-central`}><button className="boton-pos pos-dfc1">DFC</button></Link>
                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Defensor-central`}><button className="boton-pos pos-dfc2">DFC</button></Link>
                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Lateral-derecho`}><button className="boton-pos pos-ld">LD</button></Link>

                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Volante-defensivo`}><button className="boton-pos pos-mcd">MCD</button></Link>
                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Volante-central`}><button className="boton-pos pos-mc">MC</button></Link>
                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Volante-ofensivo`}><button className="boton-pos pos-mco">MCO</button></Link>

                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Extremo-Izquierdo`}><button className="boton-pos pos-ei">EI</button></Link>
                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Delantero`}><button className="boton-pos pos-dc">DC</button></Link>
                                <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&marca=${marcaID}&posicion=Extremo-Derecho`}><button className="boton-pos pos-ed">ED</button></Link>
                            </div>
                        
                        </div>
                        )}

                        <div className="filtro">
                            <span>SELECCIÓN</span>
                            <img className={flagSeleccion?"open":"close"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
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
                                <option value="Países-Bajos">Países Bajos</option>
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

                        <div className="filtro filtro3">
                            <span>MARCA</span>
                            <img className={flagMarca?"open flecha3":"close flecha3"} onClick={handleClick3} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagMarca && (<div className="contenedor-marcas">

                            <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=${posicionID}`} onClick={handleClick3}><button className="reset">{marcaID!=="null"?marcaID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <div className="botones-marcas">
                                    <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=${posicionID}&marca=adidas`}><img className="logo-marca" src= {require ("../Multimedia/logo-adidas.png")} alt="" /></Link>
                                    <label for="adidas">adidas</label>
                                </div>

                                <div className="botones-marcas">
                                    <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=${posicionID}&marca=Nike`}><img className="logo-marca" src= {require ("../Multimedia/logo-nike.png")} alt="" /></Link>
                                    <label for="Nike">Nike</label>
                                </div>
                                
                                <div className="botones-marcas">
                                    <Link to={`/estilo?estilo=${estiloID}&seleccion=${seleccionID}&posicion=${posicionID}&marca=Puma`}><img className="logo-marca" src= {require ("../Multimedia/logo-puma.png")} alt="" /></Link>
                                    <label for="Puma">Puma</label>
                                </div>  
                                
                            </div>

                        </div>
                        )}

                    </div>

                </aside>

                <div className="contenedor-cards">
                    {filteredBotines.length
                    ? filteredBotines.map((botin) => <Item item={botin}/>)
                    : <div className="error-msg"><p>...No hay jugadores con la combinación elegida ...</p></div>  
                    }    
                </div>

            </Container>
            
        </div>
       
    );
};
 
export default ListadoBotinesEstilos;