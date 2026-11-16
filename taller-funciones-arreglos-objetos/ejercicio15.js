//EJERCICIO 15 | Sistema de gestión de tareas · ejercicio integrador
const tareas = [
{
    id: 1, titulo: "Estudiar funciones",
    responsable: "Ana", completada: false
},
{
    id: 2, titulo: "Practicar arreglos",
    responsable: "Carlos", completada: true
},
{
    id: 3, titulo: "Aprender objetos",
    responsable: "María", completada: false
}
];
function  mostrarTareas(tareas){
    for (const tarea of tareas){
        console.log(`ID: ${tarea.id} | Tarea: ${tarea.titulo} | Responsable: ${tarea.responsable} | Estado: ${tarea.completada ? "Completada" : "Pendiente"}`);
    }
}
function contarPendientes(tareas){
    let noCompletadas = 0;
    for (const tarea of tareas){
        if (tarea.completada === false){
            noCompletadas ++;
        }
    }
    return noCompletadas;
}
function contarCompletadas(tareas){
    let completadas = 0;
    for (const tarea of tareas){
        if (tarea.completada === true){
            completadas ++;
        }
    }
    return completadas;
}
function agregarTarea(tareas, nuevaTarea){
    const copiaTareas = [...tareas];
    copiaTareas.push(nuevaTarea);
    return copiaTareas;
    //return [...tareas, nuevaTarea];
}
function completarTarea(tareas, id){
    for (const tarea of tareas){
        if (tarea.id === id) {
            const copiaTareas = { ...tarea, completada: true };
            return copiaTareas;
        }
    }
}
function mostrarResponsable(tarea){
    const {titulo, responsable} = tarea;
    return `El título de la tarea es: ${titulo} y el responsable es: ${responsable}`;
}
console.log("===== LISTA DE TAREAS =====");
mostrarTareas(tareas);
console.log("===== RESUMEN =====");
console.log(`Tareas pendientes: ${contarPendientes(tareas)}`);
console.log(`Tareas completadas: ${contarCompletadas(tareas)}`);
console.log("===== AGREGAR TAREA =====");
console.log(agregarTarea(tareas, {
    id: 4, titulo: "Estudiar destruccturación",
    responsable: "Camila", completada: false
}));
console.log("===== COMPLETAR TAREA =====");
console.log(completarTarea(tareas, 1));
console.log("\n===== RESPONSABLE DE UNA TAREA =====");
mostrarResponsable(tareas[0]);
console.log("\n===== COMPROBAR ARREGLO ORIGINAL =====");
mostrarTareas(tareas);