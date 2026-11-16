//EJERCICIO 02 | Calculadora de descuentos
function calcularDescuento(precio, porcentajeDescuento){
    if (porcentajeDescuento < 0 || porcentajeDescuento > 100){
        return `El porcentaje de descuento debe estar entre 0 y 100`;
    }
    let descuento = precio * porcentajeDescuento / 100;
    let precioFinal = precio - descuento;
    return `El precio final es ${precioFinal}`;
}
console.log(calcularDescuento(250000, 20));
