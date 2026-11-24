// Función que comprueba si los datos de un alumno son correctos.
function esAlumnoValido(texto) {

    let alumno;

    try {
        // Intentamos convertir el texto recibido en un objeto.
        alumno = JSON.parse(texto);

    } catch (error) {
        // Si el texto no es un JSON válido, devolvemos false.
        return false;
    }

    // Comprobamos que el resultado sea un objeto y no sea null.
    if (alumno === null || typeof alumno !== 'object' || Array.isArray(alumno)) {
        return false;
    }

    // Comprobamos que nombre exista, sea un texto y no esté vacío.
    if (typeof alumno.nombre !== 'string' || alumno.nombre.trim() === '') {
        return false;
    }

    // Comprobamos que la nota sea un número entre 0 y 10.
    if (typeof alumno.nota !== 'number' || alumno.nota < 0 || alumno.nota > 10) {
        return false;
    }

    // Si todas las comprobaciones se cumplen, devolvemos true.
    return true;
}

// Array con diferentes datos de alumnos para comprobar.
const entradas = [
    '{"nombre":"Ana","nota":8.5}',
    '{"nombre":"Luis","nota":"9"}',
    '{"nombre":"","nota":7}',
    '{"nombre":"Marta","nota":11}',
    '{"nombre":"Pablo","nota":6',
    'null',
];

// Recorremos las entradas y comprobamos si son válidas.
for (const texto of entradas) {

    if (esAlumnoValido(texto)) {
        console.log(`✔ aceptado  ${texto}`);

    } else {
        console.log(`✘ rechazado ${texto}`);
    }
}