const fs = require('fs');

// Función para recibir datos de la terminal de forma síncrona
function leerEntrada(mensaje) {
    process.stdout.write(mensaje);

    let entrada = "";
    const buffer = Buffer.alloc(1);

    while (true) {
        const bytesLeidos = fs.readSync(0, buffer, 0, 1, null);

        if (bytesLeidos === 0 || buffer[0] === 10) {
            break;
        }

        entrada += buffer.toString();
    }

    return entrada.trim();
}

//Conversiones
function convertirCelsius (valorValidado){
    let fahrenheit = (valorValidado * 9 / 5) +32;
    return fahrenheit;
}

function convertirFahrenheit (valorValidado){
    let celsius = (valorValidado - 32) * 5 / 9;
    return celsius;
}

function convertirMetros (valorValidado){
    if (valorValidado < 0) {
    console.log("Error: la longitud no puede ser negativa.");
    return;
}
    let kilometros = valorValidado / 1000;
    return kilometros;
}

function convertirKilometros (valorValidado){
    if (valorValidado < 0) {
    console.log("Error: la longitud no puede ser negativa.");
    return;
}
    let metros = valorValidado * 1000;
    return metros;
}

let respuesta = "no";

while (respuesta !== "si") {

console.log("=== Opciones ===");
console.log("Opción 1: Convertir Celsius a Fahrenheit");
console.log("Opción 2: Convertir Fahrenheit a Celsius");
console.log("Opción 3: Convertir Metros a Kilómetros");
console.log("Opción 4: Convertir Kilómetros a Metros");
console.log("Opción 5: Salir");

let opcionInicial = leerEntrada("Ingresa la opción: ");

    if (opcionInicial === "") {
        console.log("Error: el campo no puede estar vacío.");
        continue;
    }

    let opcion = Number(opcionInicial);

    if (!Number.isFinite(opcion) || !Number.isInteger(opcion)) {
        console.log("Error: debes ingresar una opción numérica válida.");
        continue;
    }

    if (opcion === 5) {
        console.log("¡Gracias por utilizar el programa!");
        break;
    }

    let valorInicial = leerEntrada("Ingresa el valor a convertir: ");

    if (valorInicial === "") {
        console.log("Error: el campo no puede estar vacío.");
        continue;
    }

    let valorValidado = Number(valorInicial);

    if (!Number.isFinite(valorValidado)) {
        console.log("Error: debes ingresar un número finito.");
        continue;
    }

    let resultado;

    switch (opcion) {
    case 1:
        resultado = convertirCelsius(valorValidado);
        console.log("Convertir Celsius a Fahrenheit");
        console.log(`${valorValidado} °C = ${resultado} °F`);
        break;

    case 2:
        resultado = convertirFahrenheit(valorValidado);
        console.log("Convertir Fahrenheit a Celsius");
        console.log(`${valorValidado} °F = ${resultado} °C`);
        break;

    case 3:
        resultado = convertirMetros(valorValidado);
        console.log("Convertir Metros a Kilómetros");
        console.log(`${valorValidado} metros = ${resultado} kilómetros`);
        break;

    case 4:
        resultado = convertirKilometros(valorValidado);
        console.log("Convertir Kilómetros a Metros");
        console.log(`${valorValidado} kilómetros = ${resultado} metros`);
        break;
    default:
        console.log("Opción no valida");
    }

respuesta = leerEntrada("¿Desea salir? (si/no): ").toLowerCase();

while (respuesta !== "si" && respuesta !== "no") {
        console.log("Respuesta no válida. Escriba si o no.");
        respuesta = leerEntrada("¿Desea salir? (si/no): ").toLowerCase();
    }
}