let codigo = document.getElementById("codigo").value;
let Nombre_del_producto = document.getElementById("Nombre_del_producto").value;
let Cantidad = document.getElementById("Cantidad").value;
let Marca = document.getElementById("Marca").value;
let Precio = document.getElementById("Precio").value;

function ValidarInformacion() {
    if (codigo === "" || Nombre_del_producto === "" || Cantidad === "" || Marca === "" || Precio === "") {
        console.log("Completa todos los campos.");
    }
    else {
        if (codigo.length != 5 || !/[0-9]+/.test(codigo)) {
            console.log("El código debe tener 5 dígitos.");
        }
        else if (!/[a-zA-Z\s]+/.test(Nombre_del_producto)) {
            console.log("El nombre del producto no puede contener números.");
        }
        else if (!/[0-9]+/.test(Cantidad)) {
            console.log("La cantidad debe contener solo números.");
        }
        else if (!/[a-zA-Z\s]+/.test(Marca)) {
            console.log("La marca no puede contener números.");
        }
        else if (!/[0-9]+/.test(Precio)) {
            console.log("El precio debe contener solo números.");
        }
        else {
            console.log("Producto registrado correctamente.");
        }
    }
}


document.getElementById("guardar").onclick = ValidarInformacion;