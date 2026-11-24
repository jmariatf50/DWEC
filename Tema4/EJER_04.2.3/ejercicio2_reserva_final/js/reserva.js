
// ==========================================================
// EJER_04.2.3
// EJERCICIO 2.2 · RESERVA DE VIAJE
// ==========================================================

// Importamos las funciones del módulo reutilizable.
import {
    mostrarError,
    limpiarErrores
} from "./validaciones.js";


// ----------------------------------------------------------
// 1. OBTENER LOS ELEMENTOS DEL HTML
// ----------------------------------------------------------

const formulario = document.getElementById("reserva");
const total = document.getElementById("total");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");

// Desactivamos la validación automática del navegador.
formulario.noValidate = true;


// Guardamos los campos que utilizaremos frecuentemente.
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const personas = document.getElementById("personas");
const actividades = document.getElementById("actividades");
const comentarios = document.getElementById("comentarios");


// ----------------------------------------------------------
// 2. ESTABLECER LA FECHA MÍNIMA
// ----------------------------------------------------------

// Obtenemos la fecha de hoy en formato YYYY-MM-DD.

const hoy = new Date();

const fechaHoy =
    hoy.getFullYear() + "-" +
    String(hoy.getMonth() + 1).padStart(2, "0") + "-" +
    String(hoy.getDate()).padStart(2, "0");

// No permitimos reservar para fechas anteriores a hoy.
entrada.min = fechaHoy;
salida.min = fechaHoy;


// ----------------------------------------------------------
// 3. FUNCIÓN COMPROBAR REGLAS
// ----------------------------------------------------------

// Aquí comprobamos las reglas que no se pueden controlar
// únicamente mediante los atributos HTML.
//
// setCustomValidity() crea mensajes de error propios.

function comprobarReglas() {

    // Quitamos primero los errores personalizados anteriores.
    salida.setCustomValidity("");
    actividades.setCustomValidity("");


    // ------------------------------------------------------
    // COMPROBAR QUE LA SALIDA SEA POSTERIOR A LA ENTRADA
    // ------------------------------------------------------

    if (entrada.value !== "" && salida.value !== "") {

        // Convertimos las fechas en objetos Date.
        const fechaEntrada = new Date(
            entrada.value + "T00:00:00"
        );

        const fechaSalida = new Date(
            salida.value + "T00:00:00"
        );

        // La salida debe ser posterior a la entrada.
        if (fechaSalida <= fechaEntrada) {

            salida.setCustomValidity(
                "La fecha de salida debe ser posterior a la entrada."
            );

        }

    }


    // ------------------------------------------------------
    // COMPROBAR EL NÚMERO DE ACTIVIDADES
    // ------------------------------------------------------

    // selectedOptions contiene las opciones seleccionadas.
    const seleccionadas = actividades.selectedOptions;

    // No permitimos seleccionar más de tres actividades.
    if (seleccionadas.length > 3) {

        actividades.setCustomValidity(
            "Solo puedes seleccionar un máximo de 3 actividades."
        );

    }

}


// ----------------------------------------------------------
// 4. FUNCIÓN CALCULAR NOCHES
// ----------------------------------------------------------

// Calcula la diferencia entre las fechas de entrada y salida.
//
// Se puede reutilizar para calcular noches de hotel,
// apartamentos o cualquier alojamiento.

function calcularNoches() {

    // Si falta alguna fecha, devolvemos cero.
    if (entrada.value === "" || salida.value === "") {

        return 0;

    }

    // Convertimos ambas fechas.
    const fechaEntrada = new Date(
        entrada.value + "T00:00:00"
    );

    const fechaSalida = new Date(
        salida.value + "T00:00:00"
    );

    // Restamos las fechas en milisegundos.
    const diferencia =
        fechaSalida.getTime() - fechaEntrada.getTime();

    // Un día tiene 86.400.000 milisegundos.
    const noches = diferencia / 86400000;

    // Evitamos resultados negativos.
    return noches > 0 ? noches : 0;

}


// ----------------------------------------------------------
// 5. FUNCIÓN CALCULAR TOTAL
// ----------------------------------------------------------

// Calculamos el precio completo de la reserva.
//
// Fórmula:
// (precio habitación + extras por persona) x noches

function calcularTotal() {

    // Calculamos el número de noches.
    const noches = calcularNoches();

    // Obtenemos el número de personas.
    const numeroPersonas = personas.valueAsNumber || 0;


    // ------------------------------------------------------
    // PRECIO DE LA HABITACIÓN
    // ------------------------------------------------------

    // Leemos la habitación seleccionada.
    const habitacion = formulario.elements.habitacion.value;

    // Creamos un objeto con los precios.
    const preciosHabitacion = {

        individual: 40,
        doble: 60,
        familiar: 90

    };

    // Obtenemos el precio de la habitación.
    const precioHabitacion = preciosHabitacion[habitacion] || 0;


    // ------------------------------------------------------
    // PRECIO DE LOS EXTRAS
    // ------------------------------------------------------

    // Obtenemos todas las casillas de extras marcadas.
    const extrasMarcados = Array.from(
        formulario.querySelectorAll('input[name="extras"]:checked'),

        // Transformamos cada casilla en su precio.
        extra => Number(extra.getAttribute("data-precio"))

    );

    // Sumamos los precios utilizando reduce().
    const precioExtras = extrasMarcados.reduce(
        (acumulado, precio) => acumulado + precio,
        0
    );


    // ------------------------------------------------------
    // CALCULAR EL PRECIO FINAL
    // ------------------------------------------------------

    // Los extras se cobran por persona y por noche.
    const precioPorNoche =
        precioHabitacion + (precioExtras * numeroPersonas);

    // Multiplicamos por el número de noches.
    const precioFinal = precioPorNoche * noches;

    // Mostramos el resultado con dos decimales.
    total.textContent =
        "Total estimado: " + precioFinal.toFixed(2) + " €";

    // Devolvemos el precio por si necesitamos utilizarlo.
    return precioFinal;

}


