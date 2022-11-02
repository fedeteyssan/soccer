import "./Item.scss";


const Item = ({item}) =>{

    return(
        <div className="card-botines" >

            <p>{item.botin}</p>
           
            <img className="botines-img" alt="" src={item.imagen} />

            <div className="botines-box">
                <h3>{item.jugador}</h3>
                <p>{item.seleccion}</p>
                <p>{item.posicion}</p>
                <p>{item.club}</p>
            </div>
        </div>
    );
};

export default Item;