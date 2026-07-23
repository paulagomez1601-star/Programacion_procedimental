let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let Concepto = document.getElementById("concepto").value;
let Valor = document.getElementById("valor").value;

function ValidarInformacion() {

    if (ventas === "" || fecha === "" || ingresos === "" || egresos === "" || Concepto === "" || Valor === "") {
        swal.fire({
            icon: "info",
            title: "Oops...",
            text: "Completa todos los campos."
        });
    }
    else {
        if (!/[0-9]+/.test(ventas)) {
            swal.fire({
                icon: "info",
                title: "Oops...",
                text: "Las ventas deben contener solo números."
            });
        }
        else if (!/[0-9]+/.test(ingresos)) {
            swal.fire({
                icon: "info",
                title: "Oops...",
                text: "Los ingresos deben contener solo números."
            });
        }
        else if (!/[0-9]+/.test(egresos)) {
            swal.fire({
                icon: "info",
                title: "Oops...",
                text: "Los egresos deben contener solo números."
            });
        }
        else if (!/[a-zA-Z\s]+/.test(Concepto)) {
            swal.fire({
                icon: "info",
                title: "Oops...",
                text: "El concepto no puede contener números."
            });
        }
        else if (!/[0-9]+/.test(Valor)) {
            swal.fire({
                icon: "info",
                title: "Oops...",
                text: "El valor debe contener solo números."
            });
        }
        else {
            swal.fire({
                icon: "info",
                title: "¡Éxito!",
                text: "Información registrada correctamente."
            });
        }
    }
}

function ValidarInformación(mensaje) {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
    });
}

document.getElementById("guardar").addEventListener("click", function (event) {
    event.preventDefault();
    ValidarInformacion();
});