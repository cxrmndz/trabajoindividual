import {Regresar} from "../components/Regresar";

export function Error() {
    return (
        <>
            <Regresar/>
            <div className="error">
                <div className="error__item">
                    <h1><br/><br/>Oooooops!</h1>
                </div>
                <div className="error__item">
                    <p>Te hemos perdido! No sabemos que ha sucedido...</p>
                </div>
                <div className="error__item">
                    <p>Rápido! Vuelve al mundo de la lectura que miles de libros esperan por tí!</p>
                </div>
            </div>
        </>
    )
}