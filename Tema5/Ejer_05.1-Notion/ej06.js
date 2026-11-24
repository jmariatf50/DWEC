// Función que devuelve una lista nueva para cada apartado.
const nuevaLista = () => ({
    propietario: 'Ana',
    productos: ['pan', 'leche']
});


// APARTADO A: IGUALAR OBJETOS

// Creamos una lista y otra variable que apunta al mismo objeto.
const lista1 = nuevaLista();
const igual = lista1;

// Añadimos huevos a través de la segunda variable.
igual.productos.push('huevos');

// Mostramos los productos de la lista original.
console.log(lista1.productos);

// Comprobamos si las dos variables hacen referencia al mismo objeto.
console.log(lista1 === igual);


// APARTADO B: COPIA SUPERFICIAL

// Creamos una lista nueva.
const lista2 = nuevaLista();

// Copiamos el objeto utilizando el operador spread.
const superficial = { ...lista2 };

// Cambiamos el propietario de la copia.
superficial.propietario = 'Luis';

// Añadimos queso al array de productos de la copia.
superficial.productos.push('queso');

// Mostramos los datos del objeto original.
console.log(lista2.propietario);
console.log(lista2.productos);


// APARTADO C: COPIA PROFUNDA

// Creamos otra lista nueva.
const lista3 = nuevaLista();

// Hacemos una copia profunda con structuredClone.
const profunda = structuredClone(lista3);

// Cambiamos el propietario de la copia.
profunda.propietario = 'Marta';

// Añadimos fruta a los productos de la copia.
profunda.productos.push('fruta');

// Mostramos el objeto original y la copia.
console.log(lista3);
console.log(profunda);


// RESPUESTAS:
//
// En el apartado B, el propietario original no cambia porque
// es una propiedad independiente de la copia superficial.
// Los productos sí cambian porque el array sigue siendo
// el mismo en los dos objetos.
//
// Si solo hubiera textos y números utilizaría el spread (...),
// porque sería suficiente para copiar las propiedades.