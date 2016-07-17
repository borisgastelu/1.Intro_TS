namespace objeto_literal {

    // Interfaces -> Contrato a cumplir en una estructura de datos
    //            -> Las propiedades de la interfaz no son asignables
    interface IPunto {
        x: number;
        y: number;
        calcularArea: () => number;  // funcion
    }

    // Objeto literal
    let punto1: IPunto = {      // Cumple con el contrato de la interfaz
        x: 10,
        y: 20,
        calcularArea: function () {     // Mantengo el contexto del objeto literal
            return this.x * this.y;
        }
    };

    console.log(`Coordenada X1: ${punto1.x}`);
    console.log(`Coordenada Y1: ${punto1.y}`);
    console.log(`Area 1: ${punto1.calcularArea()}`);

    let punto2: IPunto = {
        x: 4,
        y: 5,
        calcularArea: function () {
            return this.x * this.y;
        }
    };

    console.log(`Coordenada X2: ${punto2.x}`);
    console.log(`Coordenada Y2: ${punto2.y}`);
    console.log(`Area 2: ${punto2.calcularArea()}`);

    // Funciones
    // Declarar funcion (Fat Arrow function)
    // let mostrarNombre = (nombre: string) => console.log(nombre);

    // Implementar o invocar
    // mostrarNombre('Boris');

}
