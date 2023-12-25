import '../styles/styles.css'

import {Menu} from "../components/Menu";
import {Buscador} from "../components/Buscador";
import {Nosotros} from "./Nosotros";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Error} from "./Error";
import {Detalle} from "../components/Detalle";
import {Pedidos} from "./Pedidos";
import {Footer} from "../components/Footer";
import {Modificar} from "../components/Modificar";

function Inicio() {
    return (

        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Buscador/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/pedidos" element={<Pedidos/>}/>
                <Route path="/detalle/:id" element={<Detalle/>}/>
                <Route path="/modificar/:id" element={<Modificar/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>


    );
}

export default Inicio;
