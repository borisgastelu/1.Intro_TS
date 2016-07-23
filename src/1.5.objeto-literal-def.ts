namespace objeto_literal_def {

    // Objeto Literal
    //  clave: valor

    export let persona: any = {
        nombre: 'Boris',
        apellidoPaterno: 'Gastelu',
        apellidoMaterno: 'Roque',
        edad: 32,
        frase: 'Hoy es un buen dia para aprender TypeScript'
    };
    // console.log(persona);

    // Notacion punto
    persona.hobbies = ['video juegos'];    // lista
    // console.log(persona);

    // Notacion brackets
    persona['profesion'] = 'desarrollador';
    // console.log(persona);

    persona.agregarHobbies = function (hobbie) {
        this.hobbies.push(hobbie);
    };

    persona['mostrarHobbies'] = function () {
        console.log(this.hobbies.join(', '));
    };

    persona.separarFrase = function (separador) {
        var resultado = this.frase.split(separador || ' ');
        console.log(resultado);
    };

    persona.agregarTelefono = function (orden: number, tipo: string, numero: string) {
        // Anidar objetos que tengan valores para los telefonos
        this['telefono' + orden] = {
            tipo: tipo,
            numero: numero
        };
    };

    // let persona2 = {
    //     name: 'Juan',
    //     paterno: 'Rodriguez',
    //     hobby: ['fulbito', 'nadar']
    // };

}
