
import mostrarPerfil,{

    crearPerfil,
    esMayorDeEdad,
    obtenerMayoresDeEdad,
    calcularPromedioEdad
} from "./gestorUsuarios.js"

const usuarios = [

    crearPerfil("Ana García", "ana@email.com", 25),
    crearPerfil("Carlos López", "carlos@email.com", 17),
    crearPerfil("María Pérez", "maria@email.com", 32),
    crearPerfil("Pedro Sánchez", "pedro@email.com", 15),
    crearPerfil("Laura Martín", "laura@email.com", 20)

]

const mayoresDeEdad = obtenerMayoresDeEdad(usuarios)

console.log("Usuarios mayores de edad:")

mayoresDeEdad.forEach((usuario) => {

    console.log(mostrarPerfil(usuario))

    }

)

const promedioEdad = calcularPromedioEdad(usuarios)

console.log(`La edad promedio de los usuarios es: ${promedioEdad.toFixed(2)}`)