// ----------------------------------------------------------
// 6. CONTADOR DE COMENTARIOS
// ----------------------------------------------------------

// Cuenta los caracteres escritos en el textarea.
//
// Se puede reutilizar para formularios con límites de texto,
// publicaciones o campos de descripción.

function actualizarContador() {

    // Obtenemos la longitud del texto.
    const cantidad = comentarios.value.length;

    // Actualizamos el contador.
    contador.textContent = cantidad + "/120";

}


// ----------------------------------------------------------
// 7. EVENTO FOCUSOUT
// ----------------------------------------------------------

// focusout se ejecuta cuando salimos de un campo.
//
// Utilizamos delegación: un solo escuchador en el formulario.

formulario.addEventListener("focusout", function(event) {

    const campo = event.target;

    // Solo trabajamos con campos del formulario.
    if (!campo.matches("input, select, textarea")) {

        return;

    }

    // Comprobamos las reglas personalizadas.
    comprobarReglas();

    // Mostramos el error del campo que pierde el foco.
    mostrarError(campo);

    // Si hemos cambiado la entrada y ya existe una salida,
    // también debemos comprobar la fecha de salida.
    if (campo.name === "entrada" && salida.value !== "") {

        mostrarError(salida);

    }

});


// ----------------------------------------------------------
// 8. EVENTO INPUT
// ----------------------------------------------------------

// input se ejecuta cuando modificamos un campo.
//
// También actualizamos el precio y el contador en directo.

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

    // Si cambia la fecha de entrada, revalidamos la salida.
    if (campo.name === "entrada" && salida.value !== "") {

        mostrarError(salida);

    }

    // Actualizamos el precio cada vez que cambia algún campo.
    calcularTotal();

    // Actualizamos el contador cuando cambian los comentarios.
    actualizarContador();

});


// ----------------------------------------------------------
// 9. EVENTO INVALID
// ----------------------------------------------------------

// El evento invalid NO burbujea.
//
// Por eso utilizamos el tercer parámetro true,
// que activa la fase de captura.
//
// Así podemos escuchar los errores de todos los campos
// desde el formulario, sin añadir escuchadores individuales.

formulario.addEventListener("invalid", function(event) {

    // Mostramos el error del campo inválido.
    mostrarError(event.target);

}, true);


// ----------------------------------------------------------
// 10. EVENTO SUBMIT
// ----------------------------------------------------------

// Se ejecuta al pulsar el botón Reservar.

formulario.addEventListener("submit", function(event) {

    // Evitamos el envío automático.
    event.preventDefault();

    // Comprobamos las reglas personalizadas.
    comprobarReglas();

    // checkValidity() comprueba todos los campos.
    // Al encontrar errores, activa el evento invalid.
    const valido = formulario.checkValidity();

    // Si hay errores, buscamos el primero.
    if (!valido) {

        // Buscamos solamente campos de formulario inválidos.
        // Excluimos fieldset para evitar problemas con :invalid.
        const primerError = formulario.querySelector(
            "input:invalid, select:invalid, textarea:invalid"
        );

        // Ponemos el foco en el primer campo inválido.
        if (primerError) {

            primerError.focus();

        }

        return;

    }


    // ------------------------------------------------------
    // OBTENER LOS DATOS DEL FORMULARIO
    // ------------------------------------------------------

    const formData = new FormData(formulario);

    // Obtenemos los extras seleccionados.
    // getAll() devuelve todos los valores de un mismo name.
    const extras = formData.getAll("extras");

    // Obtenemos las actividades seleccionadas.
    const actividadesElegidas = formData.getAll("actividades");

    // Si no hay extras, mostramos "ninguno".
    const extrasElegidos = extras.length > 0
        ? extras
        : "ninguno";


    // ------------------------------------------------------
    // CREAR EL RESUMEN DE LA RESERVA
    // ------------------------------------------------------

    const datosReserva = {

        nombre: formData.get("nombre"),

        telefono: formData.get("telefono"),

        personas: formData.get("personas"),

        entrada: formData.get("entrada"),

        salida: formData.get("salida"),

        habitacion: formData.get("habitacion"),

        actividades: actividadesElegidas,

        extras: extrasElegidos,

        comentarios: formData.get("comentarios"),

        noches: calcularNoches(),

        total: calcularTotal().toFixed(2) + " €"

    };


    // Mostramos el resumen en formato JSON.
    resultado.textContent = JSON.stringify(
        datosReserva,
        null,
        2
    );

});


// ----------------------------------------------------------
// 11. EVENTO RESET
// ----------------------------------------------------------

// Se ejecuta cuando pulsamos el botón Borrar.

formulario.addEventListener("reset", function() {

    // Limpiamos todos los errores.
    // También elimina los setCustomValidity().
    limpiarErrores(formulario);

    // Borramos el resumen de la reserva.
    resultado.textContent = "";

    // Dejamos el precio a cero.
    total.textContent = "Total estimado: 0.00 €";

    // Reiniciamos el contador.
    contador.textContent = "0/120";

});
