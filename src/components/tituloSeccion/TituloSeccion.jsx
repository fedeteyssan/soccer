import "../tituloSeccion/TituloSeccion.scss";
import Arrow1 from "../../Multimedia/arrow1.png";


const TituloSeccion = (props) => {

    return (
        <div className={props.className}>
            <div className="arrows">
                <img src={Arrow1} alt="" className="arrow arrow1" />
                <img src={Arrow1} alt="" className="arrow arrow2" />
            </div>
            <h2>{props.text}</h2>
        </div>
    )
}

export default TituloSeccion;