import {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    obtenerLibros,
    ordenarPorPaginas

}

from "./biblioteca.js"

console.log("Colección inicial:")
console.log(obtenerLibros())

console.log("Libro encontrado:")
console.log(buscarLibro(5))

eliminarLibro(5)

console.log("Colección después de eliminar el libro:")
console.log(obtenerLibros())

console.log("Antes de ordenar:")
console.log(obtenerLibros())

ordenarPorPaginas()

console.log("Después de ordenar:")
console.log(obtenerLibros())
