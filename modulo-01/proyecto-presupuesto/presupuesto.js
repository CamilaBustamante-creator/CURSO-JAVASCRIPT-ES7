const salario = 2500000;
const ingresosExtra = 500000;

//Validar que lso ingresos sean enteros y no negativos
function validarIngresos(ingreso, nombre) {
    if (!Number.isInteger(ingreso) || ingreso < 0) { //!Number.isInteger(Number(ingresoPrueba)) || Number(ingresoPrueba) < 0
        console.log(`Error: ${nombre} debe ser un número entero y no negativo.`);
        return false;
    }

    return true;
}

if (validarIngresos(salario, "Salario") && validarIngresos(ingresosExtra, "Ingresos extra")){

const totalSalario = salario + ingresosExtra;

const arriendo = 800000;
const servicios = 200000;
const transporte = 150000;
const alimentacion = 300000;
//Incorporar un gasto nuevo
const gastoNuevo = 100000;

const totalGastos = arriendo + servicios + transporte + alimentacion + gastoNuevo;
const saldoFinal = totalSalario - totalGastos;

//calcular saldo anual estimado
const saldoAnual = saldoFinal * 52;

//Alerta si los gastos superan el 80% de los ingresos
function evaluarGastos (totalGastos, totalSalario) {
    if (totalSalario === 0) {
        return "No se puede evaluar los gastos porque los ingresos son cero"
    }
    const porcentajeGastos = (totalGastos / totalSalario) * 100;
    if (porcentajeGastos > 80) {
        return `ALERTA: Los gastos representan el ${porcentajeGastos.toFixed(2)}% de los ingresos. Superan el límite del 80%.`;
    } else {
        return `Los gastos representan el ${porcentajeGastos.toFixed(2)}% de los ingresos. Están dentro del límite establecido.`;
    }
}

function evaluarPresupuesto (saldoFinal){
    if (saldoFinal > 0){
        return `El presupuesto es positivo. Puedes ahorrar o invertir`;
    } else if (saldoFinal === 0){
        return "El presupuesto es equilibrado. No hay saldo disponible";
    } else {
        return "El presupuesto es negativo. Debes reducir gastos o aumentar ingresos";
    }
}

//calcular el porcentaje de ahorro en relación con el total de ingresos
function calcularPorcentajeAhorro (saldoFinal, totalSalario){
    if (totalSalario === 0){
        return 0; //Evitar división por cero
    }
    const porcentajeAhorro = (saldoFinal / totalSalario) * 100;
    return porcentajeAhorro;
}

console.log("=== Presupuesto Semanal ===");
console.log(`Total de ingresos: $${totalSalario}`);
console.log(`Total de gastos: $${totalGastos}`);
console.log(evaluarGastos(totalGastos, totalSalario));
console.log(`Saldo final semanal: $${saldoFinal}`);
console.log(`Saldo anual estimado: $${saldoAnual}`);
console.log(evaluarPresupuesto(saldoFinal));

const porcentajeAhorro = calcularPorcentajeAhorro(saldoFinal, totalSalario);
console.log(`Porcentaje de ahorro: ${porcentajeAhorro.toFixed(2)}%`);

} else {
    console.log("No se puede calcular el presupuesto debido a que los ingresos no son validos");
}

//TAREA
//validar que los ingresos no sean negativos y que sean enteros
//incorporar un gasto adicional
//calcular el saldo anual estimado
//generar una alerta cuando los gastos superen el 80% de los ingresos

//NOTAS
//Number.isInteger(ingreso) es una función integrada del lenguaje que permite comprobar si un valor es un número entero.
//Number.isFinite(valor)
//Comprueba si el valor es un número finito válido, es decir, distinto de Infinity, -Infinity y NaN. No convierte cadenas de texto en números.
//Number.isNaN(valor)
//Comprueba si el valor es exactamente NaN (Not-a-Number).
//Number.isSafeInteger(valor)
//Comprueba si un valor es un entero que JavaScript puede representar de forma segura y exacta dentro de su rango de enteros seguros.
//El rango seguro va de -9007199254740991 a 9007199254740991