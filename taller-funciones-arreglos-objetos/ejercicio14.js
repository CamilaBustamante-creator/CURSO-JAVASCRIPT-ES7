//EJERCICIO 14 | Copia y modificación de arreglos
const productosOriginales = [
"Laptop", "Mouse", "Monitor", "Teclado"
];
const copiaProductos = [...productosOriginales];
copiaProductos.push("Audífonos");
console.log(copiaProductos);
copiaProductos.pop();
console.log("Copia de productos:");
console.log(copiaProductos);
console.log("Productos originales:");
console.log(productosOriginales);
console.log("Cantidad de productos originales:", productosOriginales.length);
const nuevosProductos = ["Impresora", "Cámara web"];
const todosLosProductos = [
    ...productosOriginales,
    ...nuevosProductos
];
console.log("Todos los productos:");
console.log(todosLosProductos);