//Creacion del array ciudad

let ciudades = [ "Madrid", " Buenos Aires", " Tokio", " Nueva York", " Paris"]

//Añadir una ciudad nueva al final del array

ciudades.push("Roma")

//Creao un nuevo array con las ciudades en mayúsculas

let ciudadesMayusculas = ciudades.map(ciudad => ciudad.toUpperCase())

//Creo Otro nuevo array con mas de 6 caracteres

let ciudadesFiltradas = ciudades.filter(ciudad => ciudad.length > 6)

//Imprimo los arrays

console.log("Ciudades: " + ciudades)
console.log("Ciudades en Mayusculas: " + ciudadesMayusculas)
console.log("Ciudades con mas de 6 caracteres: " + ciudadesFiltradas)