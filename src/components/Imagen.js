import {imagenes} from "../mocks/Datos";

export function Imagen(props) {
    let registroImagen = imagenes.find(p => p.id === (props.idImagen));
    return (
        <img src={registroImagen.imagenUrl} alt={registroImagen.alt}/>
    )
}