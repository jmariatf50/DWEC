const tareas = [
  { id: 1, descripcion: "Comprar suministros de oficina", completada: false },
  { id: 2, descripcion: "Revisar código del proyecto Beta", completada: true },
  { id: 3, descripcion: "Planificar reunión semanal", completada: false },
  { id: 4, descripcion: "Responder correos urgentes", completada: false }
];
//========== Ejercicio ========== 

const pendientes = tareas.filter(tarea => tarea.completada === false);

console.log(pendientes);