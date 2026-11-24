// Array con diferentes textos que vamos a comprobar.
const textos = [
    '{"nombre":"Ana","edad":19}',
    "{'nombre':'Luis'}",
    '{"activo":true,}',
    '[1, 2, 3]',
    '{nombre:"Marta"}',
    '{"curso":"2DAW"',
];

// Recorremos todos los textos del array.
for (const texto of textos) {

    try {
        // Intentamos convertir el texto a un dato JavaScript.
        const resultado = JSON.parse(texto);

        // Si funciona, mostramos el texto y su tipo de dato.
        console.log(`✔ ${texto} → ${typeof resultado}`);

    } catch (error) {
        // Si el JSON es incorrecto, mostramos el nombre del error.
        console.log(`✘ ${texto} → ${error.name}`);
    }
}

// Array con los textos anteriores que estaban mal corregidos.
const corregidos = [
    '{"nombre":"Luis"}',
    '{"activo":true}',
    '{"nombre":"Marta"}',
    '{"curso":"2DAW"}',
];

// Comprobamos que los textos corregidos ya son válidos.
for (const texto of corregidos) {
    try {
        JSON.parse(texto);
        console.log(`✔ Corregido: ${texto}`);

    } catch (error) {
        console.log(`✘ Sigue teniendo errores: ${texto}`);
    }
}