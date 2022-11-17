import "./ListadoBotinesJugador.scss";
import React, { useState, useEffect } from "react";
import { Container, Modal, Form, Button } from "react-bootstrap";
import baseBotines from "../baseBotines.json";
import Item from "../components/item/Item";
import ScrolltoTop from "../components/ScrollToTop";

const ListadoBotinesJugador = () => {

    const [botines, setBotines] = useState([]);

    const [tablaBotines, setTablaBotines]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const getbotines = (dataBase) => 
    new Promise((resolve, reject) => {
       
        if (dataBase) {
            resolve(dataBase);
        } else {
            reject("No se han encontrado productos");
        };
        
    });


    const handleChange = e =>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) =>{
        let resultadoBusqueda = tablaBotines.filter((elemento) => 
            elemento.jugador.toString().toLowerCase().normalize('NFD')
            .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
            .normalize().includes(terminoBusqueda.toLowerCase().trim())
        );
        setBotines(resultadoBusqueda);
       
    }
    
    useEffect(() => {
        getbotines(baseBotines)
        .then((result) => {
            setBotines(baseBotines);
            setTablaBotines(baseBotines);
        })
        .catch((err) => console.log(err));
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <div>

            <ScrolltoTop />

           

            <Container fluid className="contenedor-botines-jugadores">

               

                <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <Form.Control type="search" placeholder="nombre jugador" autoFocus onChange={handleChange} value={busqueda}/>
                    <Button variant="primary" onClick={handleClose}>Confirmar</Button>
                </Modal.Body>
                </Modal>

                <Button onClick={handleShow} className="mt-5">BUSCAR</Button>

                

                <div className="contenedor-cards">
                    {botines.length
                    ? busqueda && botines.map((botin) => <Item item={botin}/>)
                    : <div className="error-msg"><p>...ESTE JUGADOR NO FUE CONVOCADO...</p></div>  
                    }    
                </div>

            </Container>


        </div>

       
     );
 };
 
 export default ListadoBotinesJugador;