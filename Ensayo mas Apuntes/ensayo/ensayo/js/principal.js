// Nombre y apellidos: José María Trabadelo Fernández

import { tareasIniciales } from './datos.js';

// ============================================================
// Constantes y elementos de la página (ya definidos: no los cambies)
// ============================================================
const ESTADOS = ['porhacer', 'encurso', 'hecha'];
const LIMITE_HORAS = 40;

const formularioTarea = document.querySelector('#formulario-tarea');
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');

const columnas = {
  porhacer: document.querySelector('#col-porhacer'),
  encurso: document.querySelector('#col-encurso'),
  hecha: document.querySelector('#col-hecha')
};

const contadores = {
  porhacer: document.querySelector('#num-porhacer'),
  encurso: document.querySelector('#num-encurso'),
  hecha: document.querySelector('#num-hecha')
};

// Se desactiva la validación del navegador: los mensajes los muestras tú
formularioTarea.noValidate = true;

// Tareas del tablero. Es una copia: los datos originales no se tocan
let tareas = tareasIniciales.map((tarea) => ({ ...tarea }));

// Repinta todo a partir del array de tareas
const repintar = () => {
  pintarTablero(buscarTareas(tareas, buscador.value));
  pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · Formulario y validación
// ============================================================

// 1.1 · Devuelve el texto del error de un campo según su `validity`
const mensajeDeError = (campo) => {
  if (campo.validity.valueMissing) {
    return 'Este campo es obligatorio';
  }

  if (campo.validity.tooShort) {
    return `Escribe al menos ${campo.minLength} caracteres`;
  }

  if (
    campo.validity.rangeUnderflow ||
    campo.validity.rangeOverflow
  ) {
    return `Debe estar entre ${campo.min} y ${campo.max}`;
  }

  if (campo.validity.customError) {
    return campo.validationMessage;
  }

  return '';
};

// 1.2 · Muestra u oculta el error de un campo y devuelve si es válido
const validarCampo = (campo) => {
  const mensaje = mensajeDeError(campo);
  const elementoError = campo.nextElementSibling;

  elementoError.textContent = mensaje;
  campo.classList.toggle('invalido', mensaje !== '');

  return mensaje === '';
};

// 1.3 · Aplica o quita el error personalizado de #horas
const comprobarHoras = () => {
  const horasPendientes = tareas
    .filter((tarea) => tarea.estado !== 'hecha')
    .reduce((total, tarea) => total + tarea.horas, 0);

  const horasNuevas =
    campoHoras.value === '' ? 0 : Number(campoHoras.value);

  if (horasPendientes + horasNuevas > LIMITE_HORAS) {
    campoHoras.setCustomValidity(
      `Superas el límite de ${LIMITE_HORAS} h pendientes ` +
      `(ahora hay ${horasPendientes} h)`
    );
  } else {
    campoHoras.setCustomValidity('');
  }
};

// 1.4 · Deja el formulario como recién cargado
const limpiarFormulario = () => {
  formularioTarea.reset();

  const campos = formularioTarea.elements;

  for (const campo of campos) {
    if (
      campo instanceof HTMLInputElement ||
      campo instanceof HTMLSelectElement ||
      campo instanceof HTMLTextAreaElement
    ) {
      campo.classList.remove('invalido');
      campo.setCustomValidity('');

      const elementoError = campo.nextElementSibling;

      if (elementoError?.classList.contains('error')) {
        elementoError.textContent = '';
      }
    }
  }

  campoHoras.setCustomValidity('');
  mensajeFormulario.textContent = '';
};

// 1.5 · Eventos del formulario
formularioTarea.addEventListener('change', (evento) => {
  const campo = evento.target;

  comprobarHoras();
  validarCampo(campo);
});

formularioTarea.addEventListener('input', (evento) => {
  const campo = evento.target;

  if (campo.classList.contains('invalido')) {
    comprobarHoras();
    validarCampo(campo);
  }
});

formularioTarea.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    limpiarFormulario();
  }
});


// ============================================================
// APARTADO 2 · Cálculos con los datos (funciones puras)
// ============================================================

// 2.1 · Tareas cuyo título o asignatura contienen el texto buscado
const buscarTareas = (lista, texto) => {
  const textoNormalizado = texto.trim().toLowerCase();

  if (textoNormalizado === '') {
    return [...lista];
  }

  return lista.filter((tarea) => {
    const titulo = tarea.titulo.toLowerCase();
    const asignatura = tarea.asignatura.toLowerCase();

    return (
      titulo.includes(textoNormalizado) ||
      asignatura.includes(textoNormalizado)
    );
  });
};

// 2.2 · Reparte las tareas en un objeto con una lista por cada estado
const agruparPorEstado = (lista) => {
  const grupos = {
    porhacer: [],
    encurso: [],
    hecha: []
  };

  lista.forEach((tarea) => {
    if (grupos[tarea.estado]) {
      grupos[tarea.estado].push(tarea);
    }
  });

  return grupos;
};

// 2.3 · Suma las horas de cada asignatura, de más a menos horas
const horasPorAsignatura = (lista) => {
  const acumuladas = {};

  lista.forEach((tarea) => {
    acumuladas[tarea.asignatura] =
      (acumuladas[tarea.asignatura] ?? 0) + tarea.horas;
  });

  return Object.entries(acumuladas)
    .map(([asignatura, horas]) => ({
      asignatura,
      horas
    }))
    .sort((a, b) => {
      if (b.horas !== a.horas) {
        return b.horas - a.horas;
      }

      return a.asignatura.localeCompare(b.asignatura);
    });
};


