namespace funciones {

    let cuentaCuento = () => {

        let cuento: string = '';

        let agregarTexto = (texto: string): void => {
            cuento += texto;
        };

        let mostrar = (): void => {
            console.log(cuento);
        };

        // API
        return {
            agregarTexto: agregarTexto,
            mostrar: mostrar
        };

    };

    let cuento1 = cuentaCuento();

    cuento1.agregarTexto('Hubo una vez');
    cuento1.agregarTexto(' un desarrollador que esta aprendiendo JS');

    cuento1.mostrar();

    let cuento2 = cuentaCuento();

    cuento2.agregarTexto('Lorem ipsum lorem ipsum');
    cuento2.mostrar();

    let cuento3 = cuentaCuento();

    cuento3.agregarTexto('Data data data data data');
    cuento3.mostrar();

}
