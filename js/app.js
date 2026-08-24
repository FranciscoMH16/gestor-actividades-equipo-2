// Gestor de Actividades Académicas
// Archivo principal de JavaScript

// 'feature/registro' implementará la captura del formulario
// 'feature/listado' implementará la visualización de actividades

console.log("Gestor de Actividades cargado correctamente.");

// Obtener el formulario
const formulario = document.getElementById("formulario-actividad");

// Capturar el envío del formulario
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const responsable = document.getElementById("responsable").value;
    const prioridad = document.getElementById("prioridad").value;
    const estado = document.getElementById("estado").value;

    // Validar nombre
    if (nombre.trim() === "") {
        alert("Debe ingresar el nombre de la actividad.");
        return;
    }

    // Validar descripción
    if (descripcion.trim() === "") {
        alert("Debe ingresar una descripción.");
        return;
    }

    // Validar responsable
    if (responsable.trim() === "") {
        alert("Debe ingresar un responsable.");
        return;
    }

    // Validar prioridad
    if (prioridad === "") {
        alert("Debe seleccionar una prioridad.");
        return;
    }

    // Validar estado
    if (estado === "") {
        alert("Debe seleccionar un estado.");
        return;
    }

    // Mostrar los datos capturados
    console.log("Actividad válida:");
    console.log("Nombre:", nombre);
    console.log("Descripción:", descripcion);
    console.log("Responsable:", responsable);
    console.log("Prioridad:", prioridad);
    console.log("Estado:", estado);

// Agregar la actividad al listado
const listado = document.querySelector("#contenedor-listado tbody");

const fila = document.createElement("tr");

fila.innerHTML = `
    <td>${nombre}</td>
    <td>${descripcion}</td>
    <td>${responsable}</td>
    <td>${prioridad}</td>
    <td>${estado}</td>
`;

listado.appendChild(fila);

// Ordenar actividades por prioridad: Alta → Media → Baja
const ordenPrioridad = {
    "Alta": 1,
    "Media": 2,
    "Baja": 3
};

const filas = Array.from(listado.querySelectorAll("tr"));

filas.sort((a, b) => {
    const prioridadA = a.children[3].textContent;
    const prioridadB = b.children[3].textContent;

    return ordenPrioridad[prioridadA] - ordenPrioridad[prioridadB];
});

filas.forEach(fila => listado.appendChild(fila));

// Limpiar el formulario después de registrar la actividad
formulario.reset();

});