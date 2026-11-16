//EJERCICIO 12 | Sistema de calificaciones
const aprendices = [
{ nombre: "Laura", nota: 85 },
{ nombre: "Andrés", nota: 62 },
{ nombre: "Camila", nota: 95 },
{ nombre: "Sergio", nota: 48 },
{ nombre: "Valentina", nota: 78 }
];
function  calcularPromedio(aprendices){
    let total = 0;
    for (const aprendiz of aprendices){
        total += aprendiz.nota;
    }
    let promedio = total / aprendices.length;
    return promedio;
}
function obtenerAprobados(aprendices){
    const aprobados = [];
    for (const aprendiz of aprendices){
        if (aprendiz.nota >= 70){
            aprobados.push(aprendiz); 
        }
    }
    return aprobados;
}
function obtenerMejorAprendiz(aprendices){
    let mejorAprendiz = aprendices[0];
    for (const aprendiz of aprendices){
        if (aprendiz.nota > mejorAprendiz.nota){
            mejorAprendiz = aprendiz;
        }
    }
    return mejorAprendiz;
}
function generarReporte(aprendices){
    let aprobados = 0;
    let reprobados = 0;
    for (const aprendiz of aprendices) {
        if (aprendiz.nota >= 70) {
            aprobados++;
        } else {
            reprobados++;
        }
    }
    console.log("--- REPORTE ACADEMICO ---");
    console.log(`Aprobados: ${aprobados}`);
    console.log(`Reprobados: ${reprobados}`);
}
console.log("Promedio general:", calcularPromedio(aprendices));
console.log("Aprendices aprobados:", obtenerAprobados(aprendices));
console.log("Mejor aprendiz:", obtenerMejorAprendiz(aprendices));
generarReporte(aprendices);