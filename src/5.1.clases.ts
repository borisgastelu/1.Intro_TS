namespace clases {

    // Clases, es una plantilla para crear otros objetos
    class Persona {

        // Forma 1:
        // nombre: string;

        // constructor(nombre: string) {
        //     this.nombre = nombre;
        // }

        // Forma 2: Agrega propiedades a la clase en un solo paso
        constructor(public nombre: string) { }

    }

    // Creacion de objetos
    let persona1 = new Persona('Pepe');
    console.log(persona1);

    let persona2 = new Persona('Maria');
    console.log(persona2);

}
