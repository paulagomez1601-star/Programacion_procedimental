let ventas = document.getElementById("ventas").value; 
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value; 
let egresos = document.getElementById("egresos").value;
let Concepto = document.getElementById("Concepto").value;
let Valor = document.getElementById("Valor").value;

function ValidarInformacion() {
    if (ventas === "" || fecha === "" || ingresos === "" || egresos === "" || Concepto === "" || Valor === "") {
        console.log("Todos los campos son obligatorios. Por favor, completa el formulario.");
    } 
    else {
        if (!soloNumeros.test(ventas)) {
            console.log("El campo Ventas no puede contener letras ni caracteres especiales.");
        }
        else if (!soloNumeros.test(ingresos)) {
            console.log("El campo Ingresos no puede contener letras.");
        }
        else if (!soloNumeros.test(egresos)) {
            console.log("El campo Egresos no puede contener letras.");
        }
        else if (!soloNumeros.test(Valor)) {
            console.log("El campo Valor no puede contener letras.");
        }
    }
}
document.getElementById("guardar").onclick = ValidarInformacion;