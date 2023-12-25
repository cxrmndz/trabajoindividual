import React, {useState, useEffect} from 'react'
import {autores, libros} from "../mocks/Datos";
import {Libro} from "./Libro";

export function Buscador() {

    const [libro, setLibros] = useState([]);
    const [autor, setAutores] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const mostrarDatos = () => {
        setLibros(libros)
    }

    const buscar = (e) => {
        setBusqueda(e.target.value)
    }

    let results = []

    /*Busquedas por */
    let resultsFilter = !busqueda ? libro :
            /*titulo*/              libro.filter((dato) => dato.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase()))
            /*genero*/      .concat(libro.filter((dato) => dato.genero.toLowerCase().includes(busqueda.toLocaleLowerCase())))
            /*isbn*/        .concat(libro.filter((dato) => dato.isbn.toLowerCase().includes(busqueda.toLocaleLowerCase())))
            /*descripcion*/ .concat(libro.filter((dato) => dato.descripcion.toLowerCase().includes(busqueda.toLocaleLowerCase())))
            /*anio*/        .concat(libro.filter((dato) => dato.anio.toLowerCase().includes(busqueda.toLocaleLowerCase())))

    /*autor*/
    const resultsAutor = !busqueda ? autor : autor.filter((dato) => (dato.nombre + ' ' + dato.apellido).toLowerCase().includes(busqueda.toLocaleLowerCase()))
    resultsAutor.map((resp) => {
        return (
            results = results.concat(libro.filter((dato) => dato.idAutor === (resp.id)))
        )
    })

    resultsFilter = removeDuplicates(resultsFilter)
    results = results.concat(resultsFilter)

    results = removeDuplicates(results)

    function removeDuplicates(inArray) {
        var arr = inArray.concat()
        for (var i = 0; i < arr.length; ++i) {
            for (var j = i + 1; j < arr.length; ++j) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                }
            }
        }
        return arr;
    }
     /*hook personalizado para busqueda de libros*/
    useEffect(() => {
        mostrarDatos()
        setAutores(autores)
    }, [])

    return (
        <>
            <input value={busqueda} onChange={buscar} type="text" placeholder="Buscar..." className="buscador"/>
            <div key={results.id} className="listado">
                {results.sort((a, b) => a.titulo > b.titulo ? 1 : -1).map((element) => {
                        return (
                            <div key={element.id} className="listado__item">
                                <Libro titulo={element.titulo} genero={element.genero} anio={element.anio}
                                       isbn={element.isbn}
                                       id={element.id} idAutor={element.idAutor} idImagen={element.idImagen}/>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    )
}