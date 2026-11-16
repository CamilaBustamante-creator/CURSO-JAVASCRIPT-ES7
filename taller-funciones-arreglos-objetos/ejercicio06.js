//EJERCICIO 06 | Gestión de lista de aprendices
const aprendices = [
"Ana", "Carlos", "María", "Pedro"
];
for (let i = 0; i < aprendices.length; i++) {
    console.log(aprendices[i]);
}
for (const aprendiz of aprendices) {
    console.log(aprendiz);
}
aprendices.push("José", "Laura");
console.log(aprendices);
aprendices.pop();
console.log(aprendices);
function mostrarAprendices(lista){
    console.log(`El aprendiz número 1 es: ${aprendices[0]}`);
    console.log(`El aprendiz número 2 es: ${aprendices[1]}`);
    console.log(`El aprendiz número 3 es: ${aprendices[2]}`);
    console.log(`El aprendiz número 4 es: ${aprendices[3]}`);
    console.log(`El aprendiz número 5 es: ${aprendices[4]}`);
    console.log(`El número total de aprendices es: ${aprendices.length}`);
    return;
}
mostrarAprendices(aprendices);
for (let i = 0; i < aprendices.length; i++) {
    console.log(`Posición: ${i} | Aprendiz: ${aprendices[i]}`);
}
