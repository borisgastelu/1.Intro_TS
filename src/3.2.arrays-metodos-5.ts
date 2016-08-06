namespace arrays_metodos {

    // map -> devuelve una lista modificada por cada elemento de una lista
    let modificarDatos = (): any[] => {
        return personas.map((persona) => {
            let nombreCompleto = `${persona.nombre} ${persona.apePaterno}`;
            return {
                nombreCompleto: nombreCompleto,
                edad: persona.edad
            };
        });
    };

    console.log(modificarDatos());

    // reduce -> acumula resultados de una lista
    let resultado = [0, 1, 2, 3, 4].reduce((prev, next) => {
        return prev + next;
    }, 100);

    console.log(resultado);

}
