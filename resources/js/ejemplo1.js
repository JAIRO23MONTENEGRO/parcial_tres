//// Agregar un evento al botón para ejecutar la función cuando se haga clic
document.getElementById('lengthButton').addEventListener('click', function () {
    // Obtener el texto ingresado por el usuario
    const cadena = document.getElementById('text1Input').value;

    // Verificar si el usuario ingresó algo
    if (cadena.trim() === "") {
        // Si el campo está vacío o solo tiene espacios
        document.getElementById('lengthResult').textContent = 
            "Por favor, ingresa un texto válido.";
    } else {
        // Calcular la longitud de la cadena
        const longitud = cadena.length;

        // Mostrar el resultado
        document.getElementById('lengthResult').textContent = 
            `La longitud de la cadena "${cadena}" es: ${longitud}`;
    }
});
