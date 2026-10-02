import {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
} from "./empleados.js"


// Añadir empleados
agregarEmpleado({
    id: 6,
    nombre: "Pablo Rodríguez",
    departamento: "Desarrollo",
    salario: 40000
})

agregarEmpleado({
    id: 7,
    nombre: "Lucía Pérez",
    departamento: "Marketing",
    salario: 31000
})

agregarEmpleado({
    id: 8,
    nombre: "Javier Gómez",
    departamento: "Ventas",
    salario: 29000
})


// Buscar empleados por departamento
console.log("=== EMPLEADOS DE DESARROLLO ===")

const empleadosDesarrollo = buscarPorDepartamento("Desarrollo");

console.log(empleadosDesarrollo);


// Calcular salario promedio
console.log("=== SALARIO PROMEDIO ===")

const salarioPromedio = calcularSalarioPromedio();

console.log(`Salario promedio: ${salarioPromedio} €`)


// Obtener empleados ordenados por salario
console.log("=== EMPLEADOS ORDENADOS POR SALARIO ===")

const empleadosOrdenados = obtenerEmpleadosOrdenadosPorSalario()

console.log(empleadosOrdenados)


// Eliminar un empleado
console.log("=== ELIMINANDO EMPLEADO ===")

eliminarEmpleado(2)

console.log("Empleado con ID 2 eliminado.")
