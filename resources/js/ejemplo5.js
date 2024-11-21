document.getElementById("bracketButton").addEventListener("click", function () {
    const text = document.getElementById("text5Input").value;
    const index = parseInt(document.getElementById("indexInput5").value);

    if (isNaN(index) || Math.abs(index) >= text.length) {
        document.getElementById("bracketResult").textContent = "Índice fuera de rango.";
    } else {
        const char = text[index >= 0 ? index : text.length + index];
        document.getElementById("bracketResult").textContent = `El carácter en el índice ${index} es: "${char}"`;
    }
});
