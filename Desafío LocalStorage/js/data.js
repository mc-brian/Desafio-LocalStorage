document.addEventListener('DOMContentLoaded', function() {
    // Obtener la referencia al elemento span donde mostraremos el dato
    const spanData = document.getElementById('data');

    // Obtener el dato del localStorage
    const datoGuardado = localStorage.getItem('datoGuardado');

    // Mostrar el dato en el span
    if (datoGuardado) {
        spanData.textContent = datoGuardado;
    } else {
        spanData.textContent = 'No hay dato guardado';
    }
});