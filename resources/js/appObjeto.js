const marcas = {
    ford: {
        logo: 'logos/logo_ford.jpg',
        fondo:'logos/ford_car.jpg',
        descripcion: 'Ford Motor Company es una empresa automotriz estadounidense fundada en 1903. Conocida por modelos icónicos como el Ford Mustang y la Ford F-150.',
        año: 1903
        
    },
    chevrolet: {
        logo: 'logos/logo_chevrolet.jpg',
        fondo:'logos/chevrolet_car.jpg',
        descripcion: 'Chevrolet es una marca de General Motors. Fundada en 1911, ha producido vehículos populares como el Chevrolet Camaro y el Chevrolet Silverado.',
        año: 1911
    },
    toyota: {
        logo: 'logos/logo_toyota.jpg',
        fondo:'logos/toyota_car.jpg',
        descripcion: 'Toyota Motor Corporation es una empresa japonesa líder en la industria automotriz. Su Toyota Corolla es uno de los autos más vendidos en todo el mundo.',
        año: 1937
    },
    honda: {
        logo: 'logos/logo_honda2.png',
        fondo:'logos/honda_car.jpg',
        descripcion: 'Honda Motor Co., Ltd. es una compañía japonesa conocida por su confiabilidad y eficiencia. El Honda Civic y el Honda CR-V son modelos populares.',
        año: 1948
    }
};

const selectMarca = document.getElementById('marca');
const resultadoDiv = document.getElementById('resultado');

selectMarca.addEventListener('change', function() {
    const marcaSeleccionada = selectMarca.value;
    const marcaInfo = marcas[marcaSeleccionada];

    // Cambiar la imagen de fondo
    document.getElementById('fondoMarca').style.backgroundImage = `url(${marcaInfo.fondo})`;  
    //document.getElementById('fondoMarca').style.opacity=0.5;


    resultadoDiv.innerHTML = `
        <h2>${marcaSeleccionada.toUpperCase()}</h2>
        <img class="logo" src="${marcaInfo.logo}" alt="${marcaSeleccionada} Logo">
        <p class="descripcion">${marcaInfo.descripcion}</p>
        <p class="Año"> ${"año de creación: " + marcaInfo.año}</p>
    `;
});
