//EJERCICIO 11 | Catálogo de productos
const productos = [
{ nombre: "Laptop", precio: 2500000, stock: 5 },
{ nombre: "Mouse", precio: 45000, stock: 20 },
{ nombre: "Teclado", precio: 120000, stock: 10 },
{ nombre: "Monitor", precio: 850000, stock: 3 }
];
function mostrarProductos(productos){
    for (const producto of productos){
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: ${producto.precio}`);
        console.log(`Stock: ${producto.stock}`);
    }
}
function calcularValorInventario(productos){
    let total = 0;
    for (const producto of productos){
        let subtotal = producto.precio * producto.stock;
        total += subtotal;
    }
    return total;
}
function buscarProducto(productos, nombreBuscado){
    for (const producto of productos) {
        if (producto.nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
            return producto;
        }
    }
    return null;
}
mostrarProductos(productos);
console.log(`Valor total del inventario: ${calcularValorInventario(productos)}`);
const resultadoBusqueda = buscarProducto(productos, "Laptop");

if (resultadoBusqueda !== null) {
    console.log("Producto encontrado:", resultadoBusqueda);
} else {
    console.log("El producto no existe en el catalogo.");
}