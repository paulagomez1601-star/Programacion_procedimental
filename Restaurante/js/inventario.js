let codigo = document.getElementById("codigo").value;
let Nombre_del_producto = document.getElementById("Nombre_del_producto").value;
let Cantidad = document.getElementById("Cantidad").value;
let Marca = document.getElementById("Marca").value;
let Precio = document.getElementById("Precio").value;

function validarProducto() {
    if (codigo === "" || Nombre_del_producto === "" || Cantidad === "" || Marca === "" || Precio === "") {
        console.log("Todos los campos de producto son obligatorios. Por favor, completa el formulario.");
    } 
    else {
        if (!soloNumeros.test(codigo)) {
            console.log("El campo Código no puede contener letras ni caracteres especiales.");
        }
        else if (!soloNumeros.test(Cantidad)) {
            console.log("El campo Cantidad no puede contener letras.");
        }
        else if (!soloNumeros.test(Precio)) {
            console.log("El campo Precio no puede contener letras.");
        }
    }
}