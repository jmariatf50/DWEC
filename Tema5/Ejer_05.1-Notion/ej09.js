// Simulamos un servidor que contiene tres libros.
const titulos = {
    1: 'El nombre de la rosa',
    2: 'Cien años de soledad',
    3: 'Fahrenheit 451',
};

// Función que busca un libro por su identificador.
const buscarLibro = (id) =>
    new Promise((resolver, rechazar) => {

        // Simulamos un tiempo de respuesta de 500 milisegundos.
        setTimeout(() => {

            if (titulos[id]) {
                // Si existe el libro, devolvemos su id y título.
                resolver({ id, titulo: titulos[id] });

            } else {
                // Si no existe, rechazamos la promesa con un error.
                rechazar(new Error(`No existe ningún libro con id ${id}`));
            }

        }, 500);
    });


// Función asíncrona que muestra los títulos de varios libros.
async function mostrarTitulos(ids) {

    // Recorremos todos los identificadores recibidos.
    for (const id of ids) {

        try {
            // Esperamos a que termine la búsqueda del libro.
            const libro = await buscarLibro(id);

            // Mostramos el identificador y el título encontrado.
            console.log(`${libro.id}: ${libro.titulo}`);

        } catch (error) {
            // Si un libro no existe, mostramos el error.
            console.log(`${id}: ✘ ${error.message}`);
        }
    }

    // Este mensaje aparece cuando terminan todas las búsquedas.
    console.log('Fin de la búsqueda');
}

// Ejecutamos la función con los identificadores indicados.
await mostrarTitulos([1, 99, 2, 3]);

// Utilizamos await para esperar a cada libro antes de buscar el siguiente.
// El catch está dentro del bucle para que un error no detenga las búsquedas.