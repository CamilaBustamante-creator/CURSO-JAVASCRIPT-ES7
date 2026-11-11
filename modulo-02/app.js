//Función con parámetros
function saludarAprendiz(nombre) {
    return `Hola, ${nombre}! Bienvenido al curso de JavaScript.`;
}
console.log(saludarAprendiz("Maria"));

function saludarAprendiz2(nombre) {
    console.log(`Hola, ${nombre}! Bienvenido al curso de JavaScript.`);
}
saludarAprendiz2("Carlos");

function sumar(num1, num2) {
    return num1 + num2;
}
//console.log(`La suma de 5 y 3 es ${sumar(5, 3)}`); //Llamada a la función
const resultadoSuma = sumar(5, 3);
console.log(`El resultado de la suma es: ${resultadoSuma}`);

//Expresiones de función
const dividir = function (num1, num2) {
    if (num2 === 0) {
        return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
}
console.log(`El resultyado de la división es: ${dividir(10, 2)}`); //Llamada a la función

//Arrow function
const multiplicar = (num1, num2) => num1 * num2;
console.log(`El resultado de la multiplicación es: ${multiplicar(4, 5)}`); //Llamada a la función

const impuesto = 0.19;
function calcularPrecioConImpuesto(precio){
    const valorImpuesto = precio * impuesto;
    return precio + valorImpuesto;
}
console.log(`El precio con impuesto es: ${calcularPrecioConImpuesto(100)}`);
//console.log(valorImpuesto) //Error porque la variable sólo existe dentro de la función

//Ejercicios

//1. Calcular área rectangulo (base, altura)
const calcularArea = (base, altura) => base * altura
console.log(`El área del réctangulo es: ${calcularArea(20, 15)}`);

//2. Preguntar si un aprendiz es mayor de edad (edad)

function validarMayoriaEdad(edad){
    if (edad >= 18) {
        return `El aprendiz es mayor de edad`;
    } else {
        return `El aprendiz no es mayor de edad`
    }
}
console.log(validarMayoriaEdad(15));

//3. Convertir celsius a fahrenheit (celsius)

function convertirCelsius (valor){
    let fahrenheit = (valor * 9 / 5) +32;
    return `${valor}°C = ${fahrenheit}°F`;
}
console.log(convertirCelsius(80));

//4. Calcular descuento de un producto (precio, porcentaje)

let precioFinal;
function calcularDescuento (precio, porcentaje) {
    let descuento = precio * porcentaje / 100;
    precioFinal = precio - descuento;
    return `El descuento del producto es: ${descuento}`;
}
console.log(calcularDescuento(80000, 65));
console.log(`El precio final del producto es: ${precioFinal}`);

//5. Preguntar si un número es par (numero)

function validarNumeroPar(numero) {
    if (numero % 2 == 0 ) {
        return `${numero} es un número par`;
    } else {
        return `${numero} no es un número par`;
    }
}
console.log(validarNumeroPar(524));

//Arrays
const calificaciones = [85, 90, 78, 92, 88];
console.log(`La primera calificación es: ${calificaciones[0]}`); //posicion 1
console.log(`La segunda calificación es: ${calificaciones[1]}`);
console.log(`La tercera calificación es: ${calificaciones[2]}`);
console.log(`La cuarta calificación es: ${calificaciones[3]}`);
console.log(`La quinta calificación es: ${calificaciones[4]}`);
console.log(`La última calificación es: ${calificaciones[calificaciones.length -1]}`); //Accediendo al último elemento de la lista

//Recorrer arreglos
const precios = [1000, 2000, 3000, 4000, 5000];
for (let i = 0; i < precios.length; i++) { //precios.length cuenta cuantos elementos hay en el array
    console.log(precios[i]);
}

for (const precio of precios) {
    console.log(precio);
}

const productos = ["Laptop", "Telefono", "Tablet", "Monitor", "Teclado"];
productos.push("Mouse"); //Agrega un nuevo producto al final del arreglo
console.log(productos);

productos.pop(); //Elimina el último producto del arreglo
console.log(productos);

//Objetos
const aprendiz = {
    nombre: "Ana",
    edad: 25,
    curso: "JavaScript",
    matriculado: true,
}
console.log(`El nombre del aprendiz es: ${aprendiz.nombre}`);
console.log(`La edad del aprendiz es: ${aprendiz.edad}`);
console.log(`El curso del aprendiz es: ${aprendiz.curso}`);
console.log(`El aprendiz está matriculado: ${aprendiz.matriculado}`);

const products = [
    { nombre: "Laptop", precio: 1000},
    { nombre: "Telefono", precio: 2000},
    { nombre: "Tablet", precio: 3000},
    { nombre: "Monitor", precio: 4000},
];
console.log(products[0].nombre); //Accede al nombre del primer producto
console.log(products[1].precio); //Accede al precio del segundo producto

//Destructuracción de objetos: traer una propiedad y asignarsela a una variable
const aprendiz2 = {
    nombre: "Luis",
    edad: 30,
    curso: "JavaScript",
    matriculado: false,
}
const {nombre, edad, curso, matriculado} = aprendiz2;
console.log(nombre);
console.log(edad);
console.log(curso);
console.log(matriculado);

//Destructurar arreglos
const numeros = [100, 500, 300, 200];
const [primerNumero, segundoNumero, tercerNumero, cuartoNumero] = numeros;
console.log(primerNumero);
console.log(segundoNumero);
console.log(tercerNumero);
console.log(cuartoNumero);

//Spreas operator / Operador de propagación 
const colores = ["Rojo", "Verde", "Azul"];
const copiaColores = [...colores]; //Crea una copia del arreglo de colores
copiaColores.push("Amarillo"); //Agrega un color a la copia del arreglo
console.log(colores);
console.log(copiaColores);

const tarea = {
    titulo: "Aprender JavaScript",
    descripcion: "Completar el curso de JavaScript en 30 días",
    completado: false,
}
const actualizaTarea = {...tarea, completado: true}; //Crea una copia del objeto tarea
console.log(tarea); //Muestra el objeto original
console.log(actualizaTarea); //Muestra la copia del objeto con la actualización
console.log(actualizaTarea.completado); //Muestra el valor de la propiedad completado de la copia del objeto 