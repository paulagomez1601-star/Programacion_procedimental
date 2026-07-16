let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let Concepto = document.getElementById("Concepto").value;
let Valor = document.getElementById("Valor").value;

function ValidarInformacion() {

    if (ventas === "" || fecha === "" || ingresos === "" || egresos === "" || Concepto === "" || Valor === "") {
        console.log("Completa todos los campos.");
    }
    else {
        if (!/[0-9]+/.test(ventas)) {
            console.log("Las ventas deben contener solo números.");
        }
        else if (!/[0-9]+/.test(ingresos)) {
            console.log("Los ingresos deben contener solo números.");
        }
        else if (!/[0-9]+/.test(egresos)) {
            console.log("Los egresos deben contener solo números.");
        }
        else if (!/[a-zA-Z\s]+/.test(Concepto)) {
            console.log("El concepto no puede contener números.");
        }
        else if (!/[0-9]+/.test(Valor)) {
            console.log("El valor debe contener solo números.");
        }
        else {
            console.log("Información registrada correctamente.");
        }
    }
}

document.getElementById("guardar").onclick = ValidarInformacion;