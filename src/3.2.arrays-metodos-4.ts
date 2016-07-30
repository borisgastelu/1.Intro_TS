namespace arrays_metodos {

    // filter -> evalua condicion sobre cada elemento de la lista
    //        -> devuelve otra lista

    export let filtrarPorEdad = (edad: number): interfaces.IPersona[] => {
        return personas.filter((persona) => {
            return persona.edad >= edad;
        });
    };

    // console.log(filtrarPorEdad(30));

    let filtrarPorApellido = (texto: string): interfaces.IPersona[] => {
        return personas.filter((persona) => {
            texto = texto.toLowerCase();
            return persona.apePaterno.toLowerCase().indexOf(texto) > -1;
        });
    }

    // console.log(filtrarPorApellido('Grillo'));

}
