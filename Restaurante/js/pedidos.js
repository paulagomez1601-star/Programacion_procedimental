
let Producto = document.getElementById("Producto").value;
let Direccion = document.getElementById("Direccion").value;
let Nombre_usuario = document.getElementById("Nombre_usuario").value;
let Cantidad = document.getElementById("Cantidad").value;
let Modo_de_pago = document.getElementById("Modo_de_pago").value;
let Telefono = document.getElementById("Telefono").value;

function ValidarInformacion() {
    if (Producto === "" || Direccion === "" || Nombre_usuario === "" || Cantidad === "" || Modo_de_pago === "" || Telefono === "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Completa todos los campos."
        });
    }
    else {
        if (!/[a-zA-Z\s]+/.test(Producto)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El nombre del producto no puede contener números."
            });

        }
        else if (!/[a-zA-Z\s]+/.test(Direccion)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "La dirección no puede contener números."
            });

        }
        else if (!/[a-zA-Z\s]+/.test(Nombre_usuario)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El nombre del usuario no puede contener números."
            });
   
        }
        else if (!/[0-9]+/.test(Cantidad)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "La cantidad debe contener solo números."
            });

        }
        else if (!/[a-zA-Z\s]+/.test(Modo_de_pago)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El modo de pago no puede contener números."
            });

        }
        else if (Telefono.length != 10 || !/[0-9]+/.test(Telefono)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El número de teléfono debe tener 10 dígitos."
            });

        }
        else {
            Swal.fire({
                icon: "warning",
                title: "Correcto",
                text: "Información registrada correctamente."
            });
        }
    }
}

function ValidarInformación(mensaje) {
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
}).then((result) => {
    if (result.isConfirmed) Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
    });
});
}

document.getElementById("guardar").onclick = ValidarInformacion;