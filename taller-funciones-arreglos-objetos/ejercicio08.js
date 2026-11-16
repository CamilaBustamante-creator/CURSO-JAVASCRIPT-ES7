//EJERCICIO 08 | Clasificación de números
const numeros = [12, 7, 18, 3, 22, 15, 8, 11];
const esPar = (numero) => {
    return numero % 2 === 0;
};
const pares = [];
const impares = [];
for (const numero of numeros){
    if (esPar(numero)) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}
console.log("Números:", numeros);
console.log("Pares:", pares);
console.log("Impares:", impares);
