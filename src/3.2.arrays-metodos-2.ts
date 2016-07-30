namespace arrays_metodos {

    // Iteracion de elementos del array
    personas.forEach((persona) => {
        // console.log(`${persona.nombre} ${persona.apePaterno}`);
    });

    personas.forEach(function (persona) {
        // console.log(`${persona.nombre} ${persona.apePaterno}`);
    });

    let suma = 0;
    let cbSumaEdades = function (persona) {
        suma += persona.edad;
    };

    personas.forEach(cbSumaEdades);
    personas.forEach((persona) => suma += persona.edad);

    // console.log(suma);

}
