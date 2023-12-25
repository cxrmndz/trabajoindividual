import {autores} from "../mocks/Datos";

export function Autor(props) {
    let registroAutor = autores.find(p => p.id === (props.idAutor));
    return (
        <> {registroAutor.nombre} {registroAutor.apellido}</>
    )
}