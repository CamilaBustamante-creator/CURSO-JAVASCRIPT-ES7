//EJERCICIO 09 | Sistema de inventario básico
const inventario = [15, 8, 0, 23, 4, 12, 0];
function contarAgotados(inventario){
    let agotados = 0;
    for (const unidades of inventario){
        if (unidades == 0){
            agotados ++;
        }
    }
    return agotados;
}
function contarBajoStock(inventario){
    let bajoStock = 0;
    for (const unidades of inventario){
        if (unidades > 0 && unidades < 5){
            bajoStock ++;
        }
    }
    return bajoStock;
}
function contarUnidades(inventario){
    let total = 0;
    for (const unidades of inventario){
        total += unidades;
    }
    return total;
}
function encontrarMayor(inventario) {
    let mayor = 0;

    for (const unidades of inventario) {
        if (unidades > mayor) {
            mayor = unidades;
        }
    }

    return mayor;
}
console.log(`Productos agotados: ${contarAgotados(inventario)}`);
console.log(`Productos de bajo stock: ${contarBajoStock(inventario)}`);
console.log(`Total de unidades: ${contarUnidades(inventario)}`);
console.log(`Cantidad más alta: ${encontrarMayor(inventario)}`);
