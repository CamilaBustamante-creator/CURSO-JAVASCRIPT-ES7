//EJERCICIO 10 | Registro de aprendices
const aprendiz = {
nombre: "Daniel",
edad: 22,
programa: "ADSO",
matriculado: true,
notaFinal: 87
};
console.log("Nombre:", aprendiz.nombre);
console.log("Edad:", aprendiz.edad);
console.log("Programa:", aprendiz.programa);
console.log("Matriculado:", aprendiz.matriculado);
console.log("Nota final:", aprendiz.notaFinal);
function mostrarInformacion(aprendiz){
    console.log("--- INFORMACION DEL APRENDIZ ---");
    console.log(`Nombre: ${aprendiz.nombre}`);
    console.log(`Programa: ${aprendiz.programa}`);
    console.log(`Edad: ${aprendiz.edad}`);
    console.log(`Nota final: ${aprendiz.notaFinal}`);
}
function estaAprobado(aprendiz){
    if (aprendiz.notaFinal >= 70){
        return true;
    } else {
        return false;
    }
}
mostrarInformacion(aprendiz);
console.log(`El aprendiz aprobó: ${estaAprobado(aprendiz)}`);
const segundoAprendiz = {
    nombre: "Laura",
    edad: 20,
    programa: "ADSO",
    matriculado: true,
    notaFinal: 65
};
mostrarInformacion(segundoAprendiz);
console.log(`El aprendiz aprobó: ${estaAprobado(segundoAprendiz)}`);