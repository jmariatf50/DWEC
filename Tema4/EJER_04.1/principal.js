
// ==========================================================
// EJER_04.1 · EVENTOS EN JAVASCRIPT
// Solución completa de los 8 ejercicios.
// ==========================================================


// ==========================================================
// EJERCICIO 1 · CONTADOR DE CLICS
// Evento: click
// ==========================================================

// Seleccionamos los elementos HTML.
const botonRestar = document.getElementById("boton-restar");
const botonSumar = document.getElementById("boton-sumar");
const botonReiniciar = document.getElementById("boton-reiniciar");
const valorContador = document.getElementById("valor-contador");

// Variable que almacena el valor del contador.
let contador = 0;

// Función para actualizar el contador en pantalla.
function actualizarContador() {

    // Mostramos el valor actual.
    valorContador.textContent = contador;

    // Si el contador es negativo, ponemos el texto en rojo.
    if (contador < 0) {
        valorContador.style.color = "red";
    } else {
        // Si no es negativo, recuperamos el color original.
        valorContador.style.color = "";
    }
}

// Al pulsar +, sumamos uno.
botonSumar.addEventListener("click", function() {

    contador++;
    actualizarContador();

});

// Al pulsar -, restamos uno.
botonRestar.addEventListener("click", function() {

    contador--;
    actualizarContador();

});

// Al pulsar Reiniciar, volvemos a cero.
botonReiniciar.addEventListener("click", function() {

    contador = 0;
    actualizarContador();

});


// REFERENCIA:
// click = detecta un clic.
// textContent = cambia el texto.
// style.color = modifica el color.
// Se utiliza en contadores, puntuaciones y cantidades.



// ==========================================================
// EJERCICIO 2 · TARJETA SENSIBLE AL RATÓN
// Eventos: mouseenter, mouseleave y dblclick
// ==========================================================

const tarjetaRaton = document.getElementById("tarjeta-raton");
const mensajeRaton = document.getElementById("mensaje-raton");

// Cuando el ratón entra en la tarjeta.
tarjetaRaton.addEventListener("mouseenter", function() {

    // Añadimos la clase CSS activa.
    tarjetaRaton.classList.add("activa");

    // Cambiamos el mensaje.
    mensajeRaton.textContent = "¡Estás dentro!";

});

// Cuando el ratón sale de la tarjeta.
tarjetaRaton.addEventListener("mouseleave", function() {

    // Eliminamos la clase activa.
    tarjetaRaton.classList.remove("activa");

    // Restauramos el mensaje original.
    mensajeRaton.textContent = "Pasa el ratón por la tarjeta";

});

// Cuando hacemos doble clic.
tarjetaRaton.addEventListener("dblclick", function() {

    // Cambiamos el texto de la tarjeta.
    tarjetaRaton.textContent = "¡Doble clic!";

});


// REFERENCIA:
// mouseenter = entrar con el ratón.
// mouseleave = salir con el ratón.
// dblclick = doble clic.
// Se utiliza para efectos visuales y tarjetas interactivas.



// ==========================================================
// EJERCICIO 3 · ESPEJO DE TEXTO
// Evento: input
// ==========================================================

const campoTexto = document.getElementById("campo-texto");
const ecoTexto = document.getElementById("eco-texto");
const caracteresRestantes = document.getElementById("caracteres-restantes");

// Establecemos el máximo de caracteres.
const maximoCaracteres = 30;

// Se ejecuta cada vez que cambia el contenido del input.
campoTexto.addEventListener("input", function() {

    // Obtenemos el texto escrito.
    const texto = campoTexto.value;

    // Mostramos el texto en el espejo.
    ecoTexto.textContent = texto;

    // Calculamos los caracteres restantes.
    const restantes = maximoCaracteres - texto.length;

    // Mostramos los caracteres restantes.
    caracteresRestantes.textContent = restantes;

    // Si quedan 5 o menos, añadimos la clase poco.
    if (restantes <= 5) {

        caracteresRestantes.classList.add("poco");

    } else {

        // Si quedan más de 5, quitamos la clase.
        caracteresRestantes.classList.remove("poco");

    }

});


// REFERENCIA:
// input = detecta cambios en un campo.
// value = obtiene el contenido del input.
// length = cuenta los caracteres.
// Se utiliza en buscadores y formularios.



// ==========================================================
// EJERCICIO 4 · MOVER CON EL TECLADO
// Evento: keydown
// ==========================================================

const areaJuego = document.getElementById("area-juego");
const cuadrado = document.getElementById("cuadrado");
const posicionCuadrado = document.getElementById("posicion-cuadrado");

