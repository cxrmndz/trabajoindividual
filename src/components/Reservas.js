import {useState} from "react";
import {mostralAlerta, mostrarConfirmacion} from "./Alertas";
import {FaCheck} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

let reservas = []

export function Reservas(props) {

    const [fhasta, setFhasta] = useState("")
    const navegar = useNavigate();

    const agregarLibro = (libro) => {

        let item = reservas.find(p => p[0] === (libro));
        if (item === undefined) {
            let item = [libro, fhasta]
            reservas.push(item)
            mostralAlerta("Listo!", "Libro guardado en las reservas", "success", "Aceptar")
            if(props.modificar){
                navegar('/pedidos', { replace: true });
            }
        } else {
            if (props.modificar) {
                let respuesta = mostrarConfirmacion("Alerta!", "Realmente desea modificar la fecha de reserva?")
                respuesta.then(respuesta => {
                    if (respuesta) {
                        eliminarLibro(props.idLibro)
                        agregarLibro(props.idLibro)
                    }
                })
            } else {
                mostralAlerta("Error!", 'El libro ya se encuentra reservado. \nSi desea modificarlo, ingrese en la opción "Ver Reservas" del menú principal', "error", "Aceptar")
            }
        }
    }

    const formatear = f => {
        const anio = f.getFullYear();
        const mes = ("0" + (f.getMonth() + 1)).substr(-2);
        const dia = ("0" + f.getDate()).substr(-2);
        return `${anio}-${mes}-${dia}`
    }
    const fechaInicial = formatear(new Date())
    const setFechaReserva = (e) => {

        setFhasta(e.target.value)

    }

    if (!fhasta) {
        if (props.modificar) {
            let fechaReserva = reservas.find(p => p[0] === (props.idLibro))[1]
            setFhasta(fechaReserva)
        } else {
            setFhasta(fechaInicial)
        }
    }

    return (
        <div className="detalle__cabecera__reserva">
            <label className="form-label">Reservar hasta: </label>
            <input id="fechaHasta" type="date" className="form-control" value={fhasta} onChange={setFechaReserva}
                   min={fechaInicial}/>
            <br/>
            <button className="btn btn-secondary" onClick={() => agregarLibro(props.idLibro)}>
                <FaCheck/>
            </button>
        </div>
    )
}

export const eliminarLibro = (idLibro) => {
    const indice = reservas.findIndex((libro) => {
        return libro[0] === idLibro
    })
    reservas.splice(indice, 1)
}

export default reservas