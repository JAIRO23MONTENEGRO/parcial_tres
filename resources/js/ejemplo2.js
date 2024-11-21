document.getElementById("charAtButton").addEventListener("click", function () {
    const text = document.getElementById("text2Input").value;
    const index = parseInt(document.getElementById("indexInput2").value);

    if (isNaN(index) || index < 0 || index >= text.length) {
        document.getElementById("charAtResult").textContent = "Índice fuera de rango.";
    } else {
        document.getElementById("charAtResult").textContent = `El carácter en el índice ${index} es: "${text.charAt(index)}"`;
    }
});
