// ciclo 'for'
function mostrarTablaFor() {
    let contenido = '<h2>Tabla de multiplicar con "for"</h2><ul>';
    for (let i = 1; i <= 10; i++) { 
        contenido += `<li>6 x ${i} = ${6 * i}</li>`; 
    }
    contenido += '</ul>';
    document.getElementById('tabla-for').innerHTML = contenido;
}

// ciclo 'for in'
function mostrarTablaForIn() {
    let contenido = '<h2>Tabla de multiplicar con "for in"</h2><ul>'; 
    let tabla = {};
    for (let i = 1; i <= 10; i++) { 
        tabla[i] = 7 * i; 
    }
    for (let i in tabla) { 
        contenido += `<li>7 x ${i} = ${tabla[i]}</li>`; 
    }
    contenido += '</ul>'; 
    document.getElementById('tabla-for-in').innerHTML = contenido;
}

// ciclo 'for of'
function mostrarTablaForOf() {
    let contenido = '<h2>Tabla de multiplicar con "for of"</h2><ul>'; 
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(5 * i); 
    }
    for (let valor of tabla) {
        contenido += `<li>5 x ${tabla.indexOf(valor) + 1} = ${valor}</li>`; 
    }
    contenido += '</ul>';
    document.getElementById('tabla-for-of').innerHTML = contenido; 
}
//ciclo while
function mostrarTablaWhile() {
    let contenido = '<h2>Tabla de multiplicar con "while"</h2><ul>'; 
    let i = 1; 
    while (i <= 10) { 
        contenido += `<li>9 x ${i} = ${9 * i}</li>`; 
        i++;
    }
    contenido += '</ul>'; 
    document.getElementById('tabla-while').innerHTML = contenido;
}
//ciclo do while
function mostrarTablaDoWhile() {
    let contenido = '<h2>Tabla de multiplicar con "do while"</h2><ul>';
    let i = 1; 
    do {
        contenido += `<li>10 x ${i} = ${10 * i}</li>`; 
        i++; 
    } while (i <= 10); 
    contenido += '</ul>'; 
    document.getElementById('tabla-do-while').innerHTML = contenido; 
}


document.addEventListener("DOMContentLoaded", function() {
    mostrarTablaFor(); 
    mostrarTablaForIn(); 
    mostrarTablaForOf(); 
    mostrarTablaWhile(); 
    mostrarTablaDoWhile(); 
});