namespace arrays_metodos {

    // splice
    let personaNueva: interfaces.IPersona = {
        nombre: 'Pepe',
        apePaterno: 'Grillo',
        edad: 21
    };

    // splice: agregar
    personas.splice(1, 0, personaNueva);
    console.log(personas);

    // indexOf
    let index = personas.indexOf(personaNueva);
    // console.log(index);

    // splice: eliminar
    // personas.splice(1, 1);
    // console.log(personas);

    // let removerPersonas = (quitarListaPersonas: interfaces.IPersona[]): void => {
    //     quitarListaPersonas.forEach((persona) => {
    //         let index = personas.indexOf(persona);
    //         if (index > -1) {
    //             personas.splice(index, 1);
    //         }
    //     });
    // };
    //
    // removerPersonas([personas[1], personas[2], { nombre: 'Teresa', apePaterno: 'Barrios', edad: 20 }]);
    // console.log(personas);

}
