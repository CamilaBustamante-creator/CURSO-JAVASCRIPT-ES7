//EJERCICIO 03 | Clasificación de calificaciones
const evaluarNota = function(nota){
    if (nota < 0 || nota > 100){
        return `Nota: ${nota} - Estado: Nota inválida`;
    } else if (nota >= 70){
        return `Nota: ${nota} - Estado: Aprobado`;
    } else if (nota < 70){
        return `Nota: ${nota} - Estado: Reprobado`;
    }
}
console.log(evaluarNota(-10));