// ============================================================
// APARTADO 3 · Pintar la página
// ============================================================

// 3.1 · Devuelve, sin insertarla, la tarjeta <li> de una tarea
const crearTarjeta = (tarea) => {
  const tarjeta = document.createElement('li');
  tarjeta.classList.add('tarjeta', `prioridad-${tarea.prioridad}`);
  tarjeta.dataset.id = tarea.id;

  const titulo = document.createElement('strong');
  titulo.classList.add('titulo');
  titulo.textContent = tarea.titulo;

  const meta = document.createElement('span');
  meta.classList.add('meta');
  meta.textContent = `${tarea.asignatura} · ${tarea.horas} h`;

  const botonRetroceder = document.createElement('button');
  botonRetroceder.type = 'button';
  botonRetroceder.dataset.accion = 'retroceder';
  botonRetroceder.textContent = '←';

  const botonAvanzar = document.createElement('button');
  botonAvanzar.type = 'button';
  botonAvanzar.dataset.accion = 'avanzar';
  botonAvanzar.textContent = '→';

  const posicion = ESTADOS.indexOf(tarea.estado);

  botonRetroceder.disabled = posicion === 0;
  botonAvanzar.disabled = posicion === ESTADOS.length - 1;

  tarjeta.append(
    titulo,
    meta,
    botonRetroceder,
    botonAvanzar
  );

  return tarjeta;
};

// 3.2 · Reparte las tarjetas y actualiza los contadores
const pintarTablero = (lista) => {
  const grupos = agruparPorEstado(lista);

  ESTADOS.forEach((estado) => {
    columnas[estado].replaceChildren();

    grupos[estado].forEach((tarea) => {
      columnas[estado].append(crearTarjeta(tarea));
    });

    contadores[estado].textContent = grupos[estado].length;
  });
};

// 3.3 · Pinta las horas por asignatura y el progreso
const pintarResumen = (lista) => {
  listaHoras.replaceChildren();

  horasPorAsignatura(lista).forEach(({ asignatura, horas }) => {
    const elemento = document.createElement('li');
    elemento.textContent = `${asignatura} — ${horas} h`;
    listaHoras.append(elemento);
  });

  const total = lista.length;
  const hechas = lista.filter(
    (tarea) => tarea.estado === 'hecha'
  ).length;

  const porcentaje =
    total === 0 ? 0 : Math.round((hechas / total) * 100);

  progreso.textContent =
    `Hechas: ${hechas} de ${total} (${porcentaje} %)`;
};


// ============================================================
// APARTADO 4 · Interacción
// ============================================================

// 4.1 · Mueve una tarea `paso` columnas
const moverTarea = (id, paso) => {
  const tarea = tareas.find((elemento) => elemento.id === id);

  if (!tarea) {
    return;
  }

  const posicionActual = ESTADOS.indexOf(tarea.estado);
  const posicionNueva = posicionActual + paso;

  if (
    posicionNueva < 0 ||
    posicionNueva >= ESTADOS.length
  ) {
    return;
  }

  tarea.estado = ESTADOS[posicionNueva];
};

// 4.2 · Añade una tarea nueva al array y la devuelve
const anadirTarea = (datos) => {
  const mayorId = tareas.reduce(
    (maximo, tarea) => Math.max(maximo, tarea.id),
    0
  );

  const nuevaTarea = {
    id: mayorId + 1,
    titulo: datos.titulo,
    asignatura: datos.asignatura,
    horas: datos.horas,
    estado: 'porhacer',
    prioridad: datos.prioridad
  };

  tareas.push(nuevaTarea);

  return nuevaTarea;
};

// 4.3 · Elimina las tareas hechas y devuelve cuántas eran
const archivarHechas = () => {
  const cantidadHechas = tareas.filter(
    (tarea) => tarea.estado === 'hecha'
  ).length;

  if (cantidadHechas > 0) {
    tareas = tareas.filter(
      (tarea) => tarea.estado !== 'hecha'
    );
  }

  return cantidadHechas;
};

// 4.4 · Eventos del tablero, buscador y botón de archivar
tablero.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-accion]');

  if (!boton || !tablero.contains(boton)) {
    return;
  }

  const tarjeta = boton.closest('.tarjeta');
  const id = Number(tarjeta.dataset.id);
  const paso = boton.dataset.accion === 'avanzar' ? 1 : -1;

  moverTarea(id, paso);
  repintar();
});

buscador.addEventListener('input', () => {
  repintar();
});

botonArchivar.addEventListener('click', () => {
  archivarHechas();
  repintar();
});

// 4.5 · Envío del formulario
formularioTarea.addEventListener('submit', (evento) => {
  evento.preventDefault();

  comprobarHoras();

  const campos = [
    formularioTarea.elements.titulo,
    formularioTarea.elements.asignatura,
    formularioTarea.elements.horas,
    formularioTarea.elements.prioridad
  ];

  const resultados = campos.map((campo) => validarCampo(campo));
  const primerCampoInvalido = campos.find(
    (campo, indice) => !resultados[indice]
  );

  if (primerCampoInvalido) {
    primerCampoInvalido.focus();
    return;
  }

  const titulo = formularioTarea.elements.titulo.value.trim();

  anadirTarea({
    titulo,
    asignatura: formularioTarea.elements.asignatura.value,
    horas: Number(formularioTarea.elements.horas.value),
    prioridad: formularioTarea.elements.prioridad.value
  });

  limpiarFormulario();
  repintar();

  mensajeFormulario.textContent = `Tarea añadida: ${titulo}`;
});

// Primer pintado
repintar();
