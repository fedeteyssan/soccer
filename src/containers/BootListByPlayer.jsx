import "./BootListByPlayer.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseFinal from "../baseFinal.json";
import Item from "../components/item/Item";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const BootListByPlayer = () => {

    const [boots, setBoots] = useState([]);

    const [tablaBoots, setTablaBoots]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const getboots = (dataBase) => 
    new Promise((resolve, reject) => {
       
        if (dataBase) {
            resolve(dataBase);
        } else {
            reject("No products found");
        };
        
    });


    const handleChange = e =>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) =>{
        let resultadoBusqueda = tablaBoots.filter((elemento) => 
            elemento.player.toString().toLowerCase().normalize('NFD')
            .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
            .normalize().includes(terminoBusqueda.toLowerCase().trim())
        );
        setBoots(resultadoBusqueda);
       
    }
    
    useEffect(() => {
        getboots(baseFinal)
        .then((result) => {
            setBoots(baseFinal);
            setTablaBoots(baseFinal);
        })
        .catch((err) => console.log(err));
    }, []);


    return (

        <div>

            <ScrollToTop />

            <div className="fondo"></div>

            <Container fluid className="contenedor-botines-jugadores">

                <div className="contenedor-titulo-plp">
                    <div className="banner"></div>
                    <Link to="/home"><img className="home" src= {require ("../Multimedia/home.png")} alt="" /></Link>
                    <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
                </div>

                <div className="container-input">
                    <input  type="search" className="form-control input-buscar" placeholder="player name" autoFocus onChange={handleChange} value={busqueda}/>
                </div>

                <div className="contenedor-cards">
                    {boots.length
                    ? busqueda && boots.map((boot) => <Item item={boot}/>)
                    : <div className="error-msg"><p>...NO PLAYER FOUND...</p></div>  
                    }    
                </div>

            </Container>


        </div>

       
     );
 };
 
 export default BootListByPlayer;