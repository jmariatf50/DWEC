
// ==========================================================
// EJER_04.2.3
// MÓDULO REUTILIZABLE DE VALIDACIONES
// ==========================================================


// ----------------------------------------------------------
// 1. FUNCIÓN MENSAJE ERROR
// ----------------------------------------------------------

// Devuelve un mensaje personalizado en español dependiendo
// del error que tenga el campo.
//
// Se puede reutilizar en cualquier formulario HTML que use
// los atributos required, minlength, maxlength, pattern, etc.

export function mensajeError(campo) {

    // Si el campo no tiene errores, devolvemos una cadena vacía.
    if (campo.validity.valid) {
        return "";
    }

    // Si el error lo hemos creado nosotros con setCustomValidity(),
    // mostramos directamente el mensaje personalizado.
    if (campo.validity.customError) {
        return campo.validationMessage;
    }

    // Objeto con los distintos tipos de errores y sus mensajes.
    const mensajes = {

        valueMissing: () => {

            // Las casillas de verificación tienen un mensaje propio.
            if (campo.type === "checkbox") {
                return "Debes aceptar esta opción.";
            }

            // Los botones de opción también necesitan un mensaje propio.
            if (campo.type === "radio") {
                return "Debes seleccionar una opción.";
            }

            // Las listas desplegables.
            if (campo.tagName === "SELECT") {
                return "Debes seleccionar una opción.";
            }

            return "Este campo es obligatorio.";
        },

        typeMismatch: () => {

            if (campo.type === "email") {
                return "Introduce un correo electrónico válido.";
            }

            return "El formato introducido no es correcto.";
        },

        patternMismatch: () => {
            return campo.title || "El formato introducido no es válido.";
        },

        tooShort: () => {
            return `Debes introducir al menos ${campo.minLength} caracteres.`;
        },

        tooLong: () => {
            return `No puedes superar los ${campo.maxLength} caracteres.`;
        },

        rangeUnderflow: () => {
            return `El valor mínimo permitido es ${campo.min}.`;
        },

        rangeOverflow: () => {
            return `El valor máximo permitido es ${campo.max}.`;
        },

        badInput: () => {
            return "El valor introducido no es válido.";
        }

    };

    // Recorremos las claves del objeto y encontramos
    // cuál es la causa del error.
    const causa = Object.keys(mensajes).find(clave =>
        campo.validity[clave]
    );

    // Si encontramos una causa, devolvemos su mensaje.
    // Si no, mostramos un mensaje genérico.
    return causa ? mensajes[causa]() : "Campo no válido.";
}


// ----------------------------------------------------------
// 2. FUNCIÓN MOSTRAR ERROR
// ----------------------------------------------------------

// Escribe el mensaje debajo del campo correspondiente.
// También añade o quita la clase con-error.
//
// Devuelve true si el campo es válido y false si no.

export function mostrarError(campo) {

    // Buscamos el párrafo cuyo id coincide con el nombre del campo.
    const zonaError = document.getElementById("error-" + campo.name);

    // Obtenemos el mensaje personalizado.
    const mensaje = mensajeError(campo);

    // Si existe el párrafo, escribimos el mensaje.
    if (zonaError) {
        zonaError.textContent = mensaje;
    }

    // Si el campo es válido, quitamos la clase de error.
    if (campo.validity.valid) {

        campo.classList.remove("con-error");

        // Indicamos que el campo no tiene errores.
        campo.removeAttribute("aria-invalid");

        return true;

    } else {

        // Si es inválido, añadimos la clase de error.
        campo.classList.add("con-error");

        // Indicamos accesiblemente que el campo es inválido.
        campo.setAttribute("aria-invalid", "true");

        return false;
    }

}


// ----------------------------------------------------------
// 3. FUNCIÓN VALIDAR FORMULARIO
// ----------------------------------------------------------

// Recorre todos los campos del formulario y los valida.
//
// Si encuentra errores:
// - Los muestra.
// - Enfoca el primer campo inválido.
//
// Devuelve true si todo es correcto.

export function validarFormulario(formulario) {

    // Convertimos la colección de elementos en un array.
    const campos = Array.from(formulario.elements);

    // Nos quedamos con input, select y textarea.
    const camposValidables = campos.filter(campo =>
        campo.matches("input, select, textarea")
    );

    // Validamos todos los campos.
    const errores = camposValidables.filter(campo =>
        !mostrarError(campo)
    );

    // Si hay errores, enfocamos el primero.
    if (errores.length > 0) {

        errores[0].focus();

        return false;
    }

    return true;
}


// ----------------------------------------------------------
// 4. FUNCIÓN LIMPIAR ERRORES
// ----------------------------------------------------------

// Se utiliza cuando pulsamos el botón reset.
//
// Borra los mensajes, las clases y los errores propios
// creados mediante setCustomValidity().

export function limpiarErrores(formulario) {

    const campos = Array.from(formulario.elements);

    campos.forEach(campo => {

        if (campo.matches("input, select, textarea")) {

            // Quitamos posibles errores personalizados.
            campo.setCustomValidity("");

            // Quitamos la clase visual de error.
            campo.classList.remove("con-error");

            // Quitamos el atributo de accesibilidad.
            campo.removeAttribute("aria-invalid");

            // Buscamos el párrafo del error.
            const zonaError = document.getElementById(
                "error-" + campo.name
            );

            // Lo dejamos vacío.
            if (zonaError) {
                zonaError.textContent = "";
            }

        }

    });

}
