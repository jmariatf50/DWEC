
// ==========================================================
// EJER_04.2.3
// EJERCICIO 1.2 · REGISTRO DE USUARIO
// ==========================================================

// Importamos las funciones del módulo de validaciones.
import {
    mostrarError,
    validarFormulario,
    limpiarErrores
} from "./validaciones.js";


// ----------------------------------------------------------
// 1. OBTENER LOS ELEMENTOS DEL HTML
// ----------------------------------------------------------

const formulario = document.getElementById("registro");
const resultado = document.getElementById("resultado");

// Desactivamos la validación automática del navegador.
formulario.noValidate = true;


// ----------------------------------------------------------
// 2. RELLENAR LA LISTA DE PAÍSES
// ----------------------------------------------------------

// Array con los países disponibles.
const paises = ["España", "Francia", "Italia", "Portugal"];

const selectorPais = document.getElementById("pais");

// Añadimos cada país como una nueva opción.
paises.forEach(pais => {

    // new Option(texto, valor)
    const opcion = new Option(pais, pais);

    selectorPais.add(opcion);

});


// ----------------------------------------------------------
// 3. FECHA MÁXIMA DE NACIMIENTO
// ----------------------------------------------------------

// Obtenemos la fecha actual en formato YYYY-MM-DD.
// Construimos la fecha con los componentes locales para evitar
// problemas de zona horaria.

const hoy = new Date();

const fechaHoy =
    hoy.getFullYear() + "-" +
    String(hoy.getMonth() + 1).padStart(2, "0") + "-" +
    String(hoy.getDate()).padStart(2, "0");

const nacimiento = document.getElementById("nacimiento");

// No permitimos fechas de nacimiento posteriores a hoy.
nacimiento.max = fechaHoy;


// ----------------------------------------------------------
// 4. FUNCIÓN COMPROBAR REGLAS
// ----------------------------------------------------------

// Aquí colocamos las reglas que no podemos comprobar
// solamente con required, pattern, minlength, etc.
//
// setCustomValidity() permite crear errores personalizados.

function comprobarReglas() {

    const correo = document.getElementById("correo");
    const correo2 = document.getElementById("correo2");

    const clave = document.getElementById("clave");
    const clave2 = document.getElementById("clave2");

    const fechaNacimiento = document.getElementById("nacimiento");


    // Primero eliminamos los errores personalizados anteriores.
    // Así podemos volver a comprobar los campos cuando cambien.
    correo2.setCustomValidity("");
    clave2.setCustomValidity("");
    fechaNacimiento.setCustomValidity("");


    // ------------------------------------------------------
    // COMPROBAR QUE LOS CORREOS COINCIDEN
    // ------------------------------------------------------

    // Solo comparamos cuando los dos campos tienen contenido.
    if (correo.value !== "" && correo2.value !== "") {

        if (correo.value !== correo2.value) {

            correo2.setCustomValidity(
                "Los correos electrónicos no coinciden."
            );

        }

    }


    // ------------------------------------------------------
    // COMPROBAR QUE LAS CONTRASEÑAS COINCIDEN
    // ------------------------------------------------------

    if (clave.value !== "" && clave2.value !== "") {

        if (clave.value !== clave2.value) {

            clave2.setCustomValidity(
                "Las contraseñas no coinciden."
            );

        }

    }


    // ------------------------------------------------------
    // COMPROBAR QUE EL USUARIO ES MAYOR DE EDAD
    // ------------------------------------------------------

    if (fechaNacimiento.value !== "") {

        // Convertimos el texto de la fecha en un objeto Date.
        const fechaNac = new Date(
            fechaNacimiento.value + "T00:00:00"
        );

        const fechaActual = new Date();

        // Calculamos inicialmente la diferencia de años.
        let edad =
            fechaActual.getFullYear() - fechaNac.getFullYear();

        // Comprobamos si todavía no ha llegado su cumpleaños.
        const mesActual = fechaActual.getMonth();
        const mesNacimiento = fechaNac.getMonth();

        const diaActual = fechaActual.getDate();
        const diaNacimiento = fechaNac.getDate();

        // Si no ha cumplido años este año, restamos uno.
        if (
            mesActual < mesNacimiento ||
            (
                mesActual === mesNacimiento &&
                diaActual < diaNacimiento
            )
        ) {

            edad--;

        }

        // Si tiene menos de 18 años, creamos un error.
        if (edad < 18) {

            fechaNacimiento.setCustomValidity(
                "Debes tener al menos 18 años."
            );

        }

    }

}


