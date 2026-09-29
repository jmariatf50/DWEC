import {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    calcularTotalPaginas
} 
from "./biblioteca.js"



console.log("Colección inicial:")
console.log(obtenerLibros())

console.log("Libro encontrado:")
console.log(buscarLibro(5))

eliminarLibro(5)

console.log("Colección después de eliminar el libro:")
console.log(obtenerLibros())

const total = calcularTotalPaginas()

console.log(`Total de páginas: ${total}`)