namespace arrays_metodos {

    // El primer elemento de la lista es el indice 0
    // La cantidad total de elementos menos 1

    export let personas: interfaces.IPersona[] = [];

    // Agregar nuevas personas
    // * PUSH agrega al final
    personas.push({ nombre: 'Pedro', apePaterno: 'Ramos', edad: 21 });
    personas.push({ nombre: 'Felix', apePaterno: 'Diaz', edad: 30 });

    // * UNSHIFT agrega al inicio
    personas.unshift({ nombre: 'Maria', apePaterno: 'Solis', edad: 18 });
    personas.unshift({ nombre: 'Laura', apePaterno: 'Angeles', edad: 33 });

    // let personasRemovidas = [];

    // Remover personas
    // * POP quita del final
    // personasRemovidas.push(personas.pop());

    // * SHIFT quita del inicio
    // personasRemovidas.push(personas.shift());

    // console.log(personas);
    // console.log(`Cantidad de personas: ${personas.length}`);
    // console.log('Personas Removidas', personasRemovidas);

}
