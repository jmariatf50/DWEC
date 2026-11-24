// Creamos un objeto con los datos de nuestra mascota.
const mascota = {
    nombre: 'Luna',
    edad: 3,
    vacunada: true,
    vacunas: ['rabia', 'moquillo'],
    apodo: undefined,
    fechaAlta: new Date('2026-09-01T10:00:00Z'),
};

// Convertimos el objeto en un texto JSON.
const textoJSON = JSON.stringify(mascota);

// Mostramos el JSON sin espacios adicionales.
console.log(textoJSON);

// Mostramos el JSON con una sangría de dos espacios.
console.log(JSON.stringify(mascota, null, 2));

// Convertimos el objeto mostrando solamente nombre y edad.
console.log(JSON.stringify(mascota, ['nombre', 'edad']));

// Convertimos el texto JSON otra vez en un objeto JavaScript.
const mascotaRecuperada = JSON.parse(textoJSON);

// Mostramos el primer elemento del array de vacunas.
console.log(mascotaRecuperada.vacunas[0]);

// Comprobamos el tipo de dato de fechaAlta.
console.log(typeof mascotaRecuperada.fechaAlta);

// El apodo no aparece porque JSON.stringify no incluye
// las propiedades cuyo valor es undefined.

// La fecha deja de ser un objeto Date porque JSON.stringify
// la convierte en un texto y JSON.parse no recupera
// automáticamente el tipo Date.