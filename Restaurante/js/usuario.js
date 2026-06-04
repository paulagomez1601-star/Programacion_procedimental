let fechaNacimiento = document.getElementById("fechaNacimiento").value;
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let tipoDocumento = document.getElementById("tipoDocumento").value;
let numeroDocumento = document.getElementById("numeroDocumento").value;
let telefono = document.getElementById("telefono").value;
let email = document.getElementById("email").value;
let masculino = document.querySelector("#masculino").value;
let femenino = document.querySelector("#femenino").value;
let otro = document.querySelector("#otro").value;
let cliente = document.querySelector("#cliente").value;
let empleado = document.querySelector("#empleado").value;
let administrador = document.querySelector("#administrador").value;
let contrasena = document.getElementById("contrasena").value;

function Nombre() {
    if (nombre === "" || apellido === "" || fechaNacimiento === "" || tipoDocumento === "" || numeroDocumento === "" || telefono === "" || email === "" || contrasena === "") {
        console.log("Ingresa tu nombre.");
    }
    else {
        if (nombre != /[a-zA-Z]+/) {
            console.log("El nombre no puede contener números.");
        }
        else if (apellido != /[a-zA-Z]+/) {
            console.log("El apellido no puede contener números.");
        }
        else if (numeroDocumento.length != 10 || numeroDocumento != /[0-9]+/) {
            console.log("El número de documento debe tener 10 dígitos.");
        }
        else if (telefono.length != 10 || telefono != /[0-9]+/) {
            console.log("El número de teléfono debe tener 10 dígitos.");
        }
        else if (!email.includes("@") || !email.includes(".")) {
            console.log("El correo electrónico no es válido.");
        }
    }
}