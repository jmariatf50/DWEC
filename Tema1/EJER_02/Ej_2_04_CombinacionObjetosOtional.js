const usuario = {
    
    nombre: "Carlos",
    email: "carlos@email.com"

}

const perfil = {

    puesto: "Desarrollador",
    empresa: "Tech Solutions"

}

// Combinamos los objetos
const empleado = {

    ...usuario,
    ...perfil

}

console.log(empleado)

// Intentamos acceder a una propiedad que podría no existir
const ciudad = empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada"

console.log(`Ciudad: ${ciudad}`)