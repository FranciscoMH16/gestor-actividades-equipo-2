// Gestor de Actividades Académicas
// Archivo principal de JavaScript

// 'feature/registro' implementará la captura del formulario
// 'feature/listado' implementará la visualización de actividades

console.log("Gestor de Actividades cargado correctamente.");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const responsable = document.getElementById("responsable").value;
    const prioridad = document.getElementById("prioridad").value;
    const estado = document.getElementById("estado").value;

    if (nombre.trim() === "") {
        alert("Debe ingresar el nombre de la actividad.");
        return;
    }

    if (descripcion.trim() === "") {
        alert("Debe ingresar una descripción.");
        return;
    }

    if (responsable.trim() === "") {
        alert("Debe ingresar un responsable.");
        return;
    }

    if (prioridad === "") {
        alert("Debe seleccionar una prioridad.");
        return;
    }

    if (estado === "") {
        alert("Debe seleccionar un estado.");
        return;
    }

    console.log("Actividad válida:");
    console.log(nombre, descripcion, responsable, prioridad, estado);
});