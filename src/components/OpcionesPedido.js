import {mostralAlerta, mostrarConfirmacion} from "./Alertas";
import {eliminarLibro} from "./Reservas";
import {useNavigate} from "react-router-dom";
import {FaEdit, FaTrash} from "react-icons/fa";
export function OpcionesPedido(props) {

    const navegar = useNavigate();

    const eliminarLibroPedido = () => {
        let respuesta = mostrarConfirmacion("Alerta!", "Realmente desea eliminar el libro de las Reservas?")
        respuesta.then(resp => {
            if(resp){
                eliminarLibro(props.idLibro)
                mostralAlerta("Listo!", "Se ha eliminado el libro de las reservas!", "success", "Aceptar")
                navegar('/', { replace: false });
            }
        })
    }

    const modificarLibroPedido = () =>{
        navegar('/modificar/'+props.idLibro, { replace: true });
    }

    return (
        <div className="pedido__opciones">
            <div className="pedido__opciones__item">
                <button className="btn btn-secondary" onClick={() => modificarLibroPedido()}>
                    <FaEdit/>
                </button>
            </div>
            <div className="pedido__opciones__item">
                <button className="btn btn-danger" onClick={() => eliminarLibroPedido()}>
                    <FaTrash/>
                </button>
            </div>
        </div>
    )
}
