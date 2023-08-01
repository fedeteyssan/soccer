import "./BootListByTeam.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseFinal from "../baseFinal.json";
import Item from "../components/item/Item";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import ScrollToTop from "../components/ScrollToTop";

const BootListByTeam = () => {

    const query = useQuery();
  
    const teamID = query.get("team");
    const positionID = query.get("position");
    const styleID = query.get("style");
    const brandID = query.get("brand");
    
    const [boots, setBoots] = useState([]);
    const[filteredBoots, setFilteredBoots]= useState([]);

    const [flagPosition,setFlagPosition]=useState(false);
    const handleClick =() =>{
        setFlagPosition(flagPosition?false:true);
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

    function handleChangeposition(value) {
        history.push(`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangestyle(value) {
        history.push(`/team?team=${teamID}&position=${positionID}&brand=${brandID}&style=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangebrand(value) {
        history.push(`/team?team=${teamID}&style=${styleID}&position=${positionID}&brand=${value}`);
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
            teamID
            ? setBoots(result.filter((product) => product.team === teamID))
            : setBoots(baseFinal);
        })
        .catch((err) => console.log(err));
    }, [teamID]);

    useEffect(() => {
        if (!boots) return;
        let filteredProducts = boots;

        if(positionID&&positionID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.position === positionID); 
        }

        if(styleID&&styleID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.style1 === styleID || product.style2 === styleID);   
        }

        if(brandID&&brandID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.brand === brandID);   
        }

        setFilteredBoots(filteredProducts)

    },[boots,positionID, styleID,brandID]);


    return (

        <div>

            <ScrollToTop /> 

            <div className="fondo"></div>           

            <Container fluid className="contenedor-botines-clubes">  

                <div className="contenedor-titulo-plp">
                    <div className="banner"></div>
                    <h3>{teamID.replace(/-/g, ' ')} player's boots</h3>
                    <Link to="/"><img className="home" src= {require ("../Multimedia/home.png")} alt="" /></Link>
                    <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
                </div>

                <div className="drawer">

                    <h4>FILTERS <img className="filter-icon" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-selectores">

                        <select onChange={event => handleChangeposition(event.target.value)}>
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
                    

                        <select onChange={event => handleChangestyle(event.target.value)}>
                            <option value="null">GAME STYLE</option>
                            <option value="Elegant">Elegant</option>
                            <option value="Dominant">Dominant</option>
                            <option value="Unstoppable">Unstoppable</option>
                            <option value="Strategist">Strategist</option>
                            <option value="Defiant">Defiant</option>
                            <option value="Intuitive">Intuitive</option>
                        </select>  

                        <select onChange={event => handleChangebrand(event.target.value)}>
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
                            <span>POSITION</span>
                            <img className={flagPosition?"open flecha1":"close flecha1"} onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagPosition && (<div className="contenedor-tactica">

                            <div className="tactica-sidebar">
                                <img src= {require ("../Multimedia/cancha-sidebar.png")} alt="" />

                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}`} onClick={handleClick}><button className="reset">{positionID!=="null"?positionID:""} X</button></Link> 

                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Goalkeeper`}><button className="boton-pos pos-arq">GK</button></Link>

                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Left-Back`}><button className="boton-pos pos-li">LB</button></Link>
                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Center-Back`}><button className="boton-pos pos-dfc1">CB</button></Link>
                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Center-Back`}><button className="boton-pos pos-dfc2">CB</button></Link>
                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Right-Back`}><button className="boton-pos pos-ld">RB</button></Link>

                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Defensive-Midfielder`}><button className="boton-pos pos-mcd">CDM</button></Link>
                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Central-Midfielder`}><button className="boton-pos pos-mc">CM</button></Link>
                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Attacking-Midfielder`}><button className="boton-pos pos-mco">CAM</button></Link>

                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Left-Winger`}><button className="boton-pos pos-ei">LW</button></Link>
                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Striker`}><button className="boton-pos pos-dc">ST</button></Link>
                                <Link to={`/team?team=${teamID}&style=${styleID}&brand=${brandID}&position=Right-Winger`}><button className="boton-pos pos-ed">RW</button></Link>
                            </div>
                            
                        </div>
                        )}

                        <div className="filtro">
                            <span>GAME STYLE</span>
                            <img className={flagStyle?"open flecha2":"close flecha2"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagStyle && (<div className="contenedor-estilos">

                            <Link to={`/team?team=${teamID}&position=${positionID}&brand=${brandID}`} onClick={handleClick2}><button className="reset">{styleID!=="null"?styleID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/team?team=${teamID}&position=${positionID}&brand=${brandID}&style=Elegant`}><input type="button" id="Elegant"></input></Link>
                                    <label for="Elegant">ELEGANT</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/team?team=${teamID}&position=${positionID}&brand=${brandID}&style=Dominant`}><input type="button" id="Dominant"></input></Link>
                                    <label for="Dominant">DOMINANT</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/team?team=${teamID}&position=${positionID}&brand=${brandID}&style=Unstoppable`}><input type="button" id="Unstoppable"></input></Link>
                                    <label for="Unstoppable">UNSTOPPABLE</label>
                                </div>  
                                
                            </div>

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/team?team=${teamID}&position=${positionID}&brand=${brandID}&style=Strategist`}><input type="button" id="Strategist"></input></Link>
                                    <label for="Strategist">STRATEGIST</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/team?team=${teamID}&position=${positionID}&brand=${brandID}&style=Defiant`}><input type="button" id="Defiant"></input></Link>
                                    <label for="Defiant">DEFIANT</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/team?team=${teamID}&position=${positionID}&brand=${brandID}&style=Intuitive`}><input type="button" id="Intuitive"></input></Link>
                                    <label for="Intuitive">INTUITIVE</label>
                                </div>  
                                
                            </div>
                        </div>
                        )}

                        <div className="filtro filtro3">
                            <span>BRAND</span>
                            <img className={flagBrand?"open flecha3":"close flecha3"} onClick={handleClick3} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagBrand && (<div className="contenedor-marcas">

                            <Link to={`/team?team=${teamID}&style=${styleID}&position=${positionID}`} onClick={handleClick3}><button className="reset">{brandID!=="null"?brandID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <Link to={`/team?team=${teamID}&style=${styleID}&position=${positionID}&brand=adidas`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-adidas.png")} alt="" />
                                        <label for="adidas">adidas</label>
                                    </div>
                                </Link>

                                <Link to={`/team?team=${teamID}&style=${styleID}&position=${positionID}&brand=Nike`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-nike.png")} alt="" />
                                        <label for="Nike">Nike</label>
                                    </div>
                                </Link>
                                
                                <Link to={`/team?team=${teamID}&style=${styleID}&position=${positionID}&brand=Puma`}>
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
 
 export default BootListByTeam;