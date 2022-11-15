import "./CardSeleccion.scss";

const CardSeleccion = (props) =>{

    return (
        <div className="card-seleccion">
            <h4 className="titulo-seleccion">{props.text}</h4>
            <img src={props.img} className="d-block " alt="..." />
        </div>
    )
}
export default CardSeleccion;