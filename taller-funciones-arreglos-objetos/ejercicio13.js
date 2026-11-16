//EJERCICIO 13 | Desestructuración de objetos
const empleado = {
nombre: "Carlos Pérez",
cargo: "Desarrollador",
salario: 3500000,
ciudad: "Bogotá",
activo: true
};
const {nombre, cargo, salario} = empleado;
console.log(`Nombre: ${nombre}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salario: ${salario}`);
function mostrarEmpleado(empleado){
    const {nombre, cargo, salario} = empleado;
    return `El empleado ${nombre} trabaja como ${cargo} y tiene un salario de $${salario}.`;
}
const empleado2 = {
nombre: "Laura Gómez",
cargo: "Analista de software",
salario: 4200000,
ciudad: "Medellín",
activo: true
};
console.log(mostrarEmpleado(empleado));
console.log(mostrarEmpleado(empleado2));
//Reto adicional
function mostrarEmpleado2({ nombre, cargo, salario }) {
    return `El empleado ${nombre} trabaja como ${cargo} y tiene un salario de $${salario}.`;
}

console.log(mostrarEmpleado2(empleado));
console.log(mostrarEmpleado2(empleado2));