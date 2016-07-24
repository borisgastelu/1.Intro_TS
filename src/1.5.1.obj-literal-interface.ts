namespace objeto_literal_interface {

    export let persona: interfaces.IPersona = {
        nombre: 'Boris',
        apePaterno: 'Gastelu',
        apeMaterno: 'Roque',
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

    persona.agregarHobbies = function (hobbie: string): void {
        this.hobbies.push(hobbie);
    };

    persona['mostrarHobbies'] = function (): void {
        console.log(this.hobbies.join(', '));
    };

    persona.separarFrase = function (separador: string): void {
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

    let persona2: interfaces.IPersona = {
        nombre: 'Juan',
        apePaterno: 'Rodriguez',
        apeMaterno: 'Mendez',
        edad: 25,
        frase: 'Soy una persona',
        hobbies: ['fulbito', 'nadar']
    };

}
