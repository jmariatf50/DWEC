//funcion para crear y dovolver un usuario

export function crearPerfil(nombre, email, edad) {

    return {

        nombre,
        email,
        edad

    }

}

//Comprobar si el usuario es mayor de edad

export function esMayorDeEdad(usuario){

    return usuario.edad >= 18

}

export function obtenerMayoresDeEdad(usuarios){ 

    return usuarios.filter(esMayorDeEdad)

}

export function calcularPromedioEdad(usuarios){

    if(usuarios.length === 0){

        return 0

    }

    const sumarEdades = usuarios.reduce(

        (total, usuario) => total + usuario.edad, 0
    
    )

     return sumarEdades / usuarios.length

}

function mostrarPerfil(usuario){

    return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`

}

export default mostrarPerfil
