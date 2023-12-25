import {Imagen} from "./Imagen";
import {Autor} from "./Autor";
import {Link} from "react-router-dom";

export function Libro(props) {
    return (
        <>
            <Link to={`/detalle/${props.id}`}>
                <div className="listado__item__imagen">
                    <Imagen idImagen={props.idImagen}/>
                </div>
            </Link>
            <p>
                <Autor idAutor={props.idAutor}/><br/>
                <span>{props.genero}</span><br/>
                {props.anio}<br/>
                ISBN: {props.isbn}</p>
            <p hidden>{props.id}</p>
        </>
    )
}