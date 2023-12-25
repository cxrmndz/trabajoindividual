import reservas from "../components/Reservas";
import {libros} from "../mocks/Datos";
import {Libro} from "../components/Libro";
import {OpcionesPedido} from "../components/OpcionesPedido";

export function Pedidos() {
    return (mostrarPedidos())

}

export function mostrarPedidos() {
    let resultado = []
    reservas.sort((a, b) => a[1] > b[1] ? 1 : -1).map((element) => {
        return resultado.push([libros.find(p => p.id === (element[0])), element[1]])
    })
    if (resultado.length === 0) {
        return (
            <div>
                <h3>No existen libros reservados</h3>
            </div>
        )
    } else {
        return (
            <div key={1}>
                <h3>Libros reservados:</h3>
                {resultado.map((element) => {
                        return (
                            <div key={element[0].id} className="pedido__item">
                                <Libro titulo={element[0].titulo} genero={element[0].genero} anio={element[0].anio}
                                       isbn={element[0].isbn}
                                       id={element[0].id} idAutor={element[0].idAutor} idImagen={element[0].idImagen}/>
                                <p>Res. hasta: {element[1]}</p>
                                <OpcionesPedido idLibro={element[0].id}/>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}