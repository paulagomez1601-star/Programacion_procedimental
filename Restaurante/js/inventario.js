let codigo = document.getElementById("codigo").value;
let Nombre_del_producto = document.getElementById("Nombre_del_producto").value;
let Cantidad = document.getElementById("Cantidad").value;
let Marca = document.getElementById("Marca").value;

function ValidarInformacion() {
    if (codigo === "" || Nombre_del_producto === "" || Cantidad === "" || Marca === "") {
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, complete todos los campos."
        });
    }
    else {
        if (codigo.length != 5 || !/[0-9]+/.test(codigo)) {
            Swal.fire({
                icon: "error",
                title: "Código inválido",
                text: "El código debe tener 5 dígitos."
            });
        }
        else if (!/[a-zA-Z\s]+/.test(Nombre_del_producto)) {
            Swal.fire({
                icon: "error",
                title: "Nombre de producto inválido",
                text: "El nombre del producto no puede contener números."
            });
        }
        else if (!/[0-9]+/.test(Cantidad)) {
            Swal.fire({
                icon: "error",
                title: "Cantidad inválida",
                text: "La cantidad debe contener solo números."
            });
        }
        else if (!/[a-zA-Z\s]+/.test(Marca)) {
            Swal.fire({
                icon: "error",
                title: "Marca inválida",
                text: "La marca no puede contener números."
            });
        }else {
            Swal.fire({
                icon: "success",
                title: "¡Éxito!",
                text: "Producto registrado correctamente."
            });
        }
    }
}

function ValidarInformación(mensaje) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: mensaje,
        footer: '<a href="#">¿Por qué tengo este problema?</a>'
    });
}

document.getElementById("guardar").onclick = ValidarInformacion;