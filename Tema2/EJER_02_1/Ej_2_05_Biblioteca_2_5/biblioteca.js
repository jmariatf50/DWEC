const libros = [
    
    {
       
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        paginas: 417

    },

    {

        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328

    },

    {

        id: 3,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        paginas: 96

    },

    {

        id: 4,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        paginas: 863

    },
    {

        id: 5,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        paginas: 432

    },

    {

        id: 6,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        paginas: 249

    },

    {

        id: 7,
        titulo: "El Hobbit",
        autor: "J. R. R. Tolkien",
        paginas: 310

    },

    {

        id: 8,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        paginas: 576

    },

    {

        id: 9,
        titulo: "Los miserables",
        autor: "Victor Hugo",
        paginas: 120

    },

    {

        id: 10,
        titulo: "Drácula",
        autor: "Bram Stoker",
        paginas: 418

    }

]

function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro);
}

function obtenerLibros() {

    return libros

}

// NUEVO EN 2.4
function buscarLibro(id) {

    return libros.find(libro => libro.id === id)

}

// NUEVO EN 2.4
function eliminarLibro(id) {

    const indice = libros.findIndex(libro => libro.id === id)

    if (indice !== -1) {

        libros.splice(indice, 1)

    }

}

// NUEVO en 2.5
function calcularTotalPaginas() {
    return libros.reduce((total, libro) => {
        return total + libro.paginas
    }, 0)
}

export {

    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    calcularTotalPaginas
    
}
/*push() → añade un libro.

find() → encuentra un libro concreto.

findIndex() → obtiene la posición de un libro.

splice() → elimina el libro.

reduce() → suma las páginas.

sort() → ordena por número de páginas.

some() → comprueba si al menos uno cumple una condición.

every() → comprueba si todos cumplen una condición.
*/
