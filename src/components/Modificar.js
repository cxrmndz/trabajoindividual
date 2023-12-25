import {useParams} from "react-router-dom";
import {libros} from "../mocks/Datos";
import {Regresar} from "./Regresar";
import {Imagen} from "./Imagen";
import {Autor} from "./Autor";
import {Reservas} from "./Reservas";

export function Modificar() {
    const {id} = useParams()

    let registroLibro = libros.find(p => p.id === (id))

    return (
        <>
            <Regresar/>
            <div className="detalle">
                <div className="detalle__cabecera">
                    <div className="detalle__cabecera__imagen">
                        <Imagen idImagen={registroLibro.idImagen}/>
                    </div>
                    <h2>{registroLibro.titulo}</h2>
                    <div className="detalle__cabecera__informacion">
                        <p>Autor: <Autor idAutor={registroLibro.idAutor}/><br/>
                            Género: {registroLibro.genero}<br/>
                            Año de publicación: {registroLibro.anio}
                        </p>
                    </div>
                    <Reservas idLibro={registroLibro.id} modificar = {true}/>
                </div>

                <div className="detalle__descripcion">
                    <h3>Descripción</h3>
                    <p>{registroLibro.descripcion}</p>
                </div>
            </div>
        </>
    )
}