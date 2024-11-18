// Función para crear y mostrar la tabla de multiplicar usando el ciclo 'for'
function mostrarTablaFor() {
    let contenido = '<h2>Tabla de multiplicar con "for"</h2><ul>'; // Comienza el contenido HTML para la tabla con un título y una lista desordenada (ul)
    for (let i = 1; i <= 10; i++) { // Ciclo 'for' que itera desde 1 hasta 10
        contenido += `<li>6 x ${i} = ${6 * i}</li>`; // Genera una lista de multiplicaciones, por ejemplo: 5 x 1 = 5
    }
    contenido += '</ul>'; // Cierra la lista desordenada
    document.getElementById('tabla-for').innerHTML = contenido; // Inserta el contenido generado en el div con id 'tabla-for'
}

// Función para crear y mostrar la tabla de multiplicar usando el ciclo 'for in'
function mostrarTablaForIn() {
    let contenido = '<h2>Tabla de multiplicar con "for in"</h2><ul>'; // Título y lista
    let tabla = {}; // Creamos un objeto vacío para almacenar las multiplicaciones
    for (let i = 1; i <= 10; i++) { // Ciclo 'for' que llena el objeto con las multiplicaciones
        tabla[i] = 7 * i; // Almacena cada multiplicación en el objeto con la clave 'i'
    }
    for (let i in tabla) { // Usamos el ciclo 'for in' para recorrer las propiedades del objeto 'tabla'
        contenido += `<li>7 x ${i} = ${tabla[i]}</li>`; // Agrega cada multiplicación a la lista
    }
    contenido += '</ul>'; // Cierra la lista desordenada
    document.getElementById('tabla-for-in').innerHTML = contenido; // Inserta el contenido en el div con id 'tabla-for-in'
}

// Función para crear y mostrar la tabla de multiplicar usando el ciclo 'for of'
function mostrarTablaForOf() {
    let contenido = '<h2>Tabla de multiplicar con "for of"</h2><ul>'; // Título y lista
    let tabla = []; // Creamos un arreglo vacío
    for (let i = 1; i <= 10; i++) { // Ciclo 'for' que llena el arreglo con las multiplicaciones
        tabla.push(5 * i); // Empuja (agrega) cada resultado de la multiplicación al arreglo
    }
    for (let valor of tabla) { // Ciclo 'for of' que recorre los valores del arreglo
        contenido += `<li>5 x ${tabla.indexOf(valor) + 1} = ${valor}</li>`; // Agrega cada multiplicación a la lista
    }
    contenido += '</ul>'; // Cierra la lista desordenada
    document.getElementById('tabla-for-of').innerHTML = contenido; // Inserta el contenido en el div con id 'tabla-for-of'
}

// Función para crear y mostrar la tabla de multiplicar usando el ciclo 'while'
function mostrarTablaWhile() {
    let contenido = '<h2>Tabla de multiplicar con "while"</h2><ul>'; // Título y lista
    let i = 1; // Inicia la variable 'i' en 1
    while (i <= 10) { // Ciclo 'while' que se ejecuta mientras 'i' sea menor o igual a 10
        contenido += `<li>9 x ${i} = ${9 * i}</li>`; // Agrega la multiplicación a la lista
        i++; // Incrementa 'i' en 1
    }
    contenido += '</ul>'; // Cierra la lista desordenada
    document.getElementById('tabla-while').innerHTML = contenido; // Inserta el contenido en el div con id 'tabla-while'
}

// Función para crear y mostrar la tabla de multiplicar usando el ciclo 'do while'
function mostrarTablaDoWhile() {
    let contenido = '<h2>Tabla de multiplicar con "do while"</h2><ul>'; // Título y lista
    let i = 1; // Inicia la variable 'i' en 1
    do {
        contenido += `<li>10 x ${i} = ${10 * i}</li>`; // Agrega la multiplicación a la lista
        i++; // Incrementa 'i' en 1
    } while (i <= 10); // El ciclo 'do while' ejecuta el bloque al menos una vez, luego verifica si 'i' es menor o igual a 10
    contenido += '</ul>'; // Cierra la lista desordenada
    document.getElementById('tabla-do-while').innerHTML = contenido; // Inserta el contenido en el div con id 'tabla-do-while'
}

// Cuando el contenido de la página esté completamente cargado, ejecutamos las funciones para mostrar las tablas
document.addEventListener("DOMContentLoaded", function() {
    mostrarTablaFor(); // Llama a la función que muestra la tabla con 'for'
    mostrarTablaForIn(); // Llama a la función que muestra la tabla con 'for in'
    mostrarTablaForOf(); // Llama a la función que muestra la tabla con 'for of'
    mostrarTablaWhile(); // Llama a la función que muestra la tabla con 'while'
    mostrarTablaDoWhile(); // Llama a la función que muestra la tabla con 'do while
});