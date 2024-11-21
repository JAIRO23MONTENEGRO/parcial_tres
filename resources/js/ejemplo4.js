document.getElementById("atButton").addEventListener("click", function () {
    const text = document.getElementById("text4Input").value;
    const index = parseInt(document.getElementById("indexInput4").value);

    if (isNaN(index) || Math.abs(index) >= text.length) {
        document.getElementById("atResult").textContent = "Índice fuera de rango.";
    } else {
        const char = text.at(index);
        document.getElementById("atResult").textContent = `El carácter en el índice ${index} es: "${char}"`;
    }
});