// Variables que almacenan las coordenadas.
let posicionX = 0;
let posicionY = 0;

// Píxeles que se mueve en cada pulsación.
const movimiento = 10;

// Calculamos los límites del área de juego.
// Restamos el tamaño del cuadrado para que no se salga.
const limiteX = areaJuego.clientWidth - cuadrado.offsetWidth;
const limiteY = areaJuego.clientHeight - cuadrado.offsetHeight;

// Función para actualizar la posición.
function actualizarPosicion() {

    // Actualizamos la posición horizontal.
    cuadrado.style.left = posicionX + "px";

    // Actualizamos la posición vertical.
    cuadrado.style.top = posicionY + "px";

    // Mostramos las coordenadas.
    posicionCuadrado.textContent =
        "Posición: (" + posicionX + ", " + posicionY + ")";

}

// Escuchamos las pulsaciones del teclado.
document.addEventListener("keydown", function(event) {

    // Comprobamos qué tecla se ha pulsado.
    switch (event.key) {

        case "ArrowRight":
            posicionX += movimiento;
            break;

        case "ArrowLeft":
            posicionX -= movimiento;
            break;

        case "ArrowDown":
            posicionY += movimiento;
            break;

        case "ArrowUp":
            posicionY -= movimiento;
            break;

        case " ":
            // La barra espaciadora reinicia la posición.
            posicionX = 0;
            posicionY = 0;
            break;

        default:
            // Si no es una tecla válida, no hacemos nada.
            return;
    }

    // Evitamos que el cuadrado salga por la izquierda.
    if (posicionX < 0) {
        posicionX = 0;
    }

    // Evitamos que salga por arriba.
    if (posicionY < 0) {
        posicionY = 0;
    }

    // Evitamos que salga por la derecha.
    if (posicionX > limiteX) {
        posicionX = limiteX;
    }

    // Evitamos que salga por abajo.
    if (posicionY > limiteY) {
        posicionY = limiteY;
    }

    // Actualizamos la posición.
    actualizarPosicion();

});


// REFERENCIA:
// keydown = detecta una pulsación.
// event.key = indica qué tecla se ha pulsado.
// switch = permite comprobar diferentes opciones.
// Se utiliza en videojuegos y controles de teclado.



// ==========================================================
// EJERCICIO 5 · PALETA DE COLORES
// Evento: click y delegación de eventos
// ==========================================================

const paleta = document.getElementById("paleta");
const lienzo = document.getElementById("lienzo");
const nombreColor = document.getElementById("nombre-color");

// Utilizamos un único escuchador en el elemento padre.
// Esto se llama DELEGACIÓN DE EVENTOS.
paleta.addEventListener("click", function(event) {

    // Identificamos el elemento exacto pulsado.
    const muestra = event.target;

    // Comprobamos que tenga la clase muestra.
    if (muestra.classList.contains("muestra")) {

        // Obtenemos los atributos personalizados del HTML.
        const color = muestra.getAttribute("data-color");
        const nombre = muestra.getAttribute("data-nombre");

        // Cambiamos el color de fondo del lienzo.
        lienzo.style.backgroundColor = color;

        // Mostramos el nombre del color.
        nombreColor.textContent = nombre;

    }

});


// REFERENCIA:
// event.target = elemento donde se origina el evento.
// contains() = comprueba si tiene una clase.
// getAttribute() = obtiene un atributo HTML.
// La delegación sirve para gestionar muchos elementos
// utilizando un único addEventListener.



// ==========================================================
// EJERCICIO 6 · GRUPO CON FOCO
// Eventos: focusin y focusout
// ==========================================================

const grupoContacto = document.getElementById("grupo-contacto");
const mensajeFoco = document.getElementById("mensaje-foco");

// focusin se ejecuta cuando el foco entra en un elemento
// o en alguno de sus elementos hijos.
grupoContacto.addEventListener("focusin", function(event) {

    // Añadimos la clase activo al grupo.
    grupoContacto.classList.add("activo");

    // Mostramos el placeholder del campo seleccionado.
    mensajeFoco.textContent = "Editando: " + event.target.placeholder;

});

// focusout se ejecuta cuando el foco sale de un elemento
// o de alguno de sus elementos hijos.
grupoContacto.addEventListener("focusout", function(event) {

    // Comprobamos si el nuevo elemento enfocado sigue
    // estando dentro del grupo.
    if (!grupoContacto.contains(event.relatedTarget)) {

        // Eliminamos la clase activo.
        grupoContacto.classList.remove("activo");

        // Restauramos el mensaje.
        mensajeFoco.textContent = "Ningún campo activo";

    }

});


