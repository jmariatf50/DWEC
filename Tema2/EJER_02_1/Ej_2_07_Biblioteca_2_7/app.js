import {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    obtenerLibros,
    ordenarPorPaginas,
    hayLibrosLargos,
    todosSonLibrosCortos

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

console.log("¿Hay algún libro de más de 500 páginas?")
console.log(hayLibrosLargos(500))

console.log("¿Hay algún libro de más de 1000 páginas?")
console.log(hayLibrosLargos(1000))

console.log("¿Todos los libros tienen menos de 2000 páginas?")
console.log(todosSonLibrosCortos(2000))

console.log("¿Todos los libros tienen menos de 300 páginas?")
console.log(todosSonLibrosCortos(300))