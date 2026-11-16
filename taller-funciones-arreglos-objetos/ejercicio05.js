//EJERCICIO 05 | Calculadora de salario
const PORCENTAJE_DEDUCCION = 0.08;
function calcularSalarioNeto(salarioBruto){
    let porcentajeDeduccion = salarioBruto * PORCENTAJE_DEDUCCION;
    let salarioNeto = salarioBruto - porcentajeDeduccion;
    return `El salario bruto es: ${salarioBruto}, la deducción es: ${porcentajeDeduccion} y el salario neto es: ${salarioNeto}`;
}
console.log(calcularSalarioNeto(2000000));
//Reto adicional
function calcularSalarioNeto2(salarioBruto, porcentajeDeduccion1){
    let porcentajeDeduccion2 = salarioBruto * porcentajeDeduccion1 / 100;
    let salarioNeto = salarioBruto - porcentajeDeduccion2;
    return `El salario bruto es: ${salarioBruto}, la deducción es: ${porcentajeDeduccion2} y el salario neto es: ${salarioNeto}`;
}
console.log(calcularSalarioNeto2(2000000, 8));
