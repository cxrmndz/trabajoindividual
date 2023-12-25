import {useParams} from "react-router-dom";
import {libros} from "../mocks/Datos";
import {Imagen} from "./Imagen";
import {Reservas} from "./Reservas";
import {Autor} from "./Autor";
import {Regresar} from "./Regresar";

export function Detalle() {
    const {id} = useParams()

    let registroAutor = libros.find(p => p.id === (id))

    return (
        <>
            <Regresar/>
            <div className="detalle">
                <div className="detalle__cabecera">
                    <div className="detalle__cabecera__imagen">
                        <Imagen idImagen={registroAutor.idImagen}/>
                    </div>
                    <h2>{registroAutor.titulo}</h2>
                    <div className="detalle__cabecera__informacion">
                        <p>Autor: <Autor idAutor={registroAutor.idAutor}/><br/>
                            Género: {registroAutor.genero}<br/>
                            Año de publicación: {registroAutor.anio}
                        </p>
                    </div>
                    <Reservas idLibro={registroAutor.id}/>
                </div>

                <div className="detalle__descripcion">
                    <h3>Descripción</h3>
                    <p>{registroAutor.descripcion}</p>
                </div>
            </div>
        </>
    )
}

