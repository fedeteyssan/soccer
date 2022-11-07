import "./Item.scss";


const Item = ({item}) =>{

    return(
        <div className="card-botines" >

            <div className="jugador-box">
                <h3 className="nombre-jugador">{item.jugador}</h3>
                
                <h5 >{item.seleccion}</h5>
                <h5 >{item.posicion}</h5>
                <h5 >{item.club}</h5>
            </div>
           
            <img className="botines-img" alt="" src={item.imagen} />

            <div className="botin-box">
                <h3 className="nombre-botin">{item.botin}</h3>

                <div className="skills">
                    <p>Skill 1</p>
                    <p>Skill 2</p>
                    <p>Skill 3</p>
                </div>

                <button>Ver colección</button>
                
            </div>

            <div className="fondo-botines"></div>
            
        </div>
    );
};

export default Item;