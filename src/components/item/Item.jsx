import "./Item.scss";


const Item = ({item}) =>{

    return(
        <div className="card-botines" >

            <div className="jugador-box">
                <h4 className="nombre-jugador">{item.player}</h4>
                
                <h5 >{item.team.replace(/-/g, ' ')}</h5>
                <h5 >{item.position.replace(/-/g, ' ')}</h5>
                <h5 >{item.club}</h5>
            </div>
           
            <img className="botines-img" alt="" src={item.imagen} />

            <div className="botin-box">
                <h4 className="nombre-botin">{item.boot}</h4>

                <div className="skills">
                    <p>{item.skill1}</p>
                    <p>{item.skill2}</p>
                    <p>{item.skill3}</p>
                </div>

                <button>Ver colección</button>
                
            </div>

            <div className="fondo-botines"></div>
            
        </div>
    );
};

export default Item;