//Creo un array de estudiantes con multiples objetos
let estudiantes = [

    {

        nombre: "Miguel",
        apellidos: "Garcia Diaz",
        calificacion: 10,
        aprobado: false

    },

    {

        nombre: "Adriana",
        apellidos: "Gutierrez de la Vega",
        calificacion: 9,
        aprobado: true

    },

    {

        nombre: "Brayan",
        apellidos: "Ramirez Arrunaterra",
        calificacion: 3,
        aprobado: false

    }

]

//Creacion de un nuevo array con un ID unico por estudiante

let estudiantesConId = estudiantes.map((estudiante, indice) =>{

    return {

        ...estudiante,
        id:indice + 1

        }

    }

)

//Filtrar estudiantes con mayor o igual calificacion a 5

let estudiantesAprobados = estudiantesConId.filter(
    estudiantes => estudiantes.calificacion >= 5)

//Mostrar mensaje felicitaciones a los aprovados

estudiantesAprobados.forEach(estudiante => {
    console.log(
        "¡Felicidades " + estudiante.nombre 
        + " has aprobado con " 
        + estudiante.calificacion + "!")

    }
)

//Comprobar si "aprobado es coherente con la nota "

estudiantes.forEach(estudiante => {

    let aprobadoCorrecto = estudiante.calificacion >= 5

    if (estudiante.aprobado !== aprobadoCorrecto) {

        console.log("Incoherencia en el registro de " 
            + estudiante.nombre + ": calificacion = " 
            + estudiante.calificacion + " aprobado = " 
            +  estudiante.aprobado)
    
        }
    }
)
