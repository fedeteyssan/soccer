import "./BootListByPosition.scss";
import React, { useState, useEffect } from "react";
import { useHistory, Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import baseFinal from "../baseFinal.json";
import Item from "../components/item/Item";
import { useQuery } from "../hooks/useQuery";
import ScrollToTop from "../components/ScrollToTop";


const BootListByPosition = () => {
    
    const query = useQuery();

    const styleID = query.get("style");
    const teamID = query.get("team");
    const positionID = query.get("position");
    const brandID = query.get("brand");

    const [boots, setBoots] = useState([]);
    const[filteredBoots, setFilteredBoots]= useState([]);

    const [flagTeam,setFlagTeam]=useState(false);
    const handleClick =() =>{
        setFlagTeam(flagTeam?false:true);
    }

    const [flagStyle,setFlagStyle]=useState(false);
    const handleClick2 =() =>{
        setFlagStyle(flagStyle?false:true);
    }

    const [flagBrand,setFlagBrand]=useState(false);
    const handleClick3 =() =>{
        setFlagBrand(flagBrand?false:true);
    }

    let history = useHistory();
    function handleChange(value) {
        history.push(`/position?position=${positionID}&style=${styleID}&brand=${brandID}&team=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeTeam(value) {
        history.push(`/position?position=${positionID}&style=${styleID}&brand=${brandID}&team=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeStyle(value) {
        history.push(`/position?position=${positionID}&team=${teamID}&brand=${brandID}&style=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeBrand(value) {
        history.push(`/position?position=${positionID}&team=${teamID}&style=${styleID}&brand=${value}`);
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
            positionID
            ? setBoots(result.filter((product) => product.position === positionID))
            : setBoots(baseFinal);
        })
        .catch((err) => console.log(err));
    }, [positionID]);

    useEffect(() => {
        if (!boots) return;
        let filteredProducts = boots;

        if(styleID&&styleID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.style1 === styleID || product.style2 === styleID); 
        }

        if(teamID&&teamID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.team === teamID);   
        }
        if(brandID&&brandID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.brand === brandID);   
        }

        setFilteredBoots(filteredProducts)

    },[boots,teamID,styleID,brandID]);


    return (

        <div>

            <ScrollToTop />

            <div className="fondo"></div>

            <Container fluid className="contenedor-botines-posiciones">   

                <div className="contenedor-titulo-plp">
                    <div className="banner"></div>
                    <h3>{positionID.replace(/-/g, ' ')} player's boots</h3>
                    <Link to="/home"><img className="home" src= {require ("../Multimedia/home.png")} alt="" /></Link>
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

                        <select onChange={event => handleChangeStyle(event.target.value)}>
                        <option value="null">GAME STYLE</option>
                            <option value="Elegant">Elegant</option>
                            <option value="Dominant">Dominant</option>
                            <option value="Unstoppable">Unstoppable</option>
                            <option value="Strategist">Strategist</option>
                            <option value="Defiant">Defiant</option>
                            <option value="Intuitive">Intuitive</option>
                        </select>

                        <select onChange={event => handleChangeBrand(event.target.value)}>
                            <option value="null">BRAND</option>
                            <option value="adidas">adidas</option>
                            <option value="Nike">Nike</option>
                            <option value="Puma">Puma</option>
                        </select>  

                    </div>
                </div>

                <aside className="controlador">

                    <h4>FILTERS <img className="ms-3" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-filtros">

                        <div className="filtro filtro1">
                            <span>GAME STYLE</span>
                            <img className={flagStyle?"open flecha1":"close flecha1"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagStyle && (<div className="contenedor-estilos">

                            <Link to={`/position?position=${positionID}&team=${teamID}&brand=${brandID}`} onClick={handleClick2}><button className="reset">{styleID!=="null"?styleID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/position?position=${positionID}&team=${teamID}&brand=${brandID}&style=Elegant`}><input type="button" id="Elegant"></input></Link>
                                    <label for="Elegant">ELEGANT</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/position?position=${positionID}&team=${teamID}&brand=${brandID}&style=Dominante`}><input type="button" id="Dominante"></input></Link>
                                    <label for="Dominante">DOMINANT</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/position?position=${positionID}&team=${teamID}&brand=${brandID}&style=Unstoppable`}><input type="button" id="Unstoppable"></input></Link>
                                    <label for="Unstoppable">UNSTOPPABLE</label>
                                </div>  
                                
                            </div>

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/position?position=${positionID}&team=${teamID}&brand=${brandID}&style=Strategist`}><input type="button" id="Strategist"></input></Link>
                                    <label for="Strategist">STRATEGIST</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/position?position=${positionID}&team=${teamID}&brand=${brandID}&style=Defiant`}><input type="button" id="Defiant"></input></Link>
                                    <label for="Defiant">DEFIANT</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/position?position=${positionID}&team=${teamID}&brand=${brandID}&style=Intuitive`}><input type="button" id="Intuitive"></input></Link>
                                    <label for="Intuitive">INTUITIVE</label>
                                </div>  
                                
                            </div>

                        </div>
                        )}

                        <div className="filtro">
                            <span>TEAM</span>
                            <img className={flagTeam?"open flecha2":"close flecha2"} onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
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
                            <span>BRAND</span>
                            <img className={flagBrand?"open flecha3":"close flecha3"} onClick={handleClick3} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagBrand && (<div className="contenedor-marcas">

                            <Link to={`/position?position=${positionID}&team=${teamID}&style=${styleID}`} onClick={handleClick3}><button className="reset">{brandID!=="null"?brandID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <Link to={`/position?position=${positionID}&team=${teamID}&style=${styleID}&brand=adidas`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-adidas.png")} alt="" />
                                        <label for="adidas">adidas</label>
                                    </div>
                                </Link>

                                <Link to={`/position?position=${positionID}&team=${teamID}&style=${styleID}&brand=Nike`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-nike.png")} alt="" />
                                        <label for="Nike">Nike</label>
                                    </div>
                                </Link>
                                
                                <Link to={`/position?position=${positionID}&team=${teamID}&style=${styleID}&brand=Puma`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-puma.png")} alt="" />
                                        <label for="Puma">Puma</label>
                                    </div> 
                                </Link> 
                                
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
 
export default BootListByPosition;