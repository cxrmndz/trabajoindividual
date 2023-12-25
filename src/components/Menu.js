import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import {Link} from "react-router-dom";


export function Menu() {

    const referencia = useRef();
    const mostrarMenu = ()=>{
        referencia.current.classList.toggle("menu__plegable");
    }
    return (
        <header>
            <div className="menu__logo">
                <img
                     src="https://idaip.org.mx/bibliotecadigital/wp-content/uploads/2023/02/cropped-logo-biblioteca-digital-01.png"
                     alt="logo"/>
            </div>
            <nav ref={referencia}>
                <Link to="/" onClick={mostrarMenu}>Inicio</Link>
                <Link to="/pedidos" onClick={mostrarMenu}>Ver Reservas</Link>
                <Link to="/nosotros" onClick={mostrarMenu}>Nosotros</Link>
                <Link to="/error" onClick={mostrarMenu}>Error</Link>
                <button className="menu__item" onClick={mostrarMenu}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="menu__item" onClick={mostrarMenu}>
                <FaBars/>
            </button>
        </header>
    );
}