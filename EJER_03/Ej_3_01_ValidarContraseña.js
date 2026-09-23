function esContrasenaValida(contrasena) {

  return contrasen
a.length >= 8

}

const contrasenas = ['1234', 'miClave2024', 'abc']

// Usamos una función anónima dentro de map()
const resultado = contrasenas.map(function(contrasena) {

  return esContrasenaValida(contrasena)

    }

)

console.log(resultado); // [false, true, false]

/*Explicación

//La función:

function esContrasenaValida(contrasena) {

  return contrasena.length >= 8

}

comprueba la longitud de la contraseña:

'1234' → 4 caracteres → false
'miClave2024' → 11 caracteres → true
'abc' → 3 caracteres → false

Después, .map() recorre cada contraseña y ejecuta la función anónima:



function(contrasena) {

  return esContrasenaValida(contrasena)

}

Por eso obtenemos:

[false, true, false]
Reflexión

Conviene dar nombre a una función cuando:

La vamos a utilizar varias veces.
La función realiza una operación importante o compleja.
Queremos que el código sea más fácil de leer y mantener.
Queremos poder reutilizarla en diferentes partes del programa.

Por ejemplo:

esContrasenaValida('miClave2024');

En cambio, una función anónima resulta útil cuando:

Solo necesitamos la función en un lugar concreto.
La operación es sencilla.
Se utiliza como argumento de métodos como .map(), .filter() o .forEach().

Por ejemplo:

contrasenas.map(function(contrasena) {

  return esContrasenaValida(contrasena)

})

También podríamos escribirlo con una función flecha, que es una forma más habitual actualmente:

const resultado = contrasenas.map(contrasena => esContrasenaValida(contrasena))

*/