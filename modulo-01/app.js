console.log("Hello world!")
console.log("Estoy aprendiendo JavaScript")

//variables y tipos de datos
let edad = 25;
const nombre = "Juan";

console.log(nombre);
console.log(edad);

//diferencia entre let y const
//let permite reasignación, const no, son para variables que no se reasignan, son únicos en el programa
let ciudad = "Madrid";
ciudad = "Barcelona";
//const
const pais = "España";
//pais = "Francia";

//tipos de datos
const nombreUsuario = "Juan"; //String
const edadUsuario = 30; //Number
const estEstudiante = true; //Boolean
let temporada; //Undefined
const direccion = null; //Vacío

console.log(typeof nombreUsuario);
console.log(typeof edadUsuario);
console.log(typeof estEstudiante);
console.log(typeof temporada);
console.log(typeof direccion); //"object" (es un comportamiento conocido de JavaScript, null es considerado un objeto)

//la diferencia entre null y undefined
//undefined significa que una variable ha sido declarada pero aún no se le ha asignado un valor
//null es  un valor asignado a una variable para indicar que no tiene ningún valor

//Template literals (``): permite imprimir el contenido de las variables y asignarlo en una variable
const nombreCliente = "María";
const edadCliente = 25;

const mensaje = `El nombre del usuario es ${nombreCliente} y su edad es ${edadCliente}`;
console.log(mensaje);

//Operadores aritméticos

const a = 10;
const b = 5;
console.log(a + b); //Suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicación
console.log(a / b); //División
console.log(a % b); //Módulo: residuo de la división

//operadores de comparación
console.log(a > b); //Mayor que: true
console.log(a < b); //Menor que: false
console.log(a >= b); //Mayor o igual que: true
console.log(a <= b); //Menor o igual que: false
console.log(a === b); //Igualdad estricta: false
console.log(a == b); //Igualdad: false
console.log(a !== b); //Desigualdad estricta: true

//operadores lógicos
const edadPersona = 20;
const tieneDocumento = true;

const puedeIngresar = edadPersona >= 18 && tieneDocumento; //true si la persona es igual o mayor a 18 y tiene documento
console.log(puedeIngresar); //true

const esMayorEdad = edadPersona >= 18 || tieneDocumento; //true si la persona es igual o mayor a 18 O tiene documento
console.log(esMayorEdad); //true

const noPuedeIngresar = !puedeIngresar; //Negación: true si la persona no puede ingresar
console.log(noPuedeIngresar); //true

//Conversión de datos
const precio = "100";
const cantidad = "5";

const total = Number(precio) * Number(cantidad); //Convertimos las cadenas a números antes de multiplicar
console.log(total); //500

//Desarrollar un programa que calcule el salario semanal de un trabajador considerando horas trabajadas y tarifa por hora. Agregar una bonificación del 10% cuando el salario base supere $500000

const horas = 20;
const tarifa = 8000;

const salarioBase = horas * tarifa;

console.log("El salario base es")
console.log(salarioBase)

const tieneBonificación = salarioBase > 500000;
console.log("Tiene bonificación");
console.log(tieneBonificación)

if (tieneBonificación) {
    salarioBase + ((salarioBase * 10) /100);
    console.log("El salario final con bonificación es de")
    console.log(salarioTotal) 
} else {
    console.log("No tiene bonificación, su salario total es");
    console.log(salarioBase);
}

//Estructuras condicionales
const edad2 = 20;
if (edad2 >= 18){
    console.log("Eres mayor de edad")
} else {
    console.log("No eres mayor de edad");
}

//condicionales multiples
const calificacion = 85;

if (calificacion >= 90){
    console.log("Excelente");
} else if (calificacion >= 80){
    console.log("Muy bien");
} else if (calificacion >= 70){
    console.log("Bien");
} else if (calificacion >= 60){
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}

//Condicionales compuestas
const edad3 = 25;
const tieneEntrada = true;

if (edad3 >= 18 && tieneEntrada) {
    console.log("Puede ingresar");
} else {
    console.log("No puede ingresar");
}

//Sistema de clasificación de clientes por valor de compra
//Compra menor de 100000 descuento 0%
//De 100000 hasta menos de 300000 descuento 5%
//De 300000 hasta menos de 500000 descuento 10%
//500000 o más descuento 15%
//Debe mostrar subtotal, descuento aplicado y total a pagar
//Debe rechazar compras con valores negativos o no numericos

const cliente = "Ana";
const valorCompraInicial = "450000";
const valorCompra = Number(valorCompraInicial);
console.log("El subtotal es");
console.log(valorCompra);

    if (valorCompra>=0 && valorCompra<100000){
        console.log("No tiene descuento, su total a pagar es");
        console.log(valorCompra);
    } else if (valorCompra>=100000 && valorCompra<300000){
        let descuento = (valorCompra*5)/100;
        console.log("El descuento es de");
        console.log(descuento);
        console.log("Su total a pagar es de");
        console.log(valorCompra - descuento);
    } else if (valorCompra>=300000 && valorCompra<500000){
        let descuento = (valorCompra*10)/100;
        console.log("El descuento es de");
        console.log(descuento);
        console.log("Su total a pagar es de");
        console.log(valorCompra - descuento);
    } else if (valorCompra>=500000){
        let descuento = (valorCompra*15)/100;
        console.log("El descuento es de");
        console.log(descuento);
        console.log("Su total a pagar es de");
        console.log(valorCompra - descuento);
    } else {
        console.log("El valor de su compra es negativo");
    }