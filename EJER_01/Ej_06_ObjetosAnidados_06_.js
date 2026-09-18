// Creación del array cursos

let cursos = [

    {
        nombre: "JavaScript",
        profesor: "Alfonso",

        estudiantes: [

            { nombre: "Miguel", calificacion: 7 },
            { nombre: "Adriana", calificacion: 5 },
            { nombre: "Brayan", calificacion: 8 }

        ]
    },

    {
        nombre: "HTML y CSS",
        profesor: "Laura",

        estudiantes: [

            { nombre: "Pedro", calificacion: 7 },
            { nombre: "Ana", calificacion: 8 },
            { nombre: "Lucia", calificacion: 9 }

        ]
    },

    {
        nombre: "Bases de Datos",
        profesor: "Javier",

        estudiantes: [

            { nombre: "Mario", calificacion: 5 },
            { nombre: "Sara", calificacion: 6 },
            { nombre: "David", calificacion: 4 }

        ]
    },

    {
        nombre: "Programación",
        profesor: "Marta",

        estudiantes: [

            { nombre: "Elena", calificacion: 9 },
            { nombre: "Pablo", calificacion: 8 },
            { nombre: "Sergio", calificacion: 10 }

        ]
    }

]


// Crear resumenCursos utilizando map()

let resumenCursos = cursos.map(curso => {

    let suma = curso.estudiantes.reduce(

        (total, estudiante) => total + estudiante.calificacion, 0
    )

    let promedio = suma / curso.estudiantes.length

    return {

        nombreCurso: curso.nombre,
        promedioCalificaciones: promedio

        }

    }
)


// Filtrar que el promedio sea >= 7

let cursosDestacados = resumenCursos.filter(
    curso => curso.promedioCalificaciones >= 7
)


// Mostrar los cursos destacados

cursosDestacados.forEach(curso => {

    console.log(
        "El curso " + curso.nombreCurso
        + " tiene un promedio de "
        + curso.promedioCalificaciones.toFixed(2)
        + " y es considerado destacado"
        )

    }   

)


// Comprobar si algún estudiante tiene menos de un 4

cursos.forEach(curso => {

    let hayNotaBaja = curso.estudiantes.some(
        estudiante => estudiante.calificacion < 4
        )

    if (hayNotaBaja) {

        console.log(
            "Atención: En el curso " + curso.nombre
            + " hay estudiantes con calificaciones muy bajas."
            )

        }

    }

)
