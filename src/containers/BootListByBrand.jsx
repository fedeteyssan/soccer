import "./BootListByBrand.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseFinal from "../baseFinal.json";
import Item from "../components/item/Item";
import { Link,useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import ScrollToTop from "../components/ScrollToTop";

const BootListByBrand = () => {

    const query = useQuery();

    const brandID = query.get("brand");
    const styleID = query.get("style");
    const teamID = query.get("team");
    const positionID = query.get("position");
    
    const [boots, setBoots] = useState([]);
    const[filteredBoots, setFilteredBoots]= useState([]);

    const [flagPosition,setFlagPosition]=useState(false);
    const handleClick =() =>{
        setFlagPosition(flagPosition?false:true);
    }

    const [flagTeam,setFlagTeam]=useState(false);
    const handleClick2 =() =>{
        setFlagTeam(flagTeam?false:true);
    }

    const [flagStyle,setFlagStyle]=useState(false);
    const handleClick3 =() =>{
        setFlagStyle(flagStyle?false:true);
    }

    let history = useHistory();

    function handleChange(value) {
    history.push(`/brand?brand=${brandID}&position=${positionID}&style=${styleID}&team=${value}`);
    window.scrollTo(0, 0);
    }

    function handleChangeTeam(value) {
        history.push(`/brand?brand=${brandID}&position=${positionID}&style=${styleID}&team=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangePosition(value) {
        history.push(`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeStyle(value) {
        history.push(`/brand?brand=${brandID}&team=${teamID}&position=${positionID}&style=${value}`);
        window.scrollTo(0, 0);
    }
    

    const getboots = (dataBase) => 
        new Promise((resolve, reject) => {
           
            if (dataBase) {
                resolve(dataBase);
            } else {
                reject("No products found");
            };
            
    });

    useEffect(() => {
        getboots(baseFinal)
        .then((result) => {
            brandID
            ? setBoots(result.filter((product) => product.brand === brandID ))
            : setBoots(baseFinal);
        })
        .catch((err) => console.log(err));
    }, [brandID]);

    useEffect(() => {
        if (!boots) return;
        let filteredProducts = boots;

        if(positionID&&positionID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.position === positionID); 
        }

        if(teamID&&teamID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.team === teamID);   
        }

        if(styleID&&styleID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.style1 === styleID || product.style2 === styleID);   
        }

        setFilteredBoots(filteredProducts)
        
    },[boots,positionID,teamID,styleID]);


    return (
        <div>

            <ScrollToTop /> 

            <div className="fondo"></div>
            
            <Container fluid className="contenedor-botines-marcas">  

                <div className="contenedor-titulo-plp">
                    <div className="banner"></div>
                    <h3>{brandID} player's boots</h3>
                    <Link to="/"><img className="home" src= {require ("../Multimedia/home.png")} alt="" /></Link>
                    <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
                </div>

                <div className="drawer">

                    <h4>FILTERS <img className="filter-icon" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-selectores">

                        <select onChange={event => handleChangeTeam(event.target.value)}>
                            <option value="null">TEAM</option>
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

                        <select onChange={event => handleChangePosition(event.target.value)}>
                            <option value="null">POSITION</option>
                            <option value="Goalkeeper">Goalkeeper</option>
                            <option value="Left-Back">Left back</option>
                            <option value="Center-Back">Center back</option>
                            <option value="Right-Back">Right back</option>
                            <option value="Defensive-Midfielder">Defensive midfielder</option>
                            <option value="Central-Midfielder">Central midfielder</option>
                            <option value="Attacking-Midfielder">Attacking midfielder</option>
                            <option value="Left-Winger">Left winger</option>
                            <option value="Striker">Striker</option>
                            <option value="Right-Winger">Right winger</option>
                        </select>

                        <select onChange={event => handleChangeStyle(event.target.value)}>
                            <option value="null">GAME STYLE</option>
                            <option value="Elegant">Elegant</option>
                            <option value="Dominant">Dominant</option>
                            <option value="Unstoppable">Unstoppable</option>
                            <option value="Strategist">Strategist</option>
                            <option value="Defiant">Defiant</option>
                            <option value="Intuitive">Intuitive</option>
                        </select>

                    </div>
                </div>

                <aside className="controlador">

                    <h4>FILTERS <img className="ms-3" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-filtros">

                        <div className="filtro filtro1">
                            <span>POSITION</span>
                            <img className={flagPosition?"open flecha1":"close flecha1"}  onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagPosition && (<div className="contenedor-tactica">

                            <div className="tactica-sidebar">
                                <img src= {require ("../Multimedia/cancha-sidebar.png")} alt="" />

                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}`} onClick={handleClick}><button className="reset">{positionID!=="null"?positionID:""} X</button></Link> 

                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Goalkeeper`}><button className="boton-pos pos-arq">GK</button></Link>

                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Left-Back`}><button className="boton-pos pos-li">LB</button></Link>
                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Center-Back`}><button className="boton-pos pos-dfc1">CB</button></Link>
                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Center-Back`}><button className="boton-pos pos-dfc2">CB</button></Link>
                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Right-Back`}><button className="boton-pos pos-ld">RB</button></Link>

                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Defensive-Midfielder`}><button className="boton-pos pos-mcd">CDM</button></Link>
                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Central-Midfielder`}><button className="boton-pos pos-mc">CM</button></Link>
                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Attacking-Midfielder`}><button className="boton-pos pos-mco">CAM</button></Link>

                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Left-Winger`}><button className="boton-pos pos-ei">LW</button></Link>
                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Striker`}><button className="boton-pos pos-dc">ST</button></Link>
                                <Link to={`/brand?brand=${brandID}&team=${teamID}&style=${styleID}&position=Right-Winger`}><button className="boton-pos pos-ed">RW</button></Link>
                            </div>
                        
                        </div>
                        )}

                        <div className="filtro">
                            <span>TEAM</span>
                            <img className={flagTeam?"open flecha2":"close flecha2"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagTeam && (<div className="contenedor-selector-paises">
                            <select size="32"onChange={event => handleChange(event.target.value)}>
                                <option value="null">All</option>
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
                                <option value="Dinabrand">Dinabrand</option>
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
                            <span>GAME STYLE</span>
                            <img className={flagStyle?"open flecha3":"close flecha3"} onClick={handleClick3} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagStyle && (<div className="contenedor-estilos">

                            <Link to={`/brand?brand=${brandID}&team=${teamID}&position=${positionID}`} onClick={handleClick2}><button className="reset">{styleID!=="null"?styleID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/brand?brand=${brandID}&team=${teamID}&position=${positionID}&style=Elegant`}><input type="button" id="Elegant"></input></Link>
                                    <label for="Elegant">ELEGANT</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/brand?brand=${brandID}&team=${teamID}&position=${positionID}&style=Dominant`}><input type="button" id="Dominant"></input></Link>
                                    <label for="Dominant">DOMINANT</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/brand?brand=${brandID}&team=${teamID}&position=${positionID}&style=Unstoppable`}><input type="button" id="Unstoppable"></input></Link>
                                    <label for="Unstoppable">UNSTOPPABLE</label>
                                </div>  
                                
                            </div>

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/brand?brand=${brandID}&team=${teamID}&position=${positionID}&style=Strategist`}><input type="button" id="Strategist"></input></Link>
                                    <label for="Strategist">STRATEGIST</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/brand?brand=${brandID}&team=${teamID}&position=${positionID}&style=Defiant`}><input type="button" id="Defiant"></input></Link>
                                    <label for="Defiant">DEFIANT</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/brand?brand=${brandID}&team=${teamID}&position=${positionID}&style=Intuitive`}><input type="button" id="Intuitive"></input></Link>
                                    <label for="Intuitive">INTUITIVE</label>
                                </div>  
                                
                            </div>

                        </div>
                    )}

                    </div>

                </aside>

                <div className="contenedor-cards">
                    {filteredBoots.length
                    ? filteredBoots.map((boot) => <Item item={boot}/>)
                    : <div className="error-msg"><p>...No players found with the selected combination ...</p></div>  
                    }    
                </div>

            </Container>
            
        </div>
       
    );
};
 
export default BootListByBrand;