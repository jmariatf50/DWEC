const tareas = [
  { id: 1, descripcion: "Comprar suministros de oficina", completada: false },
  { id: 2, descripcion: "Revisar código del proyecto Beta", completada: true },
  { id: 3, descripcion: "Planificar reunión semanal", completada: false },
  { id: 4, descripcion: "Responder correos urgentes", completada: false }
];
//========== Ejercicio ========== 

const tareasConNueva = [
    ...tareas, 
    {
        id : 5, 
        descripcion : "Investigar nueva libreria JS",
        completada : false
    }
];

console.log(tareasConNueva);
console.log(tareas.length);