// REFERENCIA:
// focusin = entra el foco.
// focusout = sale el foco.
// event.target = elemento que recibe el foco.
// event.relatedTarget = elemento relacionado con el cambio.
// focusin y focusout SÍ burbujean.
// Se utiliza en formularios y validaciones.



// ==========================================================
// EJERCICIO 7 · BURBUJA Y CAPTURA
// Eventos: click y propagación
// ==========================================================

const cajaExterna = document.getElementById("caja-externa");
const cajaMedia = document.getElementById("caja-media");
const cajaInterna = document.getElementById("caja-interna");

const registroFlujo = document.getElementById("registro-flujo");
const botonLimpiarFlujo = document.getElementById("boton-limpiar-flujo");

// Función para añadir mensajes a la lista.
function registrarEvento(mensaje) {

    // Creamos un nuevo elemento li.
    const elemento = document.createElement("li");

    // Escribimos el mensaje.
    elemento.textContent = mensaje;

    // Añadimos el elemento a la lista.
    registroFlujo.appendChild(elemento);

}


// ---------------- FASE DE BURBUJEO ----------------

// false indica que escuchamos en fase de burbujeo.
//
// Al pulsar la caja interna, el orden es:
// 1. Interna
// 2. Media
// 3. Externa

cajaExterna.addEventListener("click", function() {

    registrarEvento("Externa");

}, false);

cajaMedia.addEventListener("click", function() {

    registrarEvento("Media");

}, false);

cajaInterna.addEventListener("click", function() {

    registrarEvento("Interna");

}, false);


// ---------------- FASE DE CAPTURA ----------------

// true indica que escuchamos en fase de captura.
//
// Al pulsar la caja interna, el orden es:
// 1. Externa (captura)
// 2. Media (captura)
// 3. Interna (captura)
// 4. Interna
// 5. Media
// 6. Externa

cajaExterna.addEventListener("click", function() {

    registrarEvento("Externa (captura)");

}, true);

cajaMedia.addEventListener("click", function() {

    registrarEvento("Media (captura)");

}, true);

cajaInterna.addEventListener("click", function() {

    registrarEvento("Interna (captura)");

}, true);


// Botón para limpiar el registro.
botonLimpiarFlujo.addEventListener("click", function() {

    // Eliminamos todos los elementos de la lista.
    registroFlujo.innerHTML = "";

});


// REFERENCIA:
// true = captura (de fuera hacia dentro).
// false = burbujeo (de dentro hacia fuera).
// Se utiliza para controlar eventos en elementos anidados.



// ==========================================================
// EJERCICIO 8 · DETENER Y CANCELAR
// Eventos: click, stopPropagation y preventDefault
// ==========================================================

const tarjetaProducto = document.getElementById("tarjeta-producto");
const botonComprar = document.getElementById("boton-comprar");
const enlaceInfo = document.getElementById("enlace-info");
const mensajeEstado = document.getElementById("mensaje-estado");

// Función para añadir mensajes sin borrar los anteriores.
function mostrarEstado(mensaje) {

    // Añadimos un salto de línea si ya hay contenido.
    mensajeEstado.textContent +=
        (mensajeEstado.textContent ? "\n" : "") + mensaje;

}


// ---------------- EVENTO DE LA TARJETA ----------------

// Al pulsar cualquier parte de la tarjeta,
// aparece el mensaje correspondiente.
tarjetaProducto.addEventListener("click", function() {

    mostrarEstado("Has pulsado la tarjeta");

});


// ---------------- BOTÓN COMPRAR ----------------

// El botón está dentro de la tarjeta.
// El evento podría subir hasta el elemento padre.
//
// stopPropagation() evita que llegue a la tarjeta.
botonComprar.addEventListener("click", function(event) {

    // Detenemos la propagación del evento.
    event.stopPropagation();

    // Mostramos el mensaje de compra.
    mostrarEstado("Producto comprado");

});


// ---------------- ENLACE MÁS INFORMACIÓN ----------------

// Los enlaces tienen un comportamiento predeterminado:
// navegar a la dirección indicada en href.
//
// preventDefault() cancela ese comportamiento.
enlaceInfo.addEventListener("click", function(event) {

    // Evitamos que se abra la página.
    event.preventDefault();

    // Mostramos el mensaje.
    mostrarEstado("Enlace bloqueado");

});


// stopPropagation():
// Detiene la propagación del evento.
// Evita que llegue a los elementos superiores.
//
// preventDefault():
// Cancela el comportamiento predeterminado.
// Por ejemplo, evita que un enlace abra otra página.
//
// NO SON LO MISMO.
//
// Se utiliza en tarjetas con botones, formularios,
// ventanas modales y enlaces personalizados.
