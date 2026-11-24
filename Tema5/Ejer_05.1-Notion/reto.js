// Simulamos un servidor que contiene tres libros.
const titulos = {
    1: 'El nombre de la rosa',
    2: 'Cien años de soledad',
    3: 'Fahrenheit 451',
};

// Función que busca un libro por su identificador.
const buscarLibro = (id) =>
    new Promise((resolver, rechazar) => {

        // Simulamos una espera de 500 milisegundos.
        setTimeout(() => {

            if (titulos[id]) {
                // Si el libro existe, devolvemos sus datos.
                resolver({ id, titulo: titulos[id] });

            } else {
                // Si no existe, rechazamos la promesa.
                rechazar(new Error(`No existe ningún libro con id ${id}`));
            }

        }, 500);
    });


// Texto que contiene los identificadores de los libros en formato JSON.
const textoIds = '[3, 1, 99, 2]';

// Variable donde guardaremos los identificadores.
let ids;

try {
    // Convertimos el texto JSON en un array de JavaScript.
    ids = JSON.parse(textoIds);

    // Comprobamos que el resultado sea un array.
    if (!Array.isArray(ids)) {
        throw new Error('Los identificadores deben estar en un array');
    }

} catch (error) {
    // Si el JSON es incorrecto, mostramos el error.
    console.log('Error al leer los identificadores:', error.message);

    // Terminamos el programa si los datos no son válidos.
    process.exit(1);
}


// Creamos una promesa para cada identificador.
const promesas = ids.map((id) => buscarLibro(id));

// Esperamos a que todas las promesas terminen,
// tanto si se cumplen como si se rechazan.
const resultados = await Promise.allSettled(promesas);

// Creamos contadores para el resumen final.
let encontrados = 0;
let noExisten = 0;

// Recorremos los resultados en el mismo orden que los identificadores.
for (let i = 0; i < resultados.length; i++) {

    const resultado = resultados[i];

    if (resultado.status === 'fulfilled') {
        // Si se encuentra el libro, mostramos su id y título.
        console.log(`✔ ${resultado.value.id} · ${resultado.value.titulo}`);

        // Aumentamos el contador de libros encontrados.
        encontrados++;

    } else {
        // Si no existe, mostramos el id y el mensaje de error.
        console.log(`✘ ${ids[i]} · ${resultado.reason.message}`);

        // Aumentamos el contador de libros no encontrados.
        noExisten++;
    }
}

// Mostramos el resumen final de todas las búsquedas.
console.log(`${encontrados} encontrados y ${noExisten} no existen`);