document.getElementById("charCodeButton").addEventListener("click", function () {
    const text = document.getElementById("text3Input").value;
    const index = parseInt(document.getElementById("indexInput3").value);

    if (isNaN(index) || index < 0 || index >= text.length) {
        document.getElementById("charCodeResult").textContent = "Índice fuera de rango.";
    } else {
        const charCode = text.charCodeAt(index);
        document.getElementById("charCodeResult").textContent = `El código Unicode del carácter en el índice ${index} es: ${charCode}`;
    }
});
