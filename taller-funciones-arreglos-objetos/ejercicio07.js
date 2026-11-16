//EJERCICIO 07 | Suma de precios de productos
const precios = [15000, 25000, 30000, 12000, 18000];
function calcularTotal(precios){
    let valorTotal = 0;
    for (const precio of precios){
        valorTotal += precio;
    }
    return valorTotal;
}
function calcularPromedio(precios){
    const total = calcularTotal(precios)
    let valorPromediado = total / precios.length;
    return valorPromediado;
}
console.log(`Total de productos: $${calcularTotal(precios)}`);
console.log(`Precio promedio: $${calcularPromedio(precios)}`);
