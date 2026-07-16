let Producto = document.getElementById("Producto").value;
let Direccion = document.getElementById("Direccion").value;
let Nombre_usuario = document.getElementById("Nombre_usuario").value;
let Cantidad = document.getElementById("Cantidad").value;
let Modo_de_pago = document.getElementById("Modo_de_pago").value;
let Telefono = document.getElementById("Telefono").value;

function validarPedido() {
    if (Producto === "" || Direccion === "" || Nombre_usuario === "" || Cantidad === "" || Modo_de_pago === "" || Telefono === "") {
        console.log("Todos los campos son obligatorios. Por favor, completa el formulario.");
    } 
    else {
        if (!soloNumeros.test(Cantidad)) {
            console.log("El campo Cantidad no puede contener letras.");
        }
        else if (!soloNumeros.test(Telefono)) {
            console.log("El campo Teléfono no puede contener letras.");
        }
    }
}