// Función que comprueba si quedan unidades disponibles.
function comprobarStock(unidades) {

    // Devolvemos una promesa que se resolverá o rechazará.
    return new Promise((resolver, rechazar) => {

        // Esperamos un segundo antes de comprobar el stock.
        setTimeout(() => {

            if (unidades > 0) {
                // Si hay unidades, cumplimos la promesa.
                resolver(`Quedan ${unidades} unidades`);

            } else {
                // Si no hay unidades, rechazamos la promesa.
                rechazar(new Error('Producto agotado'));
            }

        }, 1000);
    });
}

// Primera consulta: comprobamos si quedan 5 unidades.
console.log('Consulta enviada: 5 unidades');

comprobarStock(5)
    .then((resultado) => {
        // Se ejecuta si la promesa se cumple.
        console.log(`✔ ${resultado}`);
    })
    .catch((error) => {
        // Se ejecuta si la promesa es rechazada.
        console.log(`✘ ${error.message}`);
    })
    .finally(() => {
        // Se ejecuta tanto si se cumple como si se rechaza.
        console.log('Consulta terminada');
    });


// Segunda consulta: comprobamos si quedan 0 unidades.
console.log('Consulta enviada: 0 unidades');

comprobarStock(0)
    .then((resultado) => {
        // Se ejecuta si hay stock disponible.
        console.log(`✔ ${resultado}`);
    })
    .catch((error) => {
        // Mostramos el mensaje si no queda stock.
        console.log(`✘ ${error.message}`);
    })
    .finally(() => {
        // Indicamos que la consulta ha terminado.
        console.log('Consulta terminada');
    });

// Las consultas aparecen primero porque se ejecutan inmediatamente.
// Los resultados esperan un segundo debido al setTimeout.