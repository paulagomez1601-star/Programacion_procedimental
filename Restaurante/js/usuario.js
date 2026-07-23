let nombre = document.getElementById("Nombre").value;
let apellido = document.getElementById("Apellido").value;
let tipoDocumento = document.getElementById("Tipo_de_Documento").value;
let numeroDocumento = document.getElementById("Numero_de_Documento").value;
let email = document.getElementById("Email").value;
let masculino = document.getElementById("Masculino").checked;
let femenino = document.getElementById("Femenino").checked;
let otro = document.getElementById("Otro").checked;
let contrasena = document.getElementById("Contrasena").value;
let Telefono = document.getElementById("Telefono").value;


function ValidarInformacion() {
    if (nombre === "" || apellido === "" || tipoDocumento === "" || numeroDocumento === "" || masculino === "" || femenino === "" || otro === "" || email === "" || contrasena === "" || telefono === "") {
        swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Usuario registrado correctamente."
        });
    }
    else {
        if (nombre != /[a-zA-Z]+/) {
            swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
        else if (apellido != /[a-zA-Z]+/) {
            swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
        
        else if (numeroDocumento.length != 10 || numeroDocumento != /[0-9]+/) {
            swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
        else if (telefono.length != 10 || telefono != /[0-9]+/) {
            swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
        else if (!email.includes("@") || !email.includes(".")) {
            swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
        else if (contrasena.length < 8) {
            swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
        else if (!masculino && !femenino && !otro) {
            swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
        else {
            Swal.fire({
                icon: "success",
                title: "Correcto",
                text: "Usuario registrado correctamente."
            });
        }
    }
}

function ValidarInformación(mensaje) {
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
}

document.getElementById("guardar").onclick = ValidarInformacion;