// ----------------------------------------------------------
// 5. EVENTO FOCUSOUT
// ----------------------------------------------------------

// focusout se produce cuando salimos de un campo.
//
// Utilizamos un solo escuchador en el formulario.
// Esto se llama delegación de eventos.

formulario.addEventListener("focusout", function(event) {

    const campo = event.target;

    if (campo.matches("input, select, textarea")) {

        // Primero comprobamos las reglas propias.
        comprobarReglas();

        // Después mostramos el error del campo.
        mostrarError(campo);

        // Si estamos saliendo del correo original,
        // también comprobamos el correo repetido.
        if (campo.name === "correo" && document.getElementById("correo2").value !== "") {

            mostrarError(document.getElementById("correo2"));

        }

        // Si estamos saliendo de la contraseña original,
        // comprobamos también la segunda contraseña.
        if (campo.name === "clave" && document.getElementById("clave2").value !== "") {

            mostrarError(document.getElementById("clave2"));

        }

    }

});


// ----------------------------------------------------------
// 6. EVENTO INPUT
// ----------------------------------------------------------

// input se ejecuta cada vez que modificamos el contenido
// de un campo.
//
// Sirve para actualizar los errores mientras el usuario escribe.

formulario.addEventListener("input", function(event) {

    const campo = event.target;

    if (!campo.matches("input, select, textarea")) {
        return;
    }

    // Comprobamos las reglas propias.
    comprobarReglas();

    // Si el campo ya tenía un error, lo volvemos a validar.
    if (campo.classList.contains("con-error")) {

        mostrarError(campo);

    }

    // Si cambia el primer correo y ya hay algo escrito
    // en el segundo, también lo revalidamos.
    const correo2 = document.getElementById("correo2");

    if (
        campo.name === "correo" &&
        correo2.value !== ""
    ) {

        mostrarError(correo2);

    }

    // Lo mismo para las contraseñas.
    const clave2 = document.getElementById("clave2");

    if (
        campo.name === "clave" &&
        clave2.value !== ""
    ) {

        mostrarError(clave2);

    }

});


// ----------------------------------------------------------
// 7. EVENTO SUBMIT
// ----------------------------------------------------------

// Se ejecuta cuando pulsamos el botón Registrarse.

formulario.addEventListener("submit", function(event) {

    // Evitamos que el formulario se envíe automáticamente.
    event.preventDefault();

    // Comprobamos primero nuestras reglas personalizadas.
    comprobarReglas();

    // Validamos todos los campos.
    // La función también enfoca el primero que tenga errores.
    const valido = validarFormulario(formulario);

    // Si hay algún error, detenemos el proceso.
    if (!valido) {

        return;

    }

    // Obtenemos los datos del formulario.
    const formData = new FormData(formulario);

    // Convertimos los datos en un objeto normal.
    const datos = Object.fromEntries(formData.entries());

    // Nunca mostramos la contraseña en el resultado.
    delete datos.clave;

    // Tampoco mostramos la segunda contraseña.
    delete datos.clave2;

    // Mostramos los datos en formato JSON.
    resultado.textContent = JSON.stringify(datos, null, 2);

});


// ----------------------------------------------------------
// 8. EVENTO RESET
// ----------------------------------------------------------

// Se ejecuta al pulsar el botón Borrar.

formulario.addEventListener("reset", function() {

    // Eliminamos todos los errores y mensajes.
    limpiarErrores(formulario);

    // Limpiamos el resultado.
    resultado.textContent = "";

});
