document.addEventListener('DOMContentLoaded', function() {
    // Obtener las referencias a los elementos del DOM
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');

    // Agregar un evento de clic al botón
    buttonText.addEventListener('click', function() {
        // Obtener el valor del input
        const texto = inputText.value;
        
        // Guardar el valor en localStorage
        localStorage.setItem('datoGuardado', texto);
        
        // extra: limpiar el input después de guardar
        inputText.value = '';
        
        // extra: dar feedback al usuario
        alert('Dato guardado correctamente!');
    });
});