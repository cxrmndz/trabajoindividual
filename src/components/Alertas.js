import swal from "sweetalert";

export function mostralAlerta(titulo, texto, icono, boton) {
    swal({
        title: titulo,
        text: texto,
        icon: icono,
        button: boton
    })
}

export function mostrarConfirmacion(titulo, texto) {
    return swal({
        title: titulo,
        text: texto,
        icon: "warning",
        buttons: ['No', 'Si']
    })

}


