// *** ENTREGA 1 *** //

// ARRAY VACIO DE INVENTARIO Y VARIABLE PARA LA MAXIMA CAPACIDAD
const inventario = [];
const capacidadMaxima = 5;

// FUNCION PARA AGREGAR PRODUCTO
function agregarProducto () {
  if (inventario.length < capacidadMaxima) {
    let nombreProducto = prompt("¿Que producto desea ingresar?").toLowerCase();

    while (nombreProducto.trim() === "") {
      nombreProducto = prompt("No ingreses espacios vacíos, Ingresa un nombre");
    }

    if (inventario.includes(nombreProducto)) {
      alert("El producto ya se encuentra, ingresa otro");
    } else {
      inventario.push(nombreProducto);
      alert("Producto agregado: " + nombreProducto);
    }
  } else {
    alert("El inventario está lleno, no se pueden agregar más productos.");
  }
}

// FUNCION PARA VENDER UN PRODUCTO
function venderProducto() {
    if (inventario.length > 0) {
        const productoAVender = prompt("Ingresa el nombre del producto que deseas vender:").toLowerCase();
        const indiceProducto = inventario.indexOf(productoAVender);
        if (indiceProducto !== -1) {
            const productoVendido = inventario.splice(indiceProducto, 1)[0];
            alert("Producto vendido: " + productoVendido);
        } else {
            alert("El producto no se encuentra en el inventario.");
        }
    } else {
        alert("El inventario está vacío, no se pueden vender productos.");
    }
}

// FUNCION PARA VER EL INVENTARIO
function verInventario() {
    const inventarioTexto = "Inventario Actual:\n" + inventario.join("\n");
    alert(inventarioTexto);
}

while (true) {
    const opcion = prompt("Selecciona una opción:\n1. Agregar Producto\n2. Vender Producto\n3. Ver inventario actual\n4. Salir");
    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            venderProducto();
            break;
        case "3":
            verInventario();
            break;    
        case "4":
            alert("Gracias por usar el simulador de inventario.");
            exit();
        default:
            alert("Opción no válida, por favor selecciona una opción válida.");
    }
